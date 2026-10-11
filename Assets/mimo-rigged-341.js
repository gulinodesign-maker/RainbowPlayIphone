/* Music Rainbow 2.341 — offline GLB skinning and skeletal animation, WebGL1 */
(()=>{'use strict';
const KEY='mr_mimo_enabled',enabled=()=>{try{return localStorage.getItem(KEY)!=='0'}catch{return true}};
function boot(){
const panel=document.createElement('div');panel.id='mimoSettingsSection';panel.className='settings-panel settings-section';panel.innerHTML='<div class="settings-panel-head"><div class="settings-panel-icon">🦉</div><div class="settings-panel-title-wrap"><div class="settings-section-label">Mìmo e i suoi amici</div><p class="settings-panel-note">Personaggio 3D animato.</p></div></div><label class="mimo-option"><input type="checkbox" id="mimoEnabled"> Mìmo attivo</label><div class="mimo-movements-grid"><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoGreet" aria-label="Saluta" title="Saluta">👋</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoFly" aria-label="Vola" title="Vola">🪽</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoTry" aria-label="Festeggia" title="Festeggia">✨</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoThink" aria-label="Pensa" title="Pensa">🤔</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoYes" aria-label="Dice sì" title="Dice sì">🙂</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoNo" aria-label="Dice no" title="Dice no">🙅</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoTalk" aria-label="Parla" title="Parla">🗣️</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoStopVoice" aria-label="Ferma voce" title="Ferma voce">🔇</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoWalk" aria-label="Cammina" title="Cammina">🚶</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoTail" aria-label="Coda" title="Coda">🪶</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoTurn" aria-label="Ruota Mìmo di 180°" title="Ruota Mìmo di 180°">🔄</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoRest" aria-label="Chiudi le ali gradualmente" title="Chiudi le ali gradualmente">🪽</button><button type="button" class="settings-midi-connect mimo-icon-button" id="mimoOpen" aria-label="Apri le ali gradualmente" title="Apri le ali gradualmente">🦋</button></div><div class="mimo-expressions"><label for="mimoExpression">Espressione occhi (anteprima logica)</label><select id="mimoExpression" aria-label="Espressione di Mìmo"><option value="auto">Automatica</option><option value="standard">Standard</option><option value="mic">Occhiolino</option><option value="tired">Stanco</option><option value="sleepy">Assonnato</option><option value="closed">Occhi chiusi</option></select><p class="settings-panel-note" id="mimoExpressionStatus">Logica delle espressioni attiva; palpebre visive non ancora implementate.</p></div><div class="mimo-calibration"><label>Chiusura ali <input id="mimoFold" type="range" min="0" max="160" value="100" step="5"> <span id="mimoFoldValue">100%</span></label><label>Ali visibili <input id="mimoWingVisible" type="range" min="0" max="100" value="85" step="5"> <span id="mimoWingVisibleValue">85%</span></label><label><input type="checkbox" id="mimoFoldReverse"> Inverti verso</label></div><p class="settings-panel-note" id="mimoStatus" role="status">Caricamento del modello 3D…</p>';
const stack=document.querySelector('#settingsPage .settings-stack')||document.querySelector('#settingsPage')||document.body;stack.insertBefore(panel,stack.firstChild);
const host=document.createElement('div');host.id='mimoBuddy';host.setAttribute('aria-label','Mìmo, personaggio 3D animato');const canvas=document.createElement('canvas');host.appendChild(canvas);document.body.appendChild(host);
const toggle=document.getElementById('mimoEnabled'),status=document.getElementById('mimoStatus');toggle.checked=enabled();const sync=()=>{host.style.display=toggle.checked?'block':'none'};toggle.onchange=()=>{try{localStorage.setItem(KEY,toggle.checked?'1':'0')}catch{}sync()};sync();
function error(message){status.textContent='Mìmo 3D: '+message;console.error('[Mimo324]',message);host.style.border='2px solid #d97706';host.style.background='rgba(255,245,220,.9)';host.title=message;host.setAttribute('data-mimo-error',message);host.style.pointerEvents='auto';}
const gl=canvas.getContext('webgl2',{alpha:true,antialias:true,premultipliedAlpha:false})||canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false})||canvas.getContext('experimental-webgl',{alpha:true});if(!gl){error('WebGL non disponibile');return}
status.textContent="Mìmo: WebGL avviato, uniformi "+gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);const V=`precision highp float;attribute vec3 p;attribute vec3 n;attribute vec2 uv;uniform mat4 proj;uniform mat4 view;varying vec2 tex;varying vec3 normal;void main(){gl_Position=proj*view*vec4(p,1.);normal=n;tex=uv;}`;
const F=`precision mediump float;varying vec2 tex;varying vec3 normal;uniform sampler2D diffuse;void main(){float light=.72+.28*max(dot(normalize(normal),normalize(vec3(-.4,.8,1.))),0.);gl_FragColor=vec4(texture2D(diffuse,tex).rgb*light,1.);}`;
function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s}
let program;try{program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,V));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,F));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));}catch(e){error('Shader: '+e.message);return}
const I=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],mul=(a,b)=>{const r=new Array(16).fill(0);for(let c=0;c<4;c++)for(let i=0;i<4;i++)for(let k=0;k<4;k++)r[c*4+i]+=a[k*4+i]*b[c*4+k];return r};
const fromTRS=(t,q,s)=>{const [x,y,z,w]=q,[sx,sy,sz]=s,xx=x*x,yy=y*y,zz=z*z,xy=x*y,xz=x*z,yz=y*z,wx=w*x,wy=w*y,wz=w*z;return [(1-2*(yy+zz))*sx,2*(xy+wz)*sx,2*(xz-wy)*sx,0,2*(xy-wz)*sy,(1-2*(xx+zz))*sy,2*(yz+wx)*sy,0,2*(xz+wy)*sz,2*(yz-wx)*sz,(1-2*(xx+yy))*sz,0,...t,1]};
const invMat=m=>{const a=m[0],b=m[1],c=m[2],d=m[4],e=m[5],f=m[6],g=m[8],h=m[9],i=m[10];const A=e*i-f*h,B=f*g-d*i,C=d*h-e*g,det=a*A+b*B+c*C;if(Math.abs(det)<1e-10)return I();const q=1/det,r=[A*q,(c*h-b*i)*q,(b*f-c*e)*q,0,B*q,(a*i-c*g)*q,(c*d-a*f)*q,0,C*q,(b*g-a*h)*q,(a*e-b*d)*q,0,0,0,0,1];const x=m[12],y=m[13],z=m[14];r[12]=-(r[0]*x+r[4]*y+r[8]*z);r[13]=-(r[1]*x+r[5]*y+r[9]*z);r[14]=-(r[2]*x+r[6]*y+r[10]*z);return r};
const quat=(a,b,t)=>{let dot=a.reduce((s,x,i)=>s+x*b[i],0);if(dot<0){b=b.map(x=>-x);dot=-dot}if(dot>.9995){const q=a.map((x,i)=>x+(b[i]-x)*t),l=Math.hypot(...q);return q.map(x=>x/l)}const th=Math.acos(Math.min(1,dot)),sn=Math.sin(th),u=Math.sin((1-t)*th)/sn,v=Math.sin(t*th)/sn;return a.map((x,i)=>x*u+b[i]*v)};
let expression='standard',expressionOverride='auto',expressionUntil=0,blinkUntil=0,nextBlink=performance.now()+4300;const expressionSelect=document.getElementById('mimoExpression'),expressionStatus=document.getElementById('mimoExpressionStatus');expressionSelect.onchange=()=>{expressionOverride=expressionSelect.value;expressionStatus.textContent='Espressione selezionata: '+expressionOverride+' (solo logica, nessuna modifica visiva)'};window.MimoExpressions={set:(name,duration=0)=>{if(!['standard','mic','tired','sleepy','closed'].includes(name))return false;expression=name;expressionUntil=duration?performance.now()+duration:0;return true},get:()=>expression};let data,bin,mesh,anim=[],nodes,skin,ibm,texture,basePositions,baseNormals,jointData,weightData,posBuffer,normBuffer,animatedPositions,animatedNormals,lastSkin=0,mode='Mimi_Idle',until=0,started=performance.now();
function play(name){mode=name;started=performance.now();until=started+((name==='Mimi_Idle'||name==='Mimi_Talk')?Infinity:name==='Mimi_Walk'?4800:3000)}
for(const [id,name] of [['mimoGreet','Mimi_Greet'],['mimoFly','Mimi_Flap'],['mimoTry','Mimi_Celebrate'],['mimoThink','Mimi_Think'],['mimoYes','Mimi_Yes'],['mimoTalk','Mimi_Talk'],['mimoWalk','Mimi_Walk'],['mimoTail','Mimi_Tail']])document.getElementById(id).onclick=()=>id==='mimoTalk'?sayMimo():play(name);
// Sintesi vocale italiana integrata nel dispositivo. La bocca segue la durata reale della voce.
let mimoSpeaking=false, mimoSpeechStart=0, mimoSpeechEnd=0, mimoSpeechToken=0;
const speechText='Ciao! Io sono Mìmo! Benvenuto in Music Rainbow! Sei pronto a giocare con la musica?';
function stopMimoSpeech(){mimoSpeechToken++;mimoSpeaking=false;mimoSpeechEnd=0;try{window.speechSynthesis?.cancel()}catch{}if(mode==='Mimi_Talk')play('Mimi_Idle')}
function sayMimo(text=speechText){
 if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){status.textContent='Voce non disponibile su questo dispositivo.';return}
 stopMimoSpeech();const token=++mimoSpeechToken;
 const utterance=new SpeechSynthesisUtterance(text);utterance.lang='it-IT';utterance.rate=.88;utterance.pitch=1.15;utterance.volume=1;
 const voices=window.speechSynthesis.getVoices();const italian=voices.filter(v=>v.lang.toLowerCase().startsWith('it'));if(italian.length)utterance.voice=italian.find(v=>v.localService)||italian[0];
 utterance.onstart=()=>{if(token!==mimoSpeechToken)return;mimoSpeaking=true;mimoSpeechStart=performance.now();mimoSpeechEnd=0;play('Mimi_Talk');status.textContent='Mìmo sta parlando…'};
 utterance.onend=()=>{if(token!==mimoSpeechToken)return;mimoSpeaking=false;mimoSpeechEnd=performance.now();play('Mimi_Idle');status.textContent='Mìmo è pronto!'};
 utterance.onerror=e=>{if(token!==mimoSpeechToken)return;mimoSpeaking=false;play('Mimi_Idle');status.textContent='Voce: '+(e.error||'errore')};
 // Conserviamo il riferimento finché la sintesi è attiva (WKWebView/iOS).
 window.__mimoCurrentUtterance=utterance;
 try{window.speechSynthesis.speak(utterance)}catch(e){status.textContent='Voce non avviata: '+e.message}
}
document.getElementById('mimoStopVoice').onclick=stopMimoSpeech;
let mimoTargetYaw=0,mimoCurrentYaw=0,mimoLastYawFrame=0;const turnButton=document.getElementById('mimoTurn');turnButton.onclick=()=>{mimoTargetYaw=mimoTargetYaw===0?Math.PI:0;turnButton.setAttribute('aria-label',mimoTargetYaw===0?'Ruota Mìmo di 180°':'Riporta Mìmo davanti');status.textContent=mimoTargetYaw===0?'Mìmo torna di fronte':'Mìmo mostra il dorso';};
let emotionalState='contento';let emotionFold=null;let emotionGestureUntil=0;
window.MimoMood={set:(name)=>{if(!['contento','felice','affamato','stanco','arrabbiato','triste','sporco','riposo'].includes(name))return false;emotionalState=name;emotionFold=({felice:0,affamato:.48,stanco:1,arrabbiato:.5,triste:.85,sporco:.6,riposo:1})[name]??null;mimoTargetYaw=['arrabbiato','triste'].includes(name)?Math.PI:0;return true},get:()=>emotionalState,no:()=>play('Mimi_No'),yes:()=>play('Mimi_Yes')};
document.getElementById('mimoNo').onclick=()=>play('Mimi_No');
let wingPreview='rest';let wingFoldProgress=1,wingFoldLastTime=performance.now();const visibleControl=document.getElementById('mimoWingVisible'),visibleValue=document.getElementById('mimoWingVisibleValue');try{visibleControl.value=localStorage.getItem('mimo_wing_visible_337')||'85'}catch{}visibleValue.textContent=visibleControl.value+'%';visibleControl.oninput=()=>{visibleValue.textContent=visibleControl.value+'%';try{localStorage.setItem('mimo_wing_visible_337',visibleControl.value)}catch{}};const foldControl=document.getElementById('mimoFold'),foldValue=document.getElementById('mimoFoldValue'),reverseControl=document.getElementById('mimoFoldReverse');try{foldControl.value=localStorage.getItem('mimo_fold_337')||'100';reverseControl.checked=localStorage.getItem('mimo_fold_reverse_326')==='1'}catch{}foldValue.textContent=foldControl.value+'%';foldControl.oninput=()=>{foldValue.textContent=foldControl.value+'%';try{localStorage.setItem('mimo_fold_337',foldControl.value)}catch{}};reverseControl.onchange=()=>{try{localStorage.setItem('mimo_fold_reverse_326',reverseControl.checked?'1':'0')}catch{}};document.getElementById('mimoRest').onclick=()=>{wingPreview='rest';play('Mimi_Idle')};document.getElementById('mimoOpen').onclick=()=>{wingPreview='open';play('Mimi_Idle')};
// La numerazione corrisponde agli indici NODO della mappa di Francesco,
// non ai numeri Bone_### (l'ordine glTF e' differente).
const groups={beakTop:[0,1],beakBottom:[2,3],head:[4,5],rightWing:[6,21],leftWing:[22,37],neck:[38,39],rightFoot:[40,44],leftFoot:[45,49],tail:[53,52,51,50],pelvis:[54,56]};
// Animazioni procedurali additive alle rotazioni di riposo, nessun clip Meshy richiesto.
// Si animano principalmente le articolazioni prossimali: muovere tutte le ossa
// in modo identico deformerebbe piume e dita.
function procedural(poses,t){
 const w=Math.PI*2, wave=(speed,phase=0)=>Math.sin(t*w*speed+phase);
 const rot=(node,axis,angle)=>{if(!poses[node])return;const q=poses[node].rotation,half=angle/2,h=Math.sin(half),r=[axis===0?h:0,axis===1?h:0,axis===2?h:0,Math.cos(half)];poses[node].rotation=[q[3]*r[0]+q[0]*r[3]+q[1]*r[2]-q[2]*r[1],q[3]*r[1]-q[0]*r[2]+q[1]*r[3]+q[2]*r[0],q[3]*r[2]+q[0]*r[1]-q[1]*r[0]+q[2]*r[3],q[3]*r[3]-q[0]*r[0]-q[1]*r[1]-q[2]*r[2]]};
 // 38->21->20->19->18 (destra); 38->37->36->35->34 (sinistra).
 // Le quattro catene di piume per ala restano figlie delle estremita' 18 e 34.
 // 2.329: posa di riposo geometrica. La catena portante scende lungo
 // il dorso e ciascuna remigante termina verso il basso (indici minori).
 // Si allineano le direzioni nello spazio del modello, non assi locali arbitrari.
 const qmul=(a,b)=>[a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]];
 const qinv=q=>[-q[0],-q[1],-q[2],q[3]];
 const qvec=(q,v)=>{const u=qmul(qmul(q,[...v,0]),qinv(q));return u.slice(0,3)};
 const unit=v=>{const l=Math.hypot(...v)||1;return v.map(x=>x/l)};
 const qbetween=(a,b)=>{a=unit(a);b=unit(b);const d=Math.max(-1,Math.min(1,a.reduce((z,x,i)=>z+x*b[i],0)));if(d<-.9999){const ax=Math.abs(a[0])<.8?[1,0,0]:[0,1,0];const c=[a[1]*ax[2]-a[2]*ax[1],a[2]*ax[0]-a[0]*ax[2],a[0]*ax[1]-a[1]*ax[0]];return [...unit(c),0]};const c=[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],q=[...c,1+d];const l=Math.hypot(...q);return q.map(x=>x/l)};
 const worldPose=()=>{const cache=[];const at=i=>{if(cache[i])return cache[i];const n=poses[i],par=parents[i],q=n.rotation;const pos=n.translation;if(par<0)return cache[i]={q,p:pos.slice()};const pw=at(par),scaled=pos.map((x,k)=>x*poses[par].scale[k]);const v=qvec(pw.q,scaled);return cache[i]={q:qmul(pw.q,q),p:pw.p.map((x,k)=>x+v[k])}};return at};
 const aim=(root,tip,target,strength)=>{if(!poses[root]||!poses[tip]||strength<=0)return;const at=worldPose(),r=at(root),end=at(tip),v=end.p.map((x,k)=>x-r.p[k]);if(Math.hypot(...v)<.001)return;const parent=parents[root],pq=parent>=0?at(parent).q:[0,0,0,1];const delta=qbetween(v,target),local=qmul(qmul(qinv(pq),delta),pq),desired=qmul(local,poses[root].rotation);poses[root].rotation=quat(poses[root].rotation,desired,Math.min(1,strength));};
 // 2.337: ali piu visibili ai fianchi, restando dietro al pancino.
 // 2.334: ali raccolte DIETRO i fianchi del pancino, come nel riferimento
 // approvato. Il becco punta verso +Z; -Z e' il retro.
 // 14 e 30 devono scendere, portando con se' i segmenti figli.
 // 2.340: ogni ala resta sul proprio fianco, senza convergere sul dorso.
 // Le direzioni sono espresse nello spazio del modello e non nell'asse locale delle ossa.
 const wingFold=(amount)=>{
   const strength=Math.max(0,Math.min(1,Number(foldControl.value)/100*amount));
   if(strength<=0)return;
   const reveal=Number(visibleControl.value)/100;
   const stagger=start=>{const x=Math.max(0,Math.min(1,(amount-start)/(1-start)));return x*x*(3-2*x)};
   // Il fianco di ciascuna ala conserva sempre il proprio segno X.
   // Una componente Z moderata evita l'incrocio dietro la schiena.
   for(const {root,mid,elbow,tip,sign} of [
     {root:21,mid:20,elbow:19,tip:18,sign:1},
     {root:37,mid:36,elbow:35,tip:34,sign:-1}]){
     aim(root,mid,[sign*(.82+.22*reveal),-.38,-.10],strength*stagger(0));
     aim(mid,elbow,[sign*(.58+.22*reveal),-.72,-.13],strength*stagger(.12));
     aim(elbow,tip,[sign*(.32+.24*reveal),-.88,-.10],strength*stagger(.24));
   }
   // 14 e 30 scendono e trascinano i rispettivi discendenti.
   aim(18,14,[.16+.14*reveal,-.98,-.06],strength*stagger(.38));
   aim(34,30,[-.16-.14*reveal,-.98,-.06],strength*stagger(.38));
   for(const [root,tip,sign] of [[14,12,1],[8,6,1],[11,9,1],[17,15,1],
                                 [30,28,-1],[24,22,-1],[27,25,-1],[33,31,-1]]){
     aim(root,tip,[sign*.16,-.98,-.05],strength*stagger(.52));
   }
 };
 const flap=(a)=>{const opening=1-wingFoldProgress;rot(21,2,a*opening);rot(37,2,-a*opening);rot(18,2,a*.18*opening);rot(34,2,-a*.18*opening)};
 const nod=(a)=>{rot(39,0,a*.35);rot(5,0,a*.65)};
 // Bone 04 e' il genitore comune dei rami 04-01 (superiore) e 04-03 (inferiore).
 // Ruotare solo Bone 03 non sposta il suo giunto: bisogna animare anche
 // la sua traslazione relativa a 04. Il fattore close=1 avvicina i due rami.
 const mouth=(close)=>{
   const upper=nodes[1].translation||[0,0,0];
   const lower=nodes[3].translation||[0,0,0];
   const c=Math.max(0,Math.min(1,close));
   // Contatto quasi completo: lieve margine per evitare compenetrazioni.
   const blend=.94*c;
   poses[3].translation=lower.map((v,k)=>v+(upper[k]-v)*blend);
   // Correzione della direzione del ramo inferiore, intorno alla cerniera.
   const lowerAngle=Math.atan2(lower[2],lower[1]);
   const upperAngle=Math.atan2(upper[2],upper[1]);
   rot(3,0,-(lowerAngle-upperAngle)*c);
 };
 const talk=(a)=>{mouth(a);};
 const step=(a)=>{rot(44,0,a);rot(49,0,-a);rot(40,0,a*.12);rot(45,0,-a*.12)};
 // Catena anatomica della coda: 53 (sacro) -> 52 -> 51 -> 50 (punta).
 // Ognuna delle articolazioni riceve una fase progressivamente ritardata,
 // anziche' muovere soltanto la radice come nella versione precedente.
 const tail=(a)=>{
   const speed=mode==='Mimi_Tail'?1.8:mode==='Mimi_Celebrate'?2.2:mode==='Mimi_Flap'?1.5:.3;
   const basePhase=t*w*speed;
   const amplitude=Math.abs(a);
   const sign=a<0?-1:1;
   rot(53,1,sign*amplitude*.48*Math.sin(basePhase));
   rot(52,1,sign*amplitude*.38*Math.sin(basePhase-.32));
   rot(51,1,sign*amplitude*.28*Math.sin(basePhase-.64));
   rot(50,1,sign*amplitude*.18*Math.sin(basePhase-.96));
 };
 const isFlying=mode==='Mimi_Flap'||mode==='Mimi_Celebrate';
 // Apertura e chiusura graduali, indipendenti dalla frequenza dei frame.
 const now=performance.now(),dt=Math.min(.08,Math.max(0,(now-wingFoldLastTime)/1000));wingFoldLastTime=now;
 const targetFold=isFlying?0:emotionFold===null?(wingPreview==='open'?0:1):emotionFold;
 const speed=dt/1.65;wingFoldProgress+=Math.max(-speed,Math.min(speed,targetFold-wingFoldProgress));
 wingFold(wingFoldProgress);
 switch(mode){
 case 'Mimi_No':mouth(.95);rot(39,1,.14*wave(1.5));rot(5,1,.24*wave(1.5));break;
 case 'Mimi_Yes':mouth(.95);nod(.25*wave(1.1));break;
 case 'Mimi_Talk':talk(mimoSpeaking?(.22+.78*Math.pow(Math.abs(wave(4.2)),.75)):.95);nod(.035*wave(.8));break;
 case 'Mimi_Greet':mouth(.95);rot(21,2,.24+.26*wave(1.4));rot(18,1,.16*wave(1.4));break;
 case 'Mimi_Flap':mouth(.95);flap(.33*wave(1.5));tail(.07);break;
 case 'Mimi_Walk':mouth(.95);step(.28*wave(1.1));nod(.04*wave(2.2));flap(.035*wave(1.1));break;
 case 'Mimi_Tail':mouth(.95);tail(.3);break;
 case 'Mimi_Celebrate':mouth(.95);flap(.42*wave(2.2));nod(.12*wave(1.2));tail(.18);break;
 case 'Mimi_Think':mouth(.95);nod(-.10+.06*wave(.4));rot(21,2,.08);break;
 default:mouth(.95);nod((['stanco','triste','riposo'].includes(emotionalState)?-.10:0)+.018*wave(.22));tail(emotionalState==='arrabbiato'?.09:.035);break;
 }
 // 2.332: respiro continuo del pancino. Le ossa 55 e 56 sono nella
 // catena del tronco (56 -> 55 -> 54), percio' la deformazione e' minima
 // e applicata alla scala locale, non a una traslazione che sposterebbe i piedi.
 // Fase assoluta: il respiro non riparte quando cambia animazione.
 const breathPhase=performance.now()*Math.PI*2/3600;
 const inhale=(1+Math.sin(breathPhase-Math.PI/2))*.5; // 0 espirato, 1 inspirato
 const belly=inhale-.5;
 // Espansione simmetrica sul piano orizzontale del busto.
 for(const [bone,amount] of [[55,.028],[56,.014]]){
   if(!poses[bone])continue;
   poses[bone].scale[0]*=1+amount*belly;
   poses[bone].scale[2]*=1+amount*belly;
 }
 // Torace, spalle e testa accompagnano il gonfiarsi del pancino.
 rot(38,0,.025*Math.sin(breathPhase));
 rot(21,0,.018*Math.sin(breathPhase));
 rot(37,0,-.018*Math.sin(breathPhase));
 rot(5,0,-.013*Math.sin(breathPhase-.25));

}

