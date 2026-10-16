/* Music Rainbow 2.414 — Native iPhone Taptic Engine bridge for Mìmo. */
(()=>{'use strict';
 const key='musicRainbowMimoHaptics414';
 const kinds=new Set(['touch','ears','play','eat','win','wing','sleep','bath','pop']);
 let enabled=true;
 try{enabled=localStorage.getItem(key)!=='off'}catch{}
 let last=0;
 const api={
  get enabled(){return enabled},
  setEnabled(value){enabled=!!value;try{localStorage.setItem(key,enabled?'on':'off')}catch{};return enabled},
  play(kind){
   if(!enabled||!kinds.has(kind)||document.hidden)return false;
   const now=performance.now();
   if(kind!=='pop'&&now-last<85)return false;
   last=now;
   try{
    const bridge=window.webkit?.messageHandlers?.musicRainbowHaptics;
    if(!bridge||typeof bridge.postMessage!=='function')return false;
    bridge.postMessage({kind});
    return true;
   }catch{return false}
  }
 };
 window.MimoHaptics=api;
 function installToggle(){
  const settings=document.getElementById('mimoSettingsSection');
  if(!settings)return false;
  if(settings.querySelector('#mr414MimoHaptics'))return true;
  const actions=settings.querySelector('.mr361SettingsActions');
  const wrap=document.createElement('div');wrap.className='mr414-haptic-preference';
  const button=document.createElement('button');button.type='button';button.id='mr414MimoHaptics';
  function sync(){
   button.setAttribute('aria-pressed',String(enabled));
   button.innerHTML=enabled?'📳 <span>Vibrazione di Mìmo: attiva</span>':'🔕 <span>Vibrazione di Mìmo: disattivata</span>';
   button.title=enabled?'Disattiva le vibrazioni di Mìmo':'Attiva le vibrazioni di Mìmo';
  }
  button.addEventListener('click',()=>{api.setEnabled(!enabled);sync();});
  sync();wrap.appendChild(button);
  if(actions)actions.insertAdjacentElement('afterend',wrap);
  else settings.appendChild(wrap);
  return true;
 }
 window.addEventListener('musicrainbow:mimo-render-status',installToggle);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installToggle,{once:true});
 else installToggle();
 // La sezione nasce dinamicamente dal modello 3D: se il bridge carica prima,
 // installa il comando appena arriva, senza duplicare controlli.
 if(!document.getElementById('mr414MimoHaptics')){
  const watcher=new MutationObserver(()=>{if(installToggle())watcher.disconnect()});
  watcher.observe(document.body,{childList:true,subtree:true});
 }

})();
