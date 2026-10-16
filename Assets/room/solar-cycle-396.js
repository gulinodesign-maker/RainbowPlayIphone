/* Music Rainbow 2.396 — calcolo astronomico offline di alba/tramonto.
   La posizione resta sul dispositivo; nessun servizio meteo/API esterna. */
(function () {
  'use strict';
  const DAY = 86400000, RAD = Math.PI / 180, J1970 = 2440588, J2000 = 2451545;
  let coordinates = null;
  let asked = false;
  let pending = false;
  const VISUAL_MODE_KEY = 'musicRainbowSolarVisualMode';
  let visualMode = 'auto';
  try {
    const storedMode = localStorage.getItem(VISUAL_MODE_KEY);
    if (storedMode === 'day' || storedMode === 'night' || storedMode === 'auto') visualMode = storedMode;
  } catch (_) {}
  const subscribers = new Set();
  const eventsCache = new Map();
  const clamp = (n, low, high) => Math.max(low, Math.min(high, n));
  const toDays = date => date.valueOf() / DAY - 0.5 + J1970 - J2000;
  const fromJulian = j => new Date((j + 0.5 - J1970) * DAY);
  const solarMeanAnomaly = d => RAD * (357.5291 + 0.98560028 * d);
  const eclipticLongitude = M => M + RAD * (1.9148 * Math.sin(M) + 0.0200 * Math.sin(2*M) + 0.0003 * Math.sin(3*M)) + RAD * 102.9372 + Math.PI;
  const declination = L => Math.asin(Math.sin(L) * Math.sin(RAD * 23.4397));
  const approxTransit = (Ht, lw, n) => 0.0009 + (Ht + lw) / (2*Math.PI) + n;
  const solarTransit = (ds, M, L) => J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2*L);
  function sunEvents(date) {
    if (!coordinates) return null;
    const midday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
    const key = midday.getFullYear()+'-'+midday.getMonth()+'-'+midday.getDate()+'-'+coordinates.latitude+'-'+coordinates.longitude;
    if (eventsCache.has(key)) return eventsCache.get(key);
    const lw = -coordinates.longitude * RAD, phi = coordinates.latitude * RAD;
    const n = Math.round(toDays(midday) - 0.0009 - lw/(2*Math.PI));
    const ds = approxTransit(0, lw, n);
    const M = solarMeanAnomaly(ds), L = eclipticLongitude(M), dec = declination(L);
    const noon = solarTransit(ds, M, L);
    const cosH = (Math.sin(-0.833 * RAD) - Math.sin(phi)*Math.sin(dec)) / (Math.cos(phi)*Math.cos(dec));
    let result;
    if (cosH > 1) result = {polarNight:true, sunrise:null, sunset:null};
    else if (cosH < -1) result = {polarNight:false, sunrise:null, sunset:null};
    else {
      const w = Math.acos(clamp(cosH, -1, 1));
      const set = solarTransit(approxTransit(w, lw, n), M, L);
      result = {sunrise:fromJulian(noon - (set - noon)), sunset:fromJulian(set), polarNight:null};
    }
    if (eventsCache.size > 12) eventsCache.clear();
    eventsCache.set(key, result);
    return result;
  }
  function isNight(date = new Date()) {
    const events = sunEvents(date);
    if (!events) { // Autorizzazione negata o non ancora concessa: modalità indicativa, non astronomica.
      const hour = date.getHours() + date.getMinutes()/60;
      return hour < 7 || hour >= 19;
    }
    if (events.polarNight !== null) return events.polarNight;
    return date < events.sunrise || date >= events.sunset;
  }
  function isVisualNight(date = new Date()) {
    if (visualMode === 'day') return false;
    if (visualMode === 'night') return true;
    return isNight(date);
  }
  function getVisualMode() { return visualMode; }
  function setVisualMode(mode = 'auto') {
    const next = mode === 'day' || mode === 'night' ? mode : 'auto';
    if (visualMode === next) return;
    visualMode = next;
    try {
      if (next === 'auto') localStorage.removeItem(VISUAL_MODE_KEY);
      else localStorage.setItem(VISUAL_MODE_KEY, next);
    } catch (_) {}
    notify();
  }
  function nightMilliseconds(from, to) {
    let a = Number(from), b = Number(to);
    if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) return 0;
    a = Math.max(a, b - 72*3600000); // Massimo tre giorni di tempo trascorso offline.
    let amount = 0;
    for (let t = a; t < b;) {
      const end = Math.min(t + 10*60000, b);
      if (isNight(new Date((t + end)/2))) amount += end - t;
      t = end;
    }
    return amount;
  }
  function notify() { for (const f of subscribers) { try { f(); } catch (_) {} } }
  function setCoordinates(lat, lon) {
    lat = Number(lat); lon = Number(lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat)>90 || Math.abs(lon)>180) return;
    const next = {latitude:Math.round(lat*10000)/10000, longitude:Math.round(lon*10000)/10000};
    if (!coordinates || coordinates.latitude !== next.latitude || coordinates.longitude !== next.longitude) eventsCache.clear();
    coordinates = next;
    pending = false;
    notify();
  }
  function setUnavailable() {pending = false; notify();}
  function requestLocation() {
    if (pending || asked) return;
    asked = true; pending = true;
    try {
      const handler = window.webkit?.messageHandlers?.musicRainbowApp;
      if (handler) {handler.postMessage({type:'solarLocationRequest'});return;}
    } catch (_) {}
    if (navigator.geolocation?.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        pos => setCoordinates(pos.coords.latitude, pos.coords.longitude),
        () => setUnavailable(),
        {enableHighAccuracy:false, timeout:12000, maximumAge:3600000}
      );
    } else setUnavailable();
  }
  window.MusicRainbowSolar = {isNight, isVisualNight, getVisualMode, setVisualMode, nightMilliseconds, setCoordinates, setUnavailable, requestLocation,
    subscribe(fn) {subscribers.add(fn);return ()=>subscribers.delete(fn)},
    getEvents(date = new Date()) {return sunEvents(date)},
    hasLocation() {return Boolean(coordinates)}
  };
})();