const accessor=i=>{const a=data.accessors[i],v=data.bufferViews[a.bufferView],off=(v.byteOffset||0)+(a.byteOffset||0),count=a.count*(a.type==='MAT4'?16:a.type==='VEC4'?4:a.type==='VEC3'?3:a.type==='VEC2'?2:1),ctor=({5126:Float32Array,5123:Uint16Array,5121:Uint8Array,5125:Uint32Array})[a.componentType];if(!ctor)throw Error('Accessor non supportato '+a.componentType);if(v.byteStride){const len=count/a.count,out=new ctor(count),dv=new DataView(bin,off);for(let j=0;j<a.count;j++)for(let k=0;k<len;k++){const pos=j*v.byteStride+k*ctor.BYTES_PER_ELEMENT;out[j*len+k]=a.componentType===5126?dv.getFloat32(pos,true):a.componentType===5123?dv.getUint16(pos,true):a.componentType===5121?dv.getUint8(pos):dv.getUint32(pos,true)}return out}return new ctor(bin.slice(off,off+count*ctor.BYTES_PER_ELEMENT))};
function bindAttribute(index,name,size){const loc=gl.getAttribLocation(program,name);if(loc<0)return;const a=data.accessors[index],values=accessor(index),b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,values,gl.STATIC_DRAW);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,size,gl.FLOAT,a.normalized||false,0,0)}
function matNodes(t){
// Each animation channel updates only its own TRS component. Previously, channels
// targeting the same bone overwrote one another, producing broken poses.
const poses=nodes.map(n=>({translation:(n.translation||[0,0,0]).slice(),rotation:(n.rotation||[0,0,0,1]).slice(),scale:(n.scale||[1,1,1]).slice()}));
const current=anim.find(a=>a.name===mode);
if(current){for(const ch of current.channels){const sam=current.samplers[ch.sampler],times=accessor(sam.input),values=accessor(sam.output),target=ch.target.node,path=ch.target.path,width=path==='rotation'?4:3;if(!times.length||!poses[target]||!['translation','rotation','scale'].includes(path))continue;let idx=0;while(idx<times.length-2&&times[idx+1]<t)idx++;const next=Math.min(idx+1,times.length-1);const alpha=sam.interpolation==='STEP'?0:Math.max(0,Math.min(1,(t-times[idx])/(times[next]-times[idx]||1)));const a=Array.from(values.slice(idx*width,(idx+1)*width)),b=Array.from(values.slice(next*width,(next+1)*width));poses[target][path]=path==='rotation'?quat(a,b,alpha):a.map((x,i)=>x+(b[i]-x)*alpha)}}
procedural(poses,t);const local=poses.map(n=>fromTRS(n.translation,n.rotation,n.scale));
const world=[],visit=i=>{if(world[i])return world[i];const parent=parents[i];return world[i]=parent<0?local[i]:mul(visit(parent),local[i])};for(let i=0;i<nodes.length;i++)visit(i);
const meshNode=nodes.findIndex(n=>n.mesh===0),invMesh=invMat(meshNode>=0?world[meshNode]:I());return skin.joints.flatMap((j,k)=>mul(mul(invMesh,world[j]),ibm.slice(k*16,k*16+16)))}
let parents;function prepare(){nodes=data.nodes;skin=data.skins[0];parents=nodes.map(()=>-1);nodes.forEach((n,i)=>(n.children||[]).forEach(j=>parents[j]=i));ibm=Array.from(accessor(skin.inverseBindMatrices));anim=data.animations||[];const prim=data.meshes[0].primitives[0];mesh=prim;gl.useProgram(program);basePositions=accessor(prim.attributes.POSITION);baseNormals=accessor(prim.attributes.NORMAL);jointData=accessor(prim.attributes.JOINTS_0);weightData=accessor(prim.attributes.WEIGHTS_0);animatedPositions=new Float32Array(basePositions.length);animatedNormals=new Float32Array(baseNormals.length);
for(const [key,name,size] of [['POSITION','p',3],['NORMAL','n',3],['TEXCOORD_0','uv',2]]){const loc=gl.getAttribLocation(program,name);if(loc<0)continue;const values=key==='POSITION'?animatedPositions:key==='NORMAL'?animatedNormals:accessor(prim.attributes[key]);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,values,key==='TEXCOORD_0'?gl.STATIC_DRAW:gl.DYNAMIC_DRAW);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,size,gl.FLOAT,false,0,0);if(key==='POSITION')posBuffer=buffer;if(key==='NORMAL')normBuffer=buffer;}
const idx=accessor(prim.indices);mesh.count=idx.length;mesh.indexType=idx instanceof Uint32Array?gl.UNSIGNED_INT:idx instanceof Uint8Array?gl.UNSIGNED_BYTE:gl.UNSIGNED_SHORT;if(mesh.indexType===gl.UNSIGNED_INT&&!gl.getExtension('OES_element_index_uint'))throw Error('Indici 32-bit non supportati');const b=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,b);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,idx,gl.STATIC_DRAW);
const imageIndex=data.textures[data.materials[prim.material].pbrMetallicRoughness.baseColorTexture.index].source,img=data.images[imageIndex],view=data.bufferViews[img.bufferView],blob=new Blob([bin.slice(view.byteOffset||0,(view.byteOffset||0)+view.byteLength)],{type:img.mimeType}),url=URL.createObjectURL(blob);texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([225,190,145,255]));const im=new Image();im.onload=()=>{gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,im);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);URL.revokeObjectURL(url)};im.onerror=()=>error('Texture non caricata');im.src=url;
const positions=accessor(prim.attributes.POSITION);let min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(let i=0;i<positions.length;i+=3)for(let k=0;k<3;k++){min[k]=Math.min(min[k],positions[i+k]);max[k]=Math.max(max[k],positions[i+k])}mesh.center=min.map((v,i)=>(v+max[i])/2);mesh.extent=Math.max(...max.map((v,i)=>v-min[i]));status.textContent='Mìmo Meshy 2.334: ali ripiegabili · becco articolato · avvio grafica…';requestAnimationFrame(frame)}
function cpuSkin(matrices){const count=basePositions.length/3;for(let v=0;v<count;v++){const o=v*3,j=v*4,x=basePositions[o],y=basePositions[o+1],z=basePositions[o+2],nx=baseNormals[o],ny=baseNormals[o+1],nz=baseNormals[o+2];let px=0,py=0,pz=0,rx=0,ry=0,rz=0,total=0;for(let k=0;k<4;k++){const w=weightData[j+k];if(w<=0)continue;const off=jointData[j+k]*16;if(off<0||off+15>=matrices.length)continue;total+=w;px+=w*(matrices[off]*x+matrices[off+4]*y+matrices[off+8]*z+matrices[off+12]);py+=w*(matrices[off+1]*x+matrices[off+5]*y+matrices[off+9]*z+matrices[off+13]);pz+=w*(matrices[off+2]*x+matrices[off+6]*y+matrices[off+10]*z+matrices[off+14]);rx+=w*(matrices[off]*nx+matrices[off+4]*ny+matrices[off+8]*nz);ry+=w*(matrices[off+1]*nx+matrices[off+5]*ny+matrices[off+9]*nz);rz+=w*(matrices[off+2]*nx+matrices[off+6]*ny+matrices[off+10]*nz)}animatedPositions[o]=total?px/total:x;animatedPositions[o+1]=total?py/total:y;animatedPositions[o+2]=total?pz/total:z;const len=Math.hypot(rx,ry,rz)||1;animatedNormals[o]=rx/len;animatedNormals[o+1]=ry/len;animatedNormals[o+2]=rz/len}gl.bindBuffer(gl.ARRAY_BUFFER,posBuffer);gl.bufferSubData(gl.ARRAY_BUFFER,0,animatedPositions);gl.bindBuffer(gl.ARRAY_BUFFER,normBuffer);gl.bufferSubData(gl.ARRAY_BUFFER,0,animatedNormals)}
function frame(now){requestAnimationFrame(frame);try{if(!toggle.checked||document.hidden)return;if(now>until)play('Mimi_Idle');if(expressionUntil&&now>expressionUntil){expression='standard';expressionUntil=0}if(now>nextBlink){blinkUntil=now+145;nextBlink=now+3600+Math.random()*2500}const wantedExpression=expressionOverride==='auto'?(now<blinkUntil?'closed':expression):expressionOverride;if(wantedExpression!==host.dataset.expression){host.dataset.expression=wantedExpression;expressionStatus.textContent='Espressione: '+wantedExpression+' — solo stato logico, palpebre non implementate'}const t=(now-started)/1000;const width=Math.max(1,host.clientWidth),height=Math.max(1,host.clientHeight),dpr=Math.min(1.5,devicePixelRatio||1);if(canvas.width!==Math.round(width*dpr)||canvas.height!==Math.round(height*dpr)){canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr)}gl.viewport(0,0,canvas.width,canvas.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);gl.useProgram(program);const ratio=canvas.width/canvas.height,f=1/Math.tan(.45),proj=[f/ratio,0,0,0,0,f,0,0,0,0,-1.002,-1,0,0,-.2002,0];const s=3.05/mesh.extent;const yawDt=mimoLastYawFrame?Math.min(.06,(now-mimoLastYawFrame)/1000):0;mimoLastYawFrame=now;const yawDelta=mimoTargetYaw-mimoCurrentYaw;mimoCurrentYaw+=yawDelta*Math.min(1,yawDt*6);if(Math.abs(yawDelta)<.001)mimoCurrentYaw=mimoTargetYaw;const cy=Math.cos(mimoCurrentYaw),sy=Math.sin(mimoCurrentYaw);const view=[s*cy,0,-s*sy,0,0,s,0,0,s*sy,0,s*cy,0,-s*(cy*mesh.center[0]+sy*mesh.center[2]),-mesh.center[1]*s,s*(sy*mesh.center[0]-cy*mesh.center[2])-4.7,1];gl.uniformMatrix4fv(gl.getUniformLocation(program,'proj'),false,new Float32Array(proj));gl.uniformMatrix4fv(gl.getUniformLocation(program,'view'),false,new Float32Array(view));if(now-lastSkin>83){cpuSkin(matNodes(t));lastSkin=now;}gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,texture);gl.uniform1i(gl.getUniformLocation(program,'diffuse'),0);gl.drawElements(gl.TRIANGLES,mesh.count,mesh.indexType,0);if(!mesh.renderChecked){mesh.renderChecked=true;const e=gl.getError();status.textContent=e===gl.NO_ERROR?'Mìmo Meshy 2.334: 57 ossa · ali a riposo regolabili':'Mìmo 3D: errore GPU '+e;if(e!==gl.NO_ERROR)host.style.border='2px solid #dc2626'}}catch(e){if(!mesh.frameError){mesh.frameError=true;error('Rendering: '+e.message)}}}
fetch('Assets/mimo-meshy-324.glb').then(r=>{if(!r.ok && r.status!==0)throw Error('HTTP '+r.status);return r.arrayBuffer()}).then(buffer=>{const dv=new DataView(buffer);if(buffer.byteLength<20)throw Error('Modello vuoto: '+buffer.byteLength+' byte');if(dv.getUint32(0,true)!==0x46546c67)throw Error('File GLB non valido');let off=12;const len=dv.getUint32(off,true);off+=8;data=JSON.parse(new TextDecoder().decode(new Uint8Array(buffer,off,len)));off+=len;const blen=dv.getUint32(off,true);off+=8;bin=buffer.slice(off,off+blen);prepare()}).catch(e=>error(e.message));
let last=0;for(const id of ['statusBarLearn','learnHandsStatus','statusBarHands']){const el=document.getElementById(id);if(!el)continue;new MutationObserver(()=>{const now=Date.now();if(now-last<1400)return;const t=(el.textContent||'').toLowerCase();if(/brav|corrett|compl|perfect|success|ottim|riuscit/.test(t)){last=now;play('Mimi_Celebrate')}else if(/erro|sbagli|wrong|retry|riprova/.test(t)){last=now;play('Mimi_Think')}}).observe(el,{subtree:true,childList:true,characterData:true})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
