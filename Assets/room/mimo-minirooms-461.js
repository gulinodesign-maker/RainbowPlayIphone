/* Music Rainbow 2.0.1 (461) — discoteca e giochi nel mondo di Mìmo.
   Stereo = gesto esplicito per sbloccare l'AudioContext. Composizione sintetizzata
   locale, originale e senza file audio/licenze di terzi. Nessuna rete richiesta.
*/
(function(){
'use strict';
const R=window.MimoMiniroomsRules461;
if(!R)return;
const STORAGE='musicRainbowMimoMinirooms461';
const $$=(s,host=document)=>host.querySelector(s);
const roomNames={disco:'Discoteca',games:'Stanza giochi'};
const labels={
 it:{disco:'Discoteca',games:'Giochi',start:'Entra · 1 gettone',resume:'Continua la festa',need:'Mìmo dice: «Serve 1 gettone! Completa 5 esercizi musicali, anche in livelli diversi, e ne guadagnerai uno.»',stop:'La festa è finita! Completa 5 esercizi per guadagnare un altro gettone.',stereo:'Tocca lo stereo per avviare o fermare la musica',lights:'Tocca i faretti per accenderli',ball:'Tocca la palla specchiata per illuminarla',mimo:'Tocca Mìmo per una mossa speciale!',back:'Torna alla stanza di Mìmo'},
 en:{disco:'Disco',games:'Games',start:'Enter · 1 token',resume:'Continue playing',need:'Mìmo says: «You need 1 token! Complete 5 music exercises across any levels to earn one.»',stop:'Party time is over! Complete 5 exercises to earn another token.',stereo:'Tap the stereo to play or stop the music',lights:'Tap the lights to switch them on',ball:'Tap the mirror ball to light it up',mimo:'Tap Mìmo to make him dance!',back:'Back to Mìmo’s room'}
};
function t(id){const lang=(document.getElementById('appLanguageSelect')||{}).value||'it';return (labels[lang]||labels.it)[id]||labels.it[id]||id;}
let state;try{state=R.normalize(JSON.parse(localStorage.getItem(STORAGE)||'{}'));}catch(_){state=R.normalize({});}
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(_){}}
function tokens(){try{return Math.max(0,Math.floor(Number(getTotalAvailableTokens())||0));}catch(_){return 0;}}
function spend(){try{return !!consumeOldestSessionToken();}catch(_){return false;}}
function good(){window.MimoMood?.preview?.('entusiasta',3800);window.MimoHaptics?.play?.('play');}
let mode=null,stage=null,scene=null,ticker=null,lastTick=0,lookAt=0,lightOn=false,ballOn=false,confettiOn=false,stereoOn=false,poseCount=0;
let ctx=null,master=null,beatIndex=0,nextBeat=0,scheduler=null;
const beatSeconds=60/128/2; // 128 BPM; ottavi
const melody=[72,0,76,79,0,76,74,0,72,0,79,81,79,76,0,74,
  76,0,79,83,81,0,79,76,74,0,76,79,0,74,72,0,
  67,0,72,76,0,74,72,0,69,0,72,74,76,0,79,0,
  76,0,74,72,0,69,72,0,74,79,76,0,72,0,0,0];
const bass=[48,48,55,55,50,50,55,55,53,53,55,55,48,48,55,55];
function hz(midi){return 440*Math.pow(2,(midi-69)/12);}
function synth(freq,start,duration,volume,shape){
 if(!ctx||!master)return;
 const osc=ctx.createOscillator(),gain=ctx.createGain();
 osc.type=shape;osc.frequency.setValueAtTime(freq,start);
 gain.gain.setValueAtTime(0,start);
 gain.gain.linearRampToValueAtTime(volume,start+.013);
 gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
 osc.connect(gain).connect(master);osc.start(start);osc.stop(start+duration+.02);
}
function noise(start,duration,volume){
 if(!ctx||!master)return;
 const len=Math.max(1,Math.floor(ctx.sampleRate*duration));
 const buffer=ctx.createBuffer(1,len,ctx.sampleRate),a=buffer.getChannelData(0);
 // Deterministico: rumore percussivo sintetizzato, nessun sample registrato.
 let seed=(beatIndex*619+12345)>>>0;
 for(let i=0;i<len;i++){seed=(1664525*seed+1013904223)>>>0;a[i]=((seed/4294967295)*2-1)*(1-i/len);}
 const src=ctx.createBufferSource(),g=ctx.createGain(),hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=3300;
 src.buffer=buffer;g.gain.value=volume;src.connect(hp).connect(g).connect(master);src.start(start);
}
function scheduleBeat(index,start){
 if(!ctx)return;
 const m=melody[index%melody.length];
 if(m)synth(hz(m),start,beatSeconds*.84,.050,'triangle');
 if(index%2===0){
  synth(hz(bass[Math.floor(index/8)%bass.length]),start,beatSeconds*1.7,.045,'triangle');
  synth(110,start,.11,.075,'sine');
 }
 if(index%8===4){noise(start,.085,.028);synth(185,start,.09,.028,'triangle');}
 if(index%2===1)noise(start,.026,.012);
}
async function startMusic(){
 if(mode!=='disco')return;
 try{
  const Audio=window.AudioContext||window.webkitAudioContext;
  if(!Audio){say('L’audio non è disponibile su questo dispositivo.');return;}
  if(!ctx){ctx=new Audio();master=ctx.createGain();master.gain.value=.48;master.connect(ctx.destination);}
  await ctx.resume(); // chiamato solo dopo pressione diretta sullo stereo
  nextBeat=ctx.currentTime+.04;beatIndex=0;stereoOn=true;stage.classList.add('mr461MusicOn');
  $$('[data-mr461="stereo"]',stage)?.setAttribute('aria-pressed','true');
  clearInterval(scheduler);scheduler=setInterval(()=>{
   if(!ctx||!stereoOn)return;
   while(nextBeat<ctx.currentTime+.19){scheduleBeat(beatIndex++,nextBeat);nextBeat+=beatSeconds;}
  },70);
  say('🎵 La musica è partita! Tocca Mìmo, le luci e la palla specchiata!');
 }catch(_){stereoOn=false;say('Non riesco ad avviare la musica. Tocca di nuovo lo stereo.');}
}
function stopMusic(){stereoOn=false;clearInterval(scheduler);scheduler=null;stage?.classList.remove('mr461MusicOn');$$('[data-mr461="stereo"]',stage)?.setAttribute('aria-pressed','false');if(ctx){const old=ctx;ctx=null;master=null;old.close().catch(()=>{});}}
function say(message){const box=$$('#mr461Message',stage);if(box)box.textContent=message;}
function renderMoney(){const badge=$$('#mr461Money',stage);if(badge)badge.textContent='🪙 '+tokens();}
function updateTime(){const timer=$$('#mr461Timer',stage);if(timer)timer.textContent=R.formatTime(state[mode]||0);}
function setHappy(){window.MimoCare?.addJoy?.(1);good();}
function dance(){
 if(!mode||!stage)return;
 const step=poseCount++%4;
 stage.dataset.move=String(step);
 window.MimoMotion?.disco?.(mode==='disco');
 if(mode==='disco' && window.MimoMotion?.get?.()?.action!=='Mimi_Disco')window.MimoMotion?.play?.('Mimi_Disco',Infinity);
 else window.MimoMotion?.play?.(['Mimi_Greet','Mimi_Flap','Mimi_Celebrate','Mimi_Ears'][step],1200);
 window.MimoMood?.preview?.('entusiasta',3000);
}
function shower(){
 if(!stage)return;
 const area=$$('#mr461Effects',stage);if(!area)return;
 for(let i=0;i<13;i++){
  const item=document.createElement('span');item.className='mr461Burst';item.textContent=['✨','🎵','⭐','💜','💛','🎶'][i%6];
  const offset=(i*71%100-50);item.style.setProperty('--dx',offset+'px');item.style.setProperty('--dy',(-60-(i*37%130))+'px');
  item.style.left=(26+(i*13%51))+'%';item.style.top=(38+(i*9%34))+'%';area.appendChild(item);
  item.addEventListener('animationend',()=>item.remove(),{once:true});
 }
}
function finish(reason){
 if(!mode)return;
 const oldMode=mode;
 state[oldMode]=0;save();
 exitRoom();
 const msg=t('stop');window.MimoRoomMessage461?.(msg);
 if(reason==='timer'){
  const note=document.createElement('div');note.className='mr461EndNote';note.setAttribute('role','status');
  note.innerHTML='<span>🎉</span><p>'+msg+'</p><button type="button">OK</button>';
  const room=$$('#mr344Room');room?.appendChild(note);
  note.querySelector('button').addEventListener('click',()=>note.remove());
 }
}
let lastSaved=0;
function refresh(){
 if(!mode)return;
 const active=document.body.classList.contains('mr353-room-open') && !document.hidden;
 if(!active){lastTick=performance.now();return;}
 const now=performance.now();
 state=R.advance(state,mode,Math.max(0,now-lastTick));lastTick=now;
 if(now-lastSaved>950){save();lastSaved=now;}updateTime();renderMoney();
 if(state[mode]<=0){finish('timer');return;}
 if(mode==='disco'&&now-lookAt>1700){lookAt=now;dance();}
}
function exitRoom(){
 if(!mode)return;
 save();
 stopMusic();clearInterval(ticker);ticker=null;
 const stageToRemove=stage;
 mode=null;stage=null;
 // IMPORTANTE: mai spostare il nodo WebGL #mimoBuddy. Restando nella scena
 // originale mantiene il canvas 3D, la telecamera e i riferimenti del renderer.
 $$('#mimoBuddy')?.classList.remove('mr461Dancer');
 stageToRemove?.remove();
 document.body.classList.remove('mr461-mini-open');
 window.MimoMotion?.play?.('Mimi_Idle',Infinity);
 window.MimoMood?.clearPreview?.();window.MimoCare?.refresh?.();
}
function enterRoom(kind){
 if(mode)return;
 if(!['disco','games'].includes(kind))return;
 // Non consumare gettoni e non modificare la stanza se non e' realmente pronta.
 if(!document.body.classList.contains('mr353-room-open'))return;
 const base=$$('#mr344Room'),canvas=$$('#mr376SceneCanvas');
 if(!base||!canvas||!base.contains(canvas))return;
 const preview=R.enter(state,kind,tokens());
 if(preview.status==='no-token'){
  window.MimoMood?.preview?.('triste',2300);
  window.MimoRoomMessage461?.(t('need'));
  const hint=$$('#mr461NoTokens');if(hint){hint.textContent=t('need');hint.hidden=false;hint.focus();}
  return;
 }
 const question=preview.status==='resume'
  ? `Vuoi continuare nella ${roomNames[kind]}? Restano ${R.formatTime(state[kind])}.`
  : `Vuoi usare 1 gettone per entrare nella ${roomNames[kind]} per 5 minuti?`;
 if(!window.confirm(question))return;
 if(preview.spend&&!spend()){
  window.MimoRoomMessage461?.(t('need'));return;
 }
 state=preview.state;save();
 mode=kind;
 stage=document.createElement('div');stage.id='mr461MiniStage';stage.dataset.kind=kind;stage.dataset.move='0';
 stage.innerHTML=`
  <div class="mr461Backdrop" aria-hidden="true"></div>
  <div class="mr461GlowCurtains" aria-hidden="true"></div>
  <div class="mr461Floor" aria-hidden="true"></div>
  <div class="mr461Top"><button class="mr461Back" type="button" data-mr461="back" aria-label="${t('back')}">← Stanza di Mìmo</button><strong>${kind==='disco'?'🪩 Discoteca di Mìmo':'🧸 Giochi di Mìmo'}</strong><span id="mr461Money" aria-live="polite"></span><span id="mr461Timer" aria-live="polite">5:00</span></div>
  <button type="button" class="mr461Ball" data-mr461="ball" aria-label="${t('ball')}" aria-pressed="false"><span>🪩</span></button>
  <button type="button" class="mr461Spot mr461SpotLeft" data-mr461="light" aria-label="${t('lights')}" aria-pressed="false">🔦</button>
  <button type="button" class="mr461Spot mr461SpotRight" data-mr461="light" aria-label="${t('lights')}" aria-pressed="false">🔦</button>
  <div id="mr461MimoStage"></div><button type="button" class="mr461MimoHit" data-mr461="mimo" aria-label="${t('mimo')}">Tocca Mìmo ⭐</button>
  <button type="button" class="mr461Stereo" data-mr461="stereo" aria-pressed="false" aria-label="${t('stereo')}"><span class="mr461Antenna"></span><span class="mr461Speakers">◉ <i>▶</i> ◉</span><span class="mr461StereoLabel">${kind==='disco'?'🎵 Tocca lo stereo':'🥁 Tocca per suonare'}</span></button>
  <button type="button" class="mr461Confetti" data-mr461="confetti" aria-label="Accendi i coriandoli">🎉<small>Coriandoli</small></button>
  <button type="button" class="mr461Stars" data-mr461="stars" aria-label="Accendi le stelle">🌟<small>Stelle</small></button>
  <div class="mr461Effects" id="mr461Effects" aria-hidden="true"></div>
  <p id="mr461Message" role="status" aria-live="polite">${kind==='disco'?'Tocca lo stereo per far partire la musica! 🎶':'Tocca i giochi, Mìmo e le stelline!'}</p>`;
 // La discoteca sta sullo stesso piano della scena originale.
 // Il modello 3D e' solo sovrapposto via CSS, NON riposizionato nel DOM.
 canvas.appendChild(stage);
 $$('#mimoBuddy')?.classList.add('mr461Dancer');
 document.body.classList.add('mr461-mini-open');
 $$('.mr461Backdrop',stage).classList.toggle('mr461GamesBackdrop',kind==='games');
 renderMoney();updateTime();lastTick=performance.now();lookAt=lastTick;
 ticker=setInterval(refresh,180);window.MimoHaptics?.play?.('play');
 if(kind==='disco')window.MimoMotion?.disco?.(true);
 dance();
 stage.addEventListener('click',e=>{
  const control=e.target.closest('[data-mr461]');if(!control)return;
  switch(control.dataset.mr461){
   case 'back':exitRoom();break;
   case 'stereo':
    if(kind==='disco'){
     if(stereoOn){stopMusic();say('Musica in pausa. Tocca lo stereo per ripartire!');}
     else startMusic();
    }else{const Audio=window.AudioContext||window.webkitAudioContext;if(Audio){const tmp=new Audio();const os=tmp.createOscillator(),g=tmp.createGain();os.type='triangle';os.frequency.value=130+poseCount%4*70;g.gain.setValueAtTime(.18,tmp.currentTime);g.gain.exponentialRampToValueAtTime(.0001,tmp.currentTime+.3);os.connect(g).connect(tmp.destination);os.start();os.stop(tmp.currentTime+.3);os.onended=()=>tmp.close().catch(()=>{});}shower();setHappy();}
    break;
   case 'ball':ballOn=!ballOn;stage.classList.toggle('mr461BallOn',ballOn);control.setAttribute('aria-pressed',String(ballOn));shower();break;
   case 'light':lightOn=!lightOn;stage.classList.toggle('mr461LightsOn',lightOn);for(const b of stage.querySelectorAll('[data-mr461="light"]'))b.setAttribute('aria-pressed',String(lightOn));break;
   case 'confetti':confettiOn=!confettiOn;stage.classList.toggle('mr461ConfettiOn',confettiOn);shower();break;
   case 'stars':stage.classList.toggle('mr461StarsOn');shower();break;
   case 'mimo':dance();shower();setHappy();say('Mìmo è felicissimo! 🦉💃');break;
  }
 });
}
function install(){
 const sceneRoot=$$('#mr344Room');if(!sceneRoot||sceneRoot.dataset.mr461Installed)return false;
 sceneRoot.dataset.mr461Installed='yes';
 const entrance=document.createElement('nav');entrance.id='mr461Entrances';entrance.setAttribute('aria-label','Stanze di Mìmo');
 entrance.innerHTML='<button type="button" data-room="disco">🪩 <span>Discoteca</span></button><button type="button" data-room="games">🧸 <span>Giochi</span></button><div id="mr461NoTokens" tabindex="-1" role="status" hidden></div>';
 sceneRoot.appendChild(entrance);
 entrance.addEventListener('click',ev=>{
  const b=ev.target.closest('button[data-room]');if(!b)return;
  const hint=$$('#mr461NoTokens');if(hint)hint.hidden=true;
  enterRoom(b.dataset.room);
 });
 window.MimoRoomMessage461=(message)=>{const messageBox=$$('#mr344Message');if(messageBox)messageBox.textContent=message;};
 return true;
}
function setup(){if(install())return;const observer=new MutationObserver(()=>{if(install())observer.disconnect();});observer.observe(document.body,{subtree:true,childList:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopMusic();save();lastTick=performance.now();}else if(mode)lastTick=performance.now();});
window.addEventListener('pagehide',()=>{stopMusic();save();});
new MutationObserver(()=>{if(mode&&!document.body.classList.contains('mr353-room-open'))exitRoom();}).observe(document.body,{attributes:true,attributeFilter:['class']});
window.MimoMinirooms461={enter:enterRoom,exit:exitRoom,remaining:()=>({...state}),isActive:()=>mode};
})();
