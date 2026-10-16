/* Music Rainbow 2.369 — Caricamento GLB diagnosticabile e compatibile con WebKit/GitHub. */
(()=>{'use strict';

// Le nove lingue dell'app vengono lette direttamente dal selettore principale.
const MIMO_LANGUAGES = {"it":{"active":"Mìmo attivo","closeWings":"Chiudi le ali","openWings":"Apri le ali","openLab":"Prova movimenti ed emozioni","closeLab":"Chiudi laboratorio","resetLab":"Ripristina i movimenti naturali","preview":"Anteprima Mìmo 3D","title":"Laboratorio di Mìmo","intro":"Prova emozioni, gesti e palpebre sul modello 3D.","emotions":"Emozioni (12)","moves":["Masticare","Dire sì","Dire no","Salutare","Svolazzare","Muovere la coda","Camminare","Festeggiare","Riflettere","Parlare","Respirare","Chiudere le ali","Aprire le ali","Muovi le orecchie"],"eyes":"Palpebre (5)","note":"I test non consumano frutta e non modificano i valori della stanza.","choose":"Seleziona un’icona per provare il movimento.","observing":"Osserva Mìmo.","resetMessage":"Mìmo torna ai movimenti spontanei.","loading":"Caricamento del modello 3D…","ready":"Mìmo è pronto.","stage":"Anteprima tridimensionale di Mìmo","moods":["Felice","Entusiasta","Triste","Affamato","Sazio","Stressato","Rilassato","Assonnato","Curioso","Arrabbiato","Coccolato","Fastidito"],"eyenames":["Aperti","Semichiusi","Quasi chiusi","Chiusi","Occhiolino"]},"en":{"active":"Mìmo enabled","closeWings":"Fold wings","openWings":"Spread wings","openLab":"Test movements and emotions","closeLab":"Close lab","resetLab":"Reset natural movements","preview":"3D Mìmo preview","title":"Mìmo’s Lab","intro":"Test emotions, gestures and eyelids on the 3D model.","emotions":"Emotions (12)","moves":["Chew","Nod yes","Shake no","Wave","Flap","Wag tail","Walk","Celebrate","Think","Talk","Breathe","Fold wings","Spread wings","Move ears"],"eyes":"Eyelids (5)","note":"Tests do not use fruit or change room status.","choose":"Select an icon to test a movement.","observing":"Watch Mìmo.","resetMessage":"Mìmo returns to natural movements.","loading":"Loading the 3D model…","ready":"Mìmo is ready.","stage":"3D preview of Mìmo","moods":["Happy","Excited","Sad","Hungry","Full","Stressed","Relaxed","Sleepy","Curious","Angry","Loved","Uncomfortable"],"eyenames":["Open","Half closed","Almost closed","Closed","Wink"]},"es":{"active":"Mìmo activo","closeWings":"Plegar las alas","openWings":"Abrir las alas","openLab":"Probar movimientos y emociones","closeLab":"Cerrar laboratorio","resetLab":"Restablecer movimientos naturales","preview":"Vista 3D de Mìmo","title":"Laboratorio de Mìmo","intro":"Prueba emociones, gestos y párpados en el modelo 3D.","emotions":"Emociones (12)","moves":["Masticar","Asentir","Negar","Saludar","Aletear","Mover la cola","Caminar","Celebrar","Pensar","Hablar","Respirar","Plegar alas","Abrir alas","Mover las orejas"],"eyes":"Párpados (5)","note":"Las pruebas no gastan fruta ni modifican la habitación.","choose":"Elige un icono para probar el movimiento.","observing":"Observa a Mìmo.","resetMessage":"Mìmo vuelve a sus movimientos naturales.","loading":"Cargando modelo 3D…","ready":"Mìmo está listo.","stage":"Vista previa 3D de Mìmo","moods":["Feliz","Entusiasmado","Triste","Hambriento","Satisfecho","Estresado","Relajado","Somnoliento","Curioso","Enfadado","Cariñoso","Incómodo"],"eyenames":["Abiertos","Semicerrados","Casi cerrados","Cerrados","Guiño"]},"fr":{"active":"Mìmo activé","closeWings":"Replier les ailes","openWings":"Ouvrir les ailes","openLab":"Tester gestes et émotions","closeLab":"Fermer le labo","resetLab":"Réinitialiser les mouvements","preview":"Aperçu 3D de Mìmo","title":"Laboratoire de Mìmo","intro":"Teste les émotions, les gestes et les paupières du modèle 3D.","emotions":"Émotions (12)","moves":["Mâcher","Dire oui","Dire non","Saluer","Battre des ailes","Bouger la queue","Marcher","Fêter","Réfléchir","Parler","Respirer","Replier les ailes","Ouvrir les ailes","Bouger les oreilles"],"eyes":"Paupières (5)","note":"Les tests ne consomment pas de fruits et ne changent pas la chambre.","choose":"Choisis une icône pour tester un mouvement.","observing":"Observe Mìmo.","resetMessage":"Mìmo retrouve ses mouvements naturels.","loading":"Chargement du modèle 3D…","ready":"Mìmo est prêt.","stage":"Aperçu 3D de Mìmo","moods":["Heureux","Enthousiaste","Triste","Affamé","Rassasié","Stressé","Détendu","Somnolent","Curieux","En colère","Câlin","Mal à l’aise"],"eyenames":["Ouverts","Mi-clos","Presque fermés","Fermés","Clin d’œil"]},"de":{"active":"Mìmo aktiv","closeWings":"Flügel anlegen","openWings":"Flügel öffnen","openLab":"Bewegungen und Gefühle testen","closeLab":"Labor schließen","resetLab":"Natürliche Bewegungen wiederherstellen","preview":"Mìmo in 3D","title":"Mìmos Labor","intro":"Teste Gefühle, Gesten und Augenlider am 3D-Modell.","emotions":"Gefühle (12)","moves":["Kauen","Nicken","Kopf schütteln","Winken","Flattern","Schwanz bewegen","Gehen","Feiern","Nachdenken","Sprechen","Atmen","Flügel anlegen","Flügel öffnen","Ohren bewegen"],"eyes":"Augenlider (5)","note":"Tests verbrauchen kein Obst und verändern den Zimmerstatus nicht.","choose":"Wähle ein Symbol, um eine Bewegung zu testen.","observing":"Beobachte Mìmo.","resetMessage":"Mìmo bewegt sich wieder natürlich.","loading":"3D-Modell wird geladen…","ready":"Mìmo ist bereit.","stage":"3D-Vorschau von Mìmo","moods":["Fröhlich","Begeistert","Traurig","Hungrig","Satt","Gestresst","Entspannt","Schläfrig","Neugierig","Wütend","Umsorgt","Unwohl"],"eyenames":["Offen","Halb geschlossen","Fast geschlossen","Geschlossen","Zwinkern"]},"pt":{"active":"Mìmo ativo","closeWings":"Fechar as asas","openWings":"Abrir as asas","openLab":"Testar movimentos e emoções","closeLab":"Fechar laboratório","resetLab":"Restaurar movimentos naturais","preview":"Pré-visualização 3D de Mìmo","title":"Laboratório do Mìmo","intro":"Teste emoções, gestos e pálpebras no modelo 3D.","emotions":"Emoções (12)","moves":["Mastigar","Dizer sim","Dizer não","Acenar","Bater as asas","Mexer a cauda","Andar","Comemorar","Pensar","Falar","Respirar","Fechar as asas","Abrir as asas","Mover as orelhas"],"eyes":"Pálpebras (5)","note":"Os testes não gastam frutas nem alteram o quarto.","choose":"Selecione um ícone para testar o movimento.","observing":"Observe o Mìmo.","resetMessage":"Mìmo volta aos movimentos naturais.","loading":"Carregando o modelo 3D…","ready":"Mìmo está pronto.","stage":"Pré-visualização 3D de Mìmo","moods":["Feliz","Entusiasmado","Triste","Faminto","Satisfeito","Estressado","Relaxado","Sonolento","Curioso","Bravo","Acarinhado","Incomodado"],"eyenames":["Abertos","Semifechados","Quase fechados","Fechados","Piscadela"]},"ru":{"active":"Мимо включён","closeWings":"Сложить крылья","openWings":"Раскрыть крылья","openLab":"Проверить движения и эмоции","closeLab":"Закрыть лабораторию","resetLab":"Сбросить к естественным движениям","preview":"3D-просмотр Мимо","title":"Лаборатория Мимо","intro":"Проверь эмоции, движения и веки 3D-модели.","emotions":"Эмоции (12)","moves":["Жевать","Кивнуть","Мотать головой","Помахать","Махать крыльями","Двигать хвостом","Ходить","Праздновать","Думать","Говорить","Дышать","Сложить крылья","Раскрыть крылья","Двигать ушками"],"eyes":"Веки (5)","note":"Тесты не тратят фрукты и не меняют показатели комнаты.","choose":"Выбери значок, чтобы проверить движение.","observing":"Наблюдай за Мимо.","resetMessage":"Мимо возвращается к естественным движениям.","loading":"Загрузка 3D-модели…","ready":"Мимо готов.","stage":"3D-предпросмотр Мимо","moods":["Радостный","Восторженный","Грустный","Голодный","Сытый","Напряжённый","Расслабленный","Сонный","Любопытный","Сердитый","Любимый","Недовольный"],"eyenames":["Открыты","Полуприкрыты","Почти закрыты","Закрыты","Подмигнуть"]},"zh":{"active":"启用米莫","closeWings":"收起翅膀","openWings":"张开翅膀","openLab":"测试动作与情绪","closeLab":"关闭实验室","resetLab":"恢复自然动作","preview":"米莫 3D 预览","title":"米莫实验室","intro":"在 3D 模型上测试情绪、动作和眼睑。","emotions":"情绪（12）","moves":["咀嚼","点头","摇头","挥手","扇翅膀","摇尾巴","走路","庆祝","思考","说话","呼吸","收起翅膀","张开翅膀","动耳朵"],"eyes":"眼睑（5）","note":"测试不会消耗水果，也不会改变房间状态。","choose":"选择图标测试动作。","observing":"观察米莫。","resetMessage":"米莫恢复自然动作。","loading":"正在加载 3D 模型…","ready":"米莫已准备好。","stage":"米莫 3D 预览","moods":["开心","兴奋","难过","饥饿","吃饱","紧张","放松","困倦","好奇","生气","被疼爱","不舒服"],"eyenames":["睁开","半闭","几乎闭上","闭上","眨单眼"]},"ja":{"active":"ミモを有効にする","closeWings":"翼をたたむ","openWings":"翼を広げる","openLab":"動きと感情をテスト","closeLab":"ラボを閉じる","resetLab":"自然な動きに戻す","preview":"ミモの3Dプレビュー","title":"ミモのラボ","intro":"3Dモデルの感情、しぐさ、まぶたを試せます。","emotions":"感情（12）","moves":["かむ","うなずく","首を振る","手を振る","羽ばたく","尾を動かす","歩く","お祝い","考える","話す","呼吸する","翼をたたむ","翼を広げる","耳を動かす"],"eyes":"まぶた（5）","note":"テストでは果物を消費せず、部屋の状態も変わりません。","choose":"アイコンを選んで動きを試してください。","observing":"ミモを見てみよう。","resetMessage":"ミモが自然な動きに戻りました。","loading":"3Dモデルを読み込み中…","ready":"ミモの準備ができました。","stage":"ミモの3Dプレビュー","moods":["幸せ","大喜び","悲しい","お腹がすいた","満腹","ストレス","リラックス","眠い","好奇心","怒り","甘えん坊","不快"],"eyenames":["開いた目","半目","ほぼ閉じた目","閉じた目","ウインク"]}};
const mimoLocale = () => {
  const current = typeof mrAppLanguage === 'string' ? mrAppLanguage : document.documentElement.lang.slice(0,2);
  return Object.prototype.hasOwnProperty.call(MIMO_LANGUAGES,current) ? current : 'it';
};
const MIMO_MOVE_TITLES={it:'Movimenti singoli',en:'Individual movements',es:'Movimientos individuales',fr:'Mouvements individuels',de:'Einzelbewegungen',pt:'Movimentos individuais',ru:'Отдельные движения',zh:'单独动作',ja:'個別の動き'};
const MIMO_CYCLE_LABELS={
  it:{autoCycle:'Ciclo giorno/notte automatico',forceDay:'🌞 Giorno',forceNight:'🌙 Notte'},
  en:{autoCycle:'Automatic day/night cycle',forceDay:'🌞 Day',forceNight:'🌙 Night'},
  es:{autoCycle:'Ciclo día/noche automático',forceDay:'🌞 Día',forceNight:'🌙 Noche'},
  fr:{autoCycle:'Cycle jour/nuit automatique',forceDay:'🌞 Jour',forceNight:'🌙 Nuit'},
  de:{autoCycle:'Automatischer Tag/Nacht-Zyklus',forceDay:'🌞 Tag',forceNight:'🌙 Nacht'},
  pt:{autoCycle:'Ciclo dia/noite automático',forceDay:'🌞 Dia',forceNight:'🌙 Noite'},
  ru:{autoCycle:'Автоматический цикл день/ночь',forceDay:'🌞 День',forceNight:'🌙 Ночь'},
  zh:{autoCycle:'自动昼夜循环',forceDay:'🌞 白天',forceNight:'🌙 夜晚'},
  ja:{autoCycle:'昼夜の自動切替',forceDay:'🌞 昼',forceNight:'🌙 夜'}
};
const MIMO_TOUCH_ARIA={it:'Tocca Mìmo per giocare con lui',en:'Tap Mìmo to play with him',es:'Toca a Mìmo para jugar',fr:'Touche Mìmo pour jouer',de:'Tippe Mìmo zum Spielen an',pt:'Toque no Mìmo para brincar',ru:'Нажмите на Мимо, чтобы поиграть',zh:'点击米莫和他玩',ja:'ミモをタップして遊ぶ'};
Object.keys(MIMO_LANGUAGES).forEach(lang=>Object.assign(MIMO_LANGUAGES[lang],MIMO_CYCLE_LABELS[lang]||MIMO_CYCLE_LABELS.en,{touchMimo:MIMO_TOUCH_ARIA[lang]||MIMO_TOUCH_ARIA.en}));
const mimoT = key => key==='movesTitle'?MIMO_MOVE_TITLES[mimoLocale()]:MIMO_LANGUAGES[mimoLocale()][key] || MIMO_LANGUAGES.it[key] || key;

const KEY='mr_mimo_enabled',enabled=()=>{try{return localStorage.getItem(KEY)!=='0'}catch{return true}};
function boot(){
const panel=document.createElement('div');panel.id='mimoSettingsSection';panel.className='settings-panel settings-section';
panel.innerHTML=`<div class="settings-panel-head"><div class="settings-panel-icon">🦉</div><div class="settings-panel-title-wrap"><div class="settings-section-label">Mìmo</div></div></div>
<label class="mimo-option"><input type="checkbox" id="mimoEnabled"><span id="mr361MimoActive"></span></label>
<div class="mimo-options mr399-cycle-settings"><label class="mimo-option"><input type="checkbox" id="mr399AutoCycle"><span id="mr399AutoCycleLabel"></span></label><div class="mr399CycleButtons" role="group" aria-label="Anteprima giorno e notte"><button type="button" id="mr399ForceDay">🌞</button><button type="button" id="mr399ForceNight">🌙</button></div></div>
<div class="mr361SettingsActions"><div class="mr354WingSettings"><button type="button" id="mimoRest">🪽</button><button type="button" id="mimoOpen">🦋</button></div><button type="button" id="mr357OpenLab" class="mr357LabLaunch" aria-haspopup="dialog">🎭</button></div>
<p class="mr361SrOnly" id="mimoStatus" role="status" aria-live="polite"></p>`;

const stack=document.querySelector('#settingsPage .settings-stack')||document.querySelector('#settingsPage')||document.body;stack.insertBefore(panel,stack.firstChild);
const host=document.createElement('div');host.id='mimoBuddy';host.setAttribute('aria-label',mimoT('stage'));
const canvas=document.createElement('canvas');host.appendChild(canvas);
// Overlay 2D tracciato nello stesso riferimento prospettico del GLB: segue la testa,
// scala con la stanza e non richiede duplicazioni della texture o nuove ossa.
const lidCanvas=document.createElement('canvas');lidCanvas.id='mimoEyelidOverlay';
lidCanvas.setAttribute('aria-hidden','true');lidCanvas.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;background:transparent';
host.appendChild(lidCanvas);document.body.appendChild(host);
const lidCtx=lidCanvas.getContext('2d');
// Build 2.379: stato verificabile anche sulla simulazione iOS (senza nascondere
// eventuali errori WebGL/GLB nel solo pannello Impostazioni).
const MIMO_SIMULATOR = window.MusicRainbowIsSimulator === true;
function mimoReport(phase,message){
  window.MimoRenderStatus={phase,message:String(message||''),simulator:MIMO_SIMULATOR,updatedAt:Date.now()};
  window.dispatchEvent(new CustomEvent('musicrainbow:mimo-render-status',{detail:window.MimoRenderStatus}));
}
mimoReport('loading','Caricamento del modello 3D…');
const toggle=document.getElementById('mimoEnabled'),status=document.getElementById('mimoStatus');toggle.checked=enabled();const sync=()=>{host.style.display=toggle.checked?'block':'none';if(!toggle.checked)mimoReport('disabled','Mìmo disattivato nelle Impostazioni');else if(window.MimoRenderStatus?.phase==='disabled')mimoReport('loading','Mìmo attivato: caricamento in corso…')};toggle.onchange=()=>{try{localStorage.setItem(KEY,toggle.checked?'1':'0')}catch{}sync()};sync();
const cycleToggle=document.getElementById('mr399AutoCycle');
const forceDayBtn=document.getElementById('mr399ForceDay');
const forceNightBtn=document.getElementById('mr399ForceNight');
function syncCycleUi(){
  const solar=window.MusicRainbowSolar;
  const mode=solar?.getVisualMode?.()||'auto';
  const auto=mode==='auto';
  if(cycleToggle) cycleToggle.checked=auto;
  if(forceDayBtn){forceDayBtn.disabled=auto;forceDayBtn.setAttribute('aria-pressed',String(mode==='day'));}
  if(forceNightBtn){forceNightBtn.disabled=auto;forceNightBtn.setAttribute('aria-pressed',String(mode==='night'));}
}
cycleToggle?.addEventListener('change',()=>{
  const solar=window.MusicRainbowSolar;
  if(!solar?.setVisualMode) return;
  if(cycleToggle.checked) solar.setVisualMode('auto');
  else solar.setVisualMode(solar.isNight?.(new Date())?'night':'day');
  syncCycleUi();
});
forceDayBtn?.addEventListener('click',()=>{window.MusicRainbowSolar?.setVisualMode?.('day');syncCycleUi();});
forceNightBtn?.addEventListener('click',()=>{window.MusicRainbowSolar?.setVisualMode?.('night');syncCycleUi();});
window.MusicRainbowSolar?.subscribe?.(syncCycleUi);syncCycleUi();
const lab=document.createElement('div');lab.id='mr357Lab';lab.hidden=true;
lab.innerHTML=`<div class="mr357LabDialog" role="dialog" aria-modal="true" aria-labelledby="mr357LabTitle" tabindex="-1">
 <header class="mr357LabHeader"><div><h2 id="mr357LabTitle">🎭 Laboratorio di Mìmo</h2><p id="mr361LabIntro">Prova emozioni, gesti e palpebre sul modello 3D.</p></div><button type="button" id="mr357LabClose" aria-label="Chiudi laboratorio" title="Chiudi laboratorio">✕</button></header>
 <div class="mr357LabBody"><section class="mr357LabStage"><div id="mr357LabPreview" aria-label="Anteprima Mìmo 3D"></div><p id="mr357LabMessage" aria-live="polite">Seleziona un'emozione o un movimento.</p><button type="button" id="mr357LabReset" aria-label="Ripristina i movimenti naturali" title="Ripristina i movimenti naturali">↺</button></section>
 <div class="mr357LabControls"><h3 id="mr361LabMoodsTitle">Emozioni (12)</h3><div id="mr357LabMoods" class="mr357LabButtons"></div><h3 id="mr361LabMovesTitle">Movimenti singoli</h3><div id="mr357LabMoves" class="mr357LabButtons"></div><h3 id="mr361LabEyesTitle">Palpebre (5)</h3><div id="mr361LabEyes" class="mr357LabButtons mr361EyeButtons"></div><p class="mr357LabNote">I test non consumano frutta e non cambiano i valori della stanza. Chiudi per tornare allo stato reale di Mìmo.</p></div></div></div>`;
document.body.appendChild(lab);
const labMoods=[
 ['felice','😊 Felice','Testa vivace, ali e coda allegre'],
 ['entusiasta','🤩 Entusiasta','Saltelli, ali gioiose, coda veloce'],
 ['triste','😢 Triste','Testa bassa e movimenti lenti'],
 ['affamato','🍎 Affamato','Cerca cibo e muove il becco'],
 ['sazio','😋 Sazio','Soddisfatto e tranquillo'],
 ['stressato','😣 Stressato','Testa irrequieta e zampette veloci'],
 ['rilassato','😌 Rilassato','Respiro calmo e ali raccolte'],
 ['assonnato','😴 Assonnato','Cede lentamente con la testa'],
 ['curioso','🧐 Curioso','Inclina la testa e osserva'],
 ['arrabbiato','😠 Arrabbiato','Scuote la testa e agita la coda'],
 ['coccolato','🥰 Coccolato','Testa inclinata e coda dolce'],
 ['sporco','🫧 Fastidito','Piccoli scuotimenti e zampette']
];
const labMoves=[
 ['mastica','🫢 Apri/chiudi becco'],['annuisce','↕️ Testa SÌ'],
 ['scuote','↔️ Testa NO'],['saluta','👋 Saluto con l’ala'],
 ['svolazza','🦋 Battito d’ali'],['codina','🪶 Muovi coda'],
 ['cammina','🐾 Muovi zampe'],['festeggia','🎉 Festeggia'],
 ['pensa','🤔 Riflette'],['parla','🗣️ Muovi becco'],
 ['respiro','💓 Respiro accentuato'],['chiudiAli','🪽 Ripiega ali'],
 ['apriAli','🌈 Apri ali'],['orecchie','👂 Muovi le orecchie']
];
// Etichette accessibili, tasti soltanto iconografici e cinque prove occhi persistenti.
const labEyes=[
 ['standard','👀'],['tired','◒'],['sleepy','😑'],['closed','😴'],['mic','😉']
];
const moodKeys=labMoods.map(item=>item[0]);
const moveKeys=labMoves.map(item=>item[0]);
const eyeKeys=labEyes.map(item=>item[0]);
const getActionName=(group,key)=>{
 const index=(group==='moods'?moodKeys:group==='moves'?moveKeys:eyeKeys).indexOf(key);
 const translations=MIMO_LANGUAGES[mimoLocale()];
 return index>=0?(translations[group==='eyes'?'eyenames':group][index]||MIMO_LANGUAGES.it[group==='eyes'?'eyenames':group][index]):key;
};
const makeButtons=(target,items,group)=>items.forEach(item=>{
 const key=item[0],icon=group==='eyes'?item[1]:item[1].trim().split(/\s+/)[0];
 const button=document.createElement('button');button.type='button';button.dataset.action=key;button.dataset.group=group;
 const glyph=document.createElement('span');glyph.className='mr359ActionGlyph';glyph.setAttribute('aria-hidden','true');glyph.textContent=icon;button.appendChild(glyph);
 button.setAttribute('aria-pressed','false');
 button.addEventListener('click',()=>{
   window.MimoHaptics?.play?.(key==='orecchie'?'ears':key==='svolazza'||key==='chiudiAli'||key==='apriAli'?'wing':'play');
   if(group==='moods'){
     window.MimoExpressions?.clear();window.MimoMotion?.play('Mimi_Idle');window.MimoWings?.auto();window.MimoMood?.preview(key,20000);
   }else if(group==='moves'){
     window.MimoExpressions?.clear();window.MimoMood?.clearPreview();window.MimoMotion?.test(key);
   }else{
     // Priorità manuale: resta nello stato selezionato fino a un altro test o Reset.
     window.MimoExpressions?.set(key,0);
   }
   lab.querySelectorAll('.mr357LabButtons button').forEach(b=>b.setAttribute('aria-pressed','false'));
   button.setAttribute('aria-pressed','true');
   lab.querySelector('#mr357LabMessage').textContent=getActionName(group,key)+' — '+mimoT('observing');
 });target.appendChild(button);
});
makeButtons(lab.querySelector('#mr357LabMoods'),labMoods,'moods');
makeButtons(lab.querySelector('#mr357LabMoves'),labMoves,'moves');
makeButtons(lab.querySelector('#mr361LabEyes'),labEyes,'eyes');
function updateMimoTranslations(){
 document.getElementById('mr361MimoActive').textContent=mimoT('active');
 for(const [id,key] of [['mimoRest','closeWings'],['mimoOpen','openWings'],['mr357OpenLab','openLab'],['mr357LabClose','closeLab'],['mr357LabReset','resetLab']]){
   const button=document.getElementById(id);if(button){button.setAttribute('aria-label',mimoT(key));button.title=mimoT(key)}
 }
 for(const [selector,key] of [['#mr357LabTitle','title'],['#mr361LabIntro','intro'],['#mr361LabMoodsTitle','emotions'],['#mr361LabMovesTitle','movesTitle'],['#mr361LabEyesTitle','eyes'],['#mr357Lab .mr357LabNote','note']]){
   const item=document.querySelector(selector);if(item)item.textContent=(key==='title'?'🎭 ':'')+mimoT(key);
 }
 const preview=document.getElementById('mr357LabPreview');if(preview)preview.setAttribute('aria-label',mimoT('stage'));
 if(host?.getAttribute('role')==='button')host.setAttribute('aria-label',mimoT('touchMimo'));
 const cycleLabel=document.getElementById('mr399AutoCycleLabel');if(cycleLabel)cycleLabel.textContent=mimoT('autoCycle');
 const cycleDay=document.getElementById('mr399ForceDay');if(cycleDay){cycleDay.setAttribute('aria-label',mimoT('forceDay'));cycleDay.title=mimoT('forceDay');}
 const cycleNight=document.getElementById('mr399ForceNight');if(cycleNight){cycleNight.setAttribute('aria-label',mimoT('forceNight'));cycleNight.title=mimoT('forceNight');}
 lab.querySelectorAll('.mr357LabButtons button').forEach(button=>{const name=getActionName(button.dataset.group,button.dataset.action);button.setAttribute('aria-label',name);button.title=name;});
 const message=lab.querySelector('#mr357LabMessage');if(message)message.textContent=mimoT('choose');
}
window.updateMimoTranslations=updateMimoTranslations;
updateMimoTranslations();
let oldWingTarget=null,focusReturn=null;
const resetLab=()=>{window.MimoExpressions?.clear();window.MimoMood?.clearPreview();window.MimoMotion?.play('Mimi_Idle');window.MimoWings?.auto();lab.querySelectorAll('[aria-pressed]').forEach(b=>b.setAttribute('aria-pressed','false'));lab.querySelector('#mr357LabMessage').textContent=mimoT('resetMessage')};
const closeLab=()=>{
 if(lab.hidden)return;resetLab();if(oldWingTarget===1)window.MimoWings?.close();else if(oldWingTarget===0)window.MimoWings?.open();
 lab.hidden=true;document.body.classList.remove('mr357-lab-open');document.body.appendChild(host);
 host.style.display=toggle.checked?'block':'none';focusReturn?.focus?.();
};
document.getElementById('mr357OpenLab').addEventListener('click',()=>{
 focusReturn=document.activeElement;oldWingTarget=window.MimoWings?.get?.().target??null;
 lab.hidden=false;document.body.classList.add('mr357-lab-open');lab.querySelector('#mr357LabPreview').appendChild(host);host.style.display='block';
 lab.querySelector('.mr357LabDialog').focus();resetLab();
});
lab.querySelector('#mr357LabClose').addEventListener('click',closeLab);
lab.querySelector('#mr357LabReset').addEventListener('click',resetLab);
lab.addEventListener('click',e=>{if(e.target===lab)closeLab()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lab.hidden)closeLab()});
function error(message){mimoReport('error',message);status.textContent='Mìmo 3D: '+message;console.error('[Mimo380]',message);host.style.border='2px solid #d97706';host.style.background='rgba(255,245,220,.9)';host.title=message;host.setAttribute('data-mimo-error',message);host.style.pointerEvents='auto';let alert=host.querySelector('#mimoRenderError');if(!alert){alert=document.createElement('div');alert.id='mimoRenderError';alert.setAttribute('role','alert');alert.style.cssText='position:absolute;left:5%;right:5%;bottom:8%;z-index:5;background:#fff4de;color:#613e16;border:1px solid #d97706;border-radius:12px;padding:10px;font:600 12px/1.45 system-ui;text-align:center;box-shadow:0 4px 12px #0002';host.appendChild(alert)}alert.textContent='Mìmo 3D: '+message;}
const glOptions={alpha:true,antialias:!MIMO_SIMULATOR,premultipliedAlpha:false,depth:true,stencil:false,failIfMajorPerformanceCaveat:false};
const gl=canvas.getContext('webgl2',glOptions)||canvas.getContext('webgl',glOptions)||canvas.getContext('experimental-webgl',glOptions);
if(!gl){error('WebGL non disponibile in questa simulazione');return}
canvas.addEventListener('webglcontextlost',event=>{
 event.preventDefault();error('Contesto grafico WebGL perso: riavvia Mìmo');
},{passive:false});
status.textContent=mimoT('loading');const V=`precision highp float;attribute vec3 p;attribute vec3 n;attribute vec2 uv;attribute float mouthMask;uniform mat4 proj;uniform mat4 view;varying vec2 tex;varying vec3 normal;varying float mouthRegion;void main(){gl_Position=proj*view*vec4(p,1.);normal=n;tex=uv;mouthRegion=mouthMask;}`;
// Nel nuovo GLB il becco nasce molto aperto. Il morph ne chiude la geometria;
// solo quando si chiude, attenuiamo il rosa rimasto sul fondo della bocca.
// Nessuna texture duplicata: la correzione si applica esclusivamente al becco.
const F=`precision mediump float;varying vec2 tex;varying vec3 normal;varying float mouthRegion;uniform sampler2D diffuse;uniform float mouthClosure;void main(){
 vec3 base=texture2D(diffuse,tex).rgb;
 float pink= smoothstep(.18,.38,base.r-base.g)*smoothstep(.015,.10,base.b-base.g)*(1.0-smoothstep(.72,.89,base.g));
 float cover=smoothstep(.50,.92,mouthClosure)*smoothstep(.02,.25,mouthRegion)*pink;
 base=mix(base,vec3(.94,.55,.18),cover);
 float light=.72+.28*max(dot(normalize(normal),normalize(vec3(-.4,.8,1.))),0.);
 gl_FragColor=vec4(base*light,1.);
}`;
function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s}
let program;try{program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,V));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,F));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));}catch(e){error('Shader: '+e.message);return}
const I=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],mul=(a,b)=>{const r=new Array(16).fill(0);for(let c=0;c<4;c++)for(let i=0;i<4;i++)for(let k=0;k<4;k++)r[c*4+i]+=a[k*4+i]*b[c*4+k];return r};
const fromTRS=(t,q,s)=>{const [x,y,z,w]=q,[sx,sy,sz]=s,xx=x*x,yy=y*y,zz=z*z,xy=x*y,xz=x*z,yz=y*z,wx=w*x,wy=w*y,wz=w*z;return [(1-2*(yy+zz))*sx,2*(xy+wz)*sx,2*(xz-wy)*sx,0,2*(xy-wz)*sy,(1-2*(xx+zz))*sy,2*(yz+wx)*sy,0,2*(xz+wy)*sz,2*(yz-wx)*sz,(1-2*(xx+yy))*sz,0,...t,1]};
const invMat=m=>{const a=m[0],b=m[1],c=m[2],d=m[4],e=m[5],f=m[6],g=m[8],h=m[9],i=m[10];const A=e*i-f*h,B=f*g-d*i,C=d*h-e*g,det=a*A+b*B+c*C;if(Math.abs(det)<1e-10)return I();const q=1/det,r=[A*q,(c*h-b*i)*q,(b*f-c*e)*q,0,B*q,(a*i-c*g)*q,(c*d-a*f)*q,0,C*q,(b*g-a*h)*q,(a*e-b*d)*q,0,0,0,0,1];const x=m[12],y=m[13],z=m[14];r[12]=-(r[0]*x+r[4]*y+r[8]*z);r[13]=-(r[1]*x+r[5]*y+r[9]*z);r[14]=-(r[2]*x+r[6]*y+r[10]*z);return r};
const quat=(a,b,t)=>{let dot=a.reduce((s,x,i)=>s+x*b[i],0);if(dot<0){b=b.map(x=>-x);dot=-dot}if(dot>.9995){const q=a.map((x,i)=>x+(b[i]-x)*t),l=Math.hypot(...q);return q.map(x=>x/l)}const th=Math.acos(Math.min(1,dot)),sn=Math.sin(th),u=Math.sin((1-t)*th)/sn,v=Math.sin(t*th)/sn;return a.map((x,i)=>x*u+b[i]*v)};
// Cinque stati comandati da due palpebre 2D indipendenti. Nessuna texture duplicata.
let expression='standard',expressionUntil=0,blinkUntil=0,nextBlink=performance.now()+4300;
const expressionStates=['standard','mic','tired','sleepy','closed'];
const EYE_LEVELS={standard:[0,0],tired:[.52,.52],sleepy:[.83,.83],closed:[1,1],mic:[0,1]};
let manualExpression=false;
window.MimoExpressions={
 set:(name,duration=0)=>{if(!expressionStates.includes(name))return false;expression=name;manualExpression=true;expressionUntil=duration?performance.now()+duration:0;return true},
 clear:()=>{manualExpression=false;expression='standard';expressionUntil=0;return true},
 get:()=>expression
};
let textureReady=false;let data,bin,mesh,anim=[],nodes,skin,ibm,texture,basePositions,baseNormals,jointData,weightData,posBuffer,normBuffer,animatedPositions,animatedNormals,lastSkin=0,mode='Mimi_Idle',until=0,started=performance.now();
// 2.404: il giro e il salto sono applicati alla camera del modello 3D,
// senza spostare il contenitore DOM o alterare le coordinate della stanza.
let victoryStart=-Infinity, victoryEnd=-Infinity, mimoRenderYaw=0;
let mimoTouchStep=0;
// Nuovo Mìmo: le ossa del becco muovono solo una piccola parte delle labbra.
// Aggiungiamo un morph geometrico locale, calcolato dalla mesh ORIGINALE e
// applicato prima dello skinning, così segue testa, rotazioni e orecchie.
let beakMorphY=null,beakMorphZ=null,beakRegion=null,mouthClosureNow=1;
// 2.413: trasformazione locale della pancia, mai una scala dell'intero personaggio.
// In particolare ali, testa, orecchie, coda e zampe mantengono la loro geometria.
let bellyMorphX=null,bellyMorphZ=null;
let bodyShapeTarget=0,bodyShapeCurrent=0,bodyShapeFrameAt=0;
window.MimoBody={
 set(value){const v=Number(value);if(!Number.isFinite(v))return false;bodyShapeTarget=Math.max(-.82,Math.min(1,v));return true},
 get:()=>({target:bodyShapeTarget,current:bodyShapeCurrent})
};
const smooth01=v=>{v=Math.max(0,Math.min(1,v));return v*v*(3-2*v)};
function prepareBellyMorph(){
 const count=basePositions.length/3;
 bellyMorphX=new Float32Array(count);
 bellyMorphZ=new Float32Array(count);
 for(let v=0;v<count;v++){
  const i=v*3,j=v*4,x=basePositions[i],y=basePositions[i+1],z=basePositions[i+2];
  // Intervallo in coordinate originali del GLB: solo addome e parte bassa del tronco.
  const height=smooth01((y-.27)/.19)*(1-smooth01((y-.83)/.16));
  const width=1-smooth01((Math.abs(x)-.29)/.19);
  const front=smooth01((z+.23)/.31);
  let limbs=0;
  for(let k=0;k<4;k++){
   const joint=jointData[j+k],weight=weightData[j+k];
   // Escludi dalla deformazione le ali (19..32), le zampe (33..48) e la coda.
   if(joint>=19 && joint<=51)limbs+=weight;
  }
  const mask=Math.max(0,height*width*front*(1-Math.min(1,limbs*1.5)));
  bellyMorphX[v]=x*mask*.30;
  bellyMorphZ[v]=mask*(.15+.035*smooth01((z-.05)/.32));
 }
}
function prepareBeakMorph(){
 const count=basePositions.length/3;
 beakMorphY=new Float32Array(count);beakMorphZ=new Float32Array(count);beakRegion=new Float32Array(count);
 for(let v=0;v<count;v++){
  const k=v*3,x=basePositions[k],y=basePositions[k+1],z=basePositions[k+2];
  const xw=smooth01((.125-Math.abs(x))/.08),zw=smooth01((z-.325)/.08);
  const yw=smooth01((y-.78)/.07)*smooth01((1.045-y)/.08);
  const region=xw*zw*yw;
  const target=.955+.032*Math.min(1,Math.abs(x)/.09);
  const raise=Math.max(0,target-y);
  // Color mask covers the whole mouth, including the pink UV island at its upper edge.
  beakRegion[v]=smooth01((.17-Math.abs(x))/.05)*smooth01((z-.25)/.06)*smooth01((y-.76)/.04)*smooth01((1.19-y)/.05);
  beakMorphY[v]=raise*region;
  beakMorphZ[v]=.13*region*smooth01((target-y)/.13);
 }
}
window.MimoBeak={get:()=>({closure:mouthClosureNow,mode})};
function makeTextureFromImage(image){const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);return tex}
function chooseExpression(now){
 if(expressionUntil&&now>expressionUntil){manualExpression=false;expression='standard';expressionUntil=0}
 if(manualExpression)return expression;
 if(now<blinkUntil){
   const phase=(blinkUntil-now)/260;
   return phase>.80?'tired':phase>.58?'sleepy':phase>.29?'closed':phase>.09?'sleepy':'tired';
 }
 const mood=activeEmotion();
 if(mode==='Mimi_Greet')return 'mic';
 if(mode==='Mimi_Talk'||mode==='Mimi_Eat')return 'standard';
 if(['assonnato','riposo','stanco'].includes(mood))return 'sleepy';
 if(['rilassato','triste','sazio','coccolato'].includes(mood))return 'tired';
 return 'standard';
}
// Indici del GLB originale: centro, bordo sinistro/destro, alto/basso di ciascun occhio.
// Sono vertici REALI della testa, quindi cambiano posizione insieme allo skinning a 52 ossa.
const EYE_ANCHORS=[
 {center:62602,left:65404,right:63077,top:66330,bottom:62584},
 {center:269,left:51,right:1169,top:237,bottom:2871}
];
const eyelidCurrent=[0,0];let eyelidFrameTime=0;
const EYE_TWEAKS=[
 {scaleU:.615,scaleV:.57,offsetU:-.004,offsetV:.045,browLift:.025,lowerBias:.84,centerX:0,centerY:0},
 {scaleU:.658,scaleV:.615,offsetU:.020,offsetV:.058,browLift:.025,lowerBias:.84,centerX:0,centerY:0}
];
function eyelidProject(vertexIndex,view,proj,width,height){
 const off=vertexIndex*3;if(!animatedPositions||off+2>=animatedPositions.length)return null;
 const x=animatedPositions[off],y=animatedPositions[off+1],z=animatedPositions[off+2];
 const vx=view[0]*x+view[4]*y+view[8]*z+view[12];
 const vy=view[1]*x+view[5]*y+view[9]*z+view[13];
 const vz=view[2]*x+view[6]*y+view[10]*z+view[14];
 const pw=proj[11]*vz+proj[15];if(pw<.04)return null;
 return {x:(1+(proj[0]*vx+proj[8]*vz+proj[12])/pw)*width*.5,
         y:(1-(proj[5]*vy+proj[9]*vz+proj[13])/pw)*height*.5,
         depth:pw};
}
function drawEyelids(now,wanted,view,proj,width,height,dpr){
 if(!lidCtx)return;
 const rw=Math.round(width*dpr),rh=Math.round(height*dpr);
 if(lidCanvas.width!==rw||lidCanvas.height!==rh){lidCanvas.width=rw;lidCanvas.height=rh}
 lidCtx.setTransform(dpr,0,0,dpr,0,0);lidCtx.clearRect(0,0,width,height);
 const elapsed=eyelidFrameTime?Math.min(.08,(now-eyelidFrameTime)/1000):.016;eyelidFrameTime=now;
 const aims=EYE_LEVELS[wanted]||EYE_LEVELS.standard;
 for(let eye=0;eye<2;eye++)eyelidCurrent[eye]+=(aims[eye]-eyelidCurrent[eye])*Math.min(1,elapsed*15.5);
 const faceFactor=Math.max(0,Math.min(1,(Math.cos(mimoRenderYaw)-.28)/.30));
 if(faceFactor<=.015)return;
 const eyes=[];
 for(let eye=0;eye<2;eye++){
   const a=EYE_ANCHORS[eye];
   const c=eyelidProject(a.center,view,proj,width,height),
         l=eyelidProject(a.left,view,proj,width,height),
         r=eyelidProject(a.right,view,proj,width,height),
         t=eyelidProject(a.top,view,proj,width,height),
         b=eyelidProject(a.bottom,view,proj,width,height);
   if(!c||!l||!r||!t||!b)return;
   eyes.push({c,l,r,t,b});
 }
 let hx=0,hy=0,vx=0,vy=0;
 for(const e of eyes){hx+=(e.r.x-e.l.x);hy+=(e.r.y-e.l.y);vx+=(e.b.x-e.t.x);vy+=(e.b.y-e.t.y)}
 let hlen=Math.hypot(hx,hy); if(hlen<1)return; hx/=hlen; hy/=hlen;
 let dot=vx*hx+vy*hy; vx-=dot*hx; vy-=dot*hy;
 let vlen=Math.hypot(vx,vy);
 if(vlen<1){vx=-hy; vy=hx; vlen=Math.hypot(vx,vy)||1}
 vx/=vlen; vy/=vlen;
 if(vy<0){vx*=-1;vy*=-1}
 for(let eye=0;eye<2;eye++){
   const closed=Math.max(0,Math.min(1,eyelidCurrent[eye]));
   if(closed<.012)continue;
   const e=eyes[eye], tweak=EYE_TWEAKS[eye]||EYE_TWEAKS[0];
   const rawWidth=Math.hypot(e.r.x-e.l.x,e.r.y-e.l.y), rawHeight=Math.hypot(e.b.x-e.t.x,e.b.y-e.t.y);
   const eyeWidth=rawWidth*tweak.scaleU, eyeHeight=rawHeight*tweak.scaleV;
   const ux=hx*eyeWidth, uy=hy*eyeWidth;
   const vxx=vx*eyeHeight, vyy=vy*eyeHeight;
   const cx=e.c.x*.56 + (e.l.x+e.r.x)*.22;
   const cy=e.c.y*.56 + (e.t.y+e.b.y)*.22;
   const shiftX=ux*tweak.offsetU + vxx*tweak.offsetV + ux*tweak.centerX + vxx*tweak.centerY;
   const shiftY=uy*tweak.offsetU + vyy*tweak.offsetV + uy*tweak.centerX + vyy*tweak.centerY;
   lidCtx.save();
   lidCtx.globalAlpha=faceFactor;
   lidCtx.transform(ux,uy,vxx,vyy,cx+shiftX,cy+shiftY);
   lidCtx.beginPath();lidCtx.ellipse(0,0,.988,.988,0,0,Math.PI*2);lidCtx.clip();
   const skin=lidCtx.createLinearGradient(0,-1.25,0,1.25);
   skin.addColorStop(0,'#f9edde');skin.addColorStop(.52,'#f0ddc6');skin.addColorStop(1,'#e2bea6');
   lidCtx.fillStyle=skin;
   const upperClosed=Math.min(1,0.045 + closed*0.925 + tweak.browLift);
   const lowerClosed=Math.min(1,Math.max(0,(closed-0.10))*tweak.lowerBias);
   let upperY=-1 + upperClosed*1.54;
   let lowerY= 1 - lowerClosed*1.52;
   if(upperY>lowerY-.085){ const mid=(upperY+lowerY)*.5; upperY=mid-.042; lowerY=mid+.042; }

   // palpebra superiore
   lidCtx.beginPath();
   lidCtx.moveTo(-1.28,-1.34); lidCtx.lineTo(1.28,-1.34); lidCtx.lineTo(1.28,upperY);
   lidCtx.bezierCurveTo(.76,upperY+.13,-.76,upperY+.13,-1.28,upperY);
   lidCtx.closePath(); lidCtx.fill();

   // palpebra inferiore
   if(lowerClosed>.012){
     lidCtx.beginPath();
     lidCtx.moveTo(-1.28,1.34); lidCtx.lineTo(1.28,1.34); lidCtx.lineTo(1.28,lowerY);
     lidCtx.bezierCurveTo(.74,lowerY-.11,-.74,lowerY-.11,-1.28,lowerY);
     lidCtx.closePath(); lidCtx.fill();
   }

   // ombre morbide delle palpebre
   const upperShadow=lidCtx.createLinearGradient(0,upperY-.26,0,upperY+.18);
   upperShadow.addColorStop(0,'rgba(104,73,55,0.00)');
   upperShadow.addColorStop(.55,'rgba(104,73,55,0.18)');
   upperShadow.addColorStop(1,'rgba(104,73,55,0.34)');
   lidCtx.fillStyle=upperShadow;
   lidCtx.beginPath();
   lidCtx.moveTo(-1.06,upperY-.22);
   lidCtx.bezierCurveTo(-.62,upperY-.02,.62,upperY-.02,1.06,upperY-.22);
   lidCtx.lineTo(1.06,upperY+.20);
   lidCtx.bezierCurveTo(.56,upperY+.35,-.56,upperY+.35,-1.06,upperY+.20);
   lidCtx.closePath(); lidCtx.fill();
   if(lowerClosed>.04){
     const lowerShadow=lidCtx.createLinearGradient(0,lowerY-.15,0,lowerY+.22);
     lowerShadow.addColorStop(0,'rgba(120,92,75,0.24)');
     lowerShadow.addColorStop(.55,'rgba(120,92,75,0.08)');
     lowerShadow.addColorStop(1,'rgba(120,92,75,0.00)');
     lidCtx.fillStyle=lowerShadow;
     lidCtx.beginPath();
     lidCtx.moveTo(-.98,lowerY-.18);
     lidCtx.bezierCurveTo(-.52,lowerY-.30,.52,lowerY-.30,.98,lowerY-.18);
     lidCtx.lineTo(.98,lowerY+.12);
     lidCtx.bezierCurveTo(.54,lowerY+.18,-.54,lowerY+.18,-.98,lowerY+.12);
     lidCtx.closePath(); lidCtx.fill();
   }

   // rime palpebrali
   lidCtx.lineCap='round';
   lidCtx.strokeStyle=`rgba(79,50,35,${0.62+.14*closed})`; lidCtx.lineWidth=.078;
   lidCtx.beginPath();
   lidCtx.moveTo(-.88,upperY); lidCtx.bezierCurveTo(-.34,upperY+.12,.34,upperY+.12,.88,upperY); lidCtx.stroke();
   if(lowerClosed>.05){
     lidCtx.strokeStyle='rgba(118,94,79,.34)'; lidCtx.lineWidth=.045;
     lidCtx.beginPath();
     lidCtx.moveTo(-.83,lowerY); lidCtx.bezierCurveTo(-.32,lowerY-.08,.32,lowerY-.08,.83,lowerY); lidCtx.stroke();
   }
   lidCtx.strokeStyle='rgba(255,252,247,.56)'; lidCtx.lineWidth=.028;
   lidCtx.beginPath();
   lidCtx.moveTo(-.73,upperY-.11); lidCtx.quadraticCurveTo(0,upperY-.02,.73,upperY-.11); lidCtx.stroke();

   // ciglia superiori
   const lashPoints=[-.72,-.30,.08,.46,.78];
   lidCtx.strokeStyle='rgba(74,46,35,.70)'; lidCtx.lineWidth=.038;
   for(let i=0;i<lashPoints.length;i++){
     const x=lashPoints[i];
     const spread=Math.abs(x);
     const len=.13 + spread*.04;
     const sway=(x<0?-1:1)*(.07 + spread*.03);
     lidCtx.beginPath();
     lidCtx.moveTo(x,upperY-.01);
     lidCtx.quadraticCurveTo(x+sway*.35,upperY-.08-len*.35,x+sway,upperY-.13-len);
     lidCtx.stroke();
   }
   lidCtx.restore();
 }
}
// Movimento visivo della lingua per il nuovo GLB: il ramo 8->7 non dispone
// di pesi di skinning sulla punta, perciò non muove la geometria da solo.
// Un piccolo elemento vettoriale ancorato a vertici animati del becco segue
// la testa e il suo orientamento, senza modificare GLB, ossa o texture.
function drawMimoTongue(now,view,proj,width,height){
 if(!lidCtx || !(mode==='Mimi_Talk'||mode==='Mimi_Eat'))return;
 // La lingua non deve sbucare sotto il becco quando è quasi chiuso.
 const reveal=tongueActivity*smooth01((mouthOpenNow-.24)/.33);
 if(reveal<.08)return;
 const faceFactor=Math.max(0,Math.min(1,(Math.cos(mimoRenderYaw)-.42)/.24));
 if(faceFactor<=.02)return;
 const upper=eyelidProject(63537,view,proj,width,height);
 const lower=eyelidProject(33567,view,proj,width,height);
 if(!upper||!lower)return;
 const dx=lower.x-upper.x,dy=lower.y-upper.y;
 const length=Math.hypot(dx,dy);
 if(length<5||length>height*.30)return;
 const stage=(mode==='Mimi_Talk'?.58:.65)+.11*Math.sin(now*.018);
 const cx=upper.x+dx*stage,cy=upper.y+dy*stage;
 const radius=Math.max(2.3,Math.min(8.4,length*.18));
 lidCtx.save();
 lidCtx.globalAlpha=faceFactor*.77*Math.min(1,reveal*1.2);
 // Il becco resta davanti alla lingua nel modello; l'overlay è limitato
 // all'interno della bocca e non deve uscire sulla fronte o sul piumaggio.
 lidCtx.translate(cx,cy);
 lidCtx.rotate(Math.atan2(dy,dx)-Math.PI/2);
 lidCtx.scale(1,.6+.45*reveal);
 const fill=lidCtx.createLinearGradient(0,-radius,0,radius);
 fill.addColorStop(0,'#fa718d');fill.addColorStop(.55,'#ed4f77');fill.addColorStop(1,'#b52c52');
 lidCtx.beginPath();lidCtx.ellipse(0,0,radius*.68,radius,0,0,Math.PI*2);
 lidCtx.fillStyle=fill;lidCtx.fill();
 lidCtx.beginPath();lidCtx.moveTo(0,-radius*.56);lidCtx.quadraticCurveTo(radius*.13,0,0,radius*.40);
 lidCtx.strokeStyle='rgba(141,23,55,.35)';lidCtx.lineWidth=Math.max(.6,radius*.10);lidCtx.stroke();
 lidCtx.restore();
}
function play(name,duration){
 const allowed=new Set(['Mimi_Idle','Mimi_Greet','Mimi_Flap','Mimi_Celebrate','Mimi_Think','Mimi_Yes','Mimi_No','Mimi_Talk','Mimi_Walk','Mimi_Tail','Mimi_Eat','Mimi_Ears']);
 if(!allowed.has(name))name='Mimi_Idle';
 mode=name;started=performance.now();
 const defaults={Mimi_Idle:Infinity,Mimi_Talk:Infinity,Mimi_Walk:1800,Mimi_Eat:1900,Mimi_Ears:2400,Mimi_Greet:2300,Mimi_Flap:2600,Mimi_Celebrate:2900,Mimi_Think:2200,Mimi_Yes:1500,Mimi_No:1700,Mimi_Tail:2100};
 until=started+(Number.isFinite(duration)?Math.max(150,duration):(defaults[name]??2200));
 if(name==='Mimi_Celebrate'){victoryStart=started;victoryEnd=until;}
 else{victoryEnd=-Infinity;}
 host.dataset.mimoAction=name;
}
window.MimoMotion={
 play:(name,duration)=>{play(name,duration);return true},
 walk:(duration=1400)=>{play('Mimi_Walk',duration);return true},
 eat:()=>{window.MimoHaptics?.play?.('eat');play('Mimi_Eat',3400);return true},
 celebrate:()=>{window.MimoHaptics?.play?.('win');window.MimoExpressions?.set?.('standard',2900);play('Mimi_Celebrate',2900);return true},
 greet:()=>{play('Mimi_Greet');return true},
 // Alternanza deterministica, senza random: a ogni tocco una reazione differente.
 touch:()=>{
  if(mode==='Mimi_Celebrate' && performance.now()<until)return false;
  const gestures=[
   ['Mimi_Ears',2600,'standard'],  // muove entrambe le orecchie
   ['Mimi_No',1950,'tired'],       // piccolo gesto di fastidio: scuote la testa
   ['Mimi_Greet',2400,'mic'],      // saluto giocoso
   ['Mimi_Tail',2250,'standard'],  // scodinzola
   ['Mimi_Ears',2300,'standard'],
   ['Mimi_Flap',2600,'standard']   // gioco con le ali
  ];
  const [action,duration,eyes]=gestures[mimoTouchStep++ % gestures.length];
  window.MimoExpressions?.set?.(eyes,duration);
  window.MimoHaptics?.play?.(action==='Mimi_Ears'?'ears':action==='Mimi_Flap'?'wing':'play');
  play(action,duration);
  return true;
 },
 get:()=>({action:mode,celebrating:mode==='Mimi_Celebrate'&&performance.now()<until,nextTouch:mimoTouchStep%6})
};
// 2.416 — Superpancia: grande POP arcobaleno cartoon, coriandoli, onde, fanfara.
// L'ancoraggio e il modello di Mìmo non cambiano: gli effetti sono sovrapposti solo temporaneamente.
let superPanciaToken414=0;
function superPancia414(){
 if(host.classList.contains('mr414-pop-playing'))return false;
 const token=++superPanciaToken414;
 const duration=3600;
 window.MimoExpressions?.set?.('standard',duration);
 play('Mimi_Celebrate',duration);
 host.classList.add('mr414-pop-playing');
 // Fanfara scherzosa: preparazione ascendente, POP e piccole note brillanti.
 // Gli oscillatori partono nel gesto di rilascio, come richiesto da iOS.
 try{
  const Audio=window.AudioContext||window.webkitAudioContext;
  if(Audio){
   const ctx=new Audio();void ctx.resume();
   const now=ctx.currentTime;
   const chirp=(delay,frequency,length,volume,type='triangle')=>{
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type=type;osc.frequency.setValueAtTime(frequency,now+delay);
    osc.frequency.exponentialRampToValueAtTime(Math.max(80,frequency*.72),now+delay+length);
    gain.gain.setValueAtTime(.0001,now+delay);
    gain.gain.exponentialRampToValueAtTime(volume,now+delay+.012);
    gain.gain.exponentialRampToValueAtTime(.0001,now+delay+length);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start(now+delay);osc.stop(now+delay+length+.02);
   };
   [390,470,565,710,920].forEach((hz,i)=>chirp(.20+i*.17,hz,.15,.033));
   [240,620,970].forEach((hz,i)=>chirp(1.22+i*.025,hz,.32,i? .050:.075,i===0?'sawtooth':'sine'));
   [785,990,1175,1495].forEach((hz,i)=>chirp(1.57+i*.145,hz,.22,.030,'sine'));
   setTimeout(()=>{void ctx.close().catch(()=>{})},3550);
  }
 }catch{}
 setTimeout(()=>{
  if(token!==superPanciaToken414)return;
  window.MimoHaptics?.play?.('pop');
  const rect=host.getBoundingClientRect();
  if(!rect.width||!rect.height)return;
  const x=rect.left+rect.width*.5,y=rect.top+rect.height*.43;
  const fx=document.createElement('div');fx.className='mr416-pop-effects';
  fx.style.left=x+'px';fx.style.top=y+'px';
  fx.setAttribute('aria-hidden','true');
  const comic=document.createElement('span');comic.className='mr416-pop-word';comic.textContent='POP!';
  const cloud=document.createElement('span');cloud.className='mr416-pop-cloud';cloud.textContent='☁';
  fx.append(cloud,comic);
  for(let ring=0;ring<3;ring++){
   const wave=document.createElement('span');wave.className='mr416-pop-wave';
   wave.style.setProperty('--ring',String(ring));fx.appendChild(wave);
  }
  const colors=['#ff4589','#ffe34f','#3cecb7','#43b8fa','#ae60ff','#ff944c','#ffffff'];
  const glyphs=['★','✦','●','✧','✿','♫','◆','♥'];
  const extent=Math.min(390,Math.max(145,Math.min(innerWidth,innerHeight)*.39));
  for(let i=0;i<80;i++){
   const angle=(i/80)*Math.PI*2+(i%3)*.075;
   const radius=extent*(.46+(i%11)/16);
   const piece=document.createElement('span');piece.className='mr416-pop-piece';
   piece.textContent=glyphs[i%glyphs.length];
   piece.style.setProperty('--dx',Math.round(Math.cos(angle)*radius)+'px');
   piece.style.setProperty('--dy',Math.round(Math.sin(angle)*radius)+'px');
   piece.style.setProperty('--spin',((i%2)?-1:1)*(240+i*21)+'deg');
   piece.style.setProperty('--delay',((i%7)*.026)+'s');
   piece.style.setProperty('--sz',(14+i%5*6)+'px');
   piece.style.color=colors[i%colors.length];fx.appendChild(piece);
  }
  document.body.appendChild(fx);
  setTimeout(()=>fx.remove(),2400);
 },1240);
 setTimeout(()=>{
  if(token!==superPanciaToken414)return;
  host.classList.remove('mr414-pop-playing');
  play('Mimi_Greet',1050);
 },duration);
 return true;
}
window.MimoMotion.superPancia=superPancia414;
// Il modello e' un vero elemento toccabile. Non blocchiamo pulsanti esterni
// quando Mìmo e' nel laboratorio, ne' alteriamo il suo punto di ancoraggio.
host.setAttribute('role','button');
host.setAttribute('tabindex','0');
host.setAttribute('aria-label',mimoT('touchMimo'));
host.addEventListener('click',event=>{
 if(!toggle.checked || !lab.hidden)return;
 event.preventDefault();event.stopPropagation();
 window.MimoMotion.touch();
});
host.addEventListener('keydown',event=>{
 if(event.key==='Enter'||event.key===' '){event.preventDefault();host.click();}
});
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
let mimoTargetYaw=0,mimoCurrentYaw=0,mimoLastYawFrame=0;
// Le emozioni persistenti dipendono dai bisogni. I test sono sovrapposizioni temporanee:
// non modificano l'inventario né gli indicatori e si ripristinano automaticamente.
const emotionProfiles={
 contento:{fold:.78,yaw:0}, felice:{fold:.40,yaw:0}, entusiasta:{fold:.16,yaw:0},
 triste:{fold:.96,yaw:-.23}, affamato:{fold:.82,yaw:0}, sazio:{fold:.86,yaw:0},
 stressato:{fold:.55,yaw:0}, rilassato:{fold:.96,yaw:0},
 assonnato:{fold:1,yaw:0}, curioso:{fold:.69,yaw:0},
 arrabbiato:{fold:.57,yaw:Math.PI}, coccolato:{fold:.75,yaw:0},
 sporco:{fold:.76,yaw:0}, stanco:{fold:.98,yaw:0}, riposo:{fold:.99,yaw:0}
};
let emotionalState='contento', previewEmotion=null, previewUntil=0,emotionFold=.78;
const activeEmotion=()=>previewEmotion&&performance.now()<previewUntil?previewEmotion:emotionalState;
function applyEmotionalYaw(name){mimoTargetYaw=emotionProfiles[name]?.yaw??0;}
window.MimoMood={
 set:(name)=>{if(!emotionProfiles[name])return false;emotionalState=name;emotionFold=emotionProfiles[name].fold;if(!previewEmotion)applyEmotionalYaw(name);return true},
 preview:(name,duration=12000)=>{if(!emotionProfiles[name])return false;previewEmotion=name;previewUntil=performance.now()+Math.max(2500,Number(duration)||12000);applyEmotionalYaw(name);play('Mimi_Idle');return true},
 clearPreview:()=>{previewEmotion=null;previewUntil=0;applyEmotionalYaw(emotionalState);return true},
 get:()=>activeEmotion(),getBase:()=>emotionalState,
 states:()=>Object.keys(emotionProfiles),no:()=>play('Mimi_No'),yes:()=>play('Mimi_Yes')
};
let wingFoldProgress=.78,wingFoldLastTime=performance.now();
// Distinguere il comando manuale (persistente) dalle azioni automatiche della stanza.
// Un clic su Chiudi/Apri resta valido fino al clic opposto, senza timeout nascosto.
// La scelta manuale e' persistente. Una routine della stanza (letto / vasca)
// non puo' sovrascrivere un comando impartito dal bambino.
let wingCommand=null,wingCommandUntil=Infinity,wingManualSelection=null;
function setWingCommand(target,duration){
 const timed=Number.isFinite(duration)&&duration>0;
 if(timed){
   if(wingManualSelection!==null)return false;
   wingCommand=target;
   wingCommandUntil=performance.now()+Math.max(1200,duration);
 }else{
   wingManualSelection=target;
   wingCommand=target;
   wingCommandUntil=Infinity;
 }
 return true;
}
window.MimoWings={
 close:(duration)=>setWingCommand(1,duration),
 open:(duration)=>setWingCommand(0,duration),
 auto:()=>{wingCommand=null;wingCommandUntil=Infinity;wingManualSelection=null;return true},
 get:()=>({fold:wingFoldProgress,target:wingCommand,manual:wingManualSelection!==null,remainingMs:Number.isFinite(wingCommandUntil)?Math.max(0,wingCommandUntil-performance.now()):null}),
 // Diagnostics disponibili in console, senza invasivi indicatori nell'interfaccia.
 debug:()=>({modelReady:!!mesh,joints:skin?.joints?.length??0,fold:wingFoldProgress,target:wingCommand,manual:wingManualSelection!==null,mode})
};
// Gesti richiamabili dal laboratorio; tutti usano le stesse 52 ossa del personaggio.
let breathingDemoUntil=0,demoTalkingUntil=0;
const soloGestures={
 mastica:'Mimi_Eat', annuisce:'Mimi_Yes', scuote:'Mimi_No',
 saluta:'Mimi_Greet', svolazza:'Mimi_Flap', festeggia:'Mimi_Celebrate', orecchie:'Mimi_Ears',
 cammina:'Mimi_Walk', codina:'Mimi_Tail', pensa:'Mimi_Think',
 parla:'Mimi_Talk', curiosa:'Mimi_Think'
};
window.MimoMotion.test=(id)=>{
 if(id==='respiro'){breathingDemoUntil=performance.now()+4500;play('Mimi_Idle');return true}
 if(id==='chiudiAli')return window.MimoWings.close();
 if(id==='apriAli')return window.MimoWings.open();
 const name=soloGestures[id];if(!name)return false;
 if(name==='Mimi_Talk'){demoTalkingUntil=performance.now()+3200;play(name,3200)}
 else play(name,id==='mastica'?3400:2900);
 return true;
};
document.getElementById('mimoRest').addEventListener('click',()=>window.MimoWings.close());
document.getElementById('mimoOpen').addEventListener('click',()=>window.MimoWings.open());
const automaticWingFoldStrength=1.0;
const automaticWingVisibility=.90;
// La numerazione corrisponde agli indici NODO della mappa di Francesco,
// non ai numeri Bone_### (l'ordine glTF e' differente).
// Vecchia mappa 52 joint -> nuova mappa 52 joint (indici di nodo, NON nomi Bone_###).
// Le ali e le zampe mantengono la logica dei gesti; i terminali sono stati
// riassegnati alle nuove catene, più corte, e le orecchie sono indipendenti.
const rigIndexMap={
 1:4, 3:6, 5:14, 14:15, 18:16, 19:19, 20:20, 21:21,
 30:22, 34:23, 35:26, 36:27, 37:28, 38:29, 39:30,
 40:36, 44:38, 45:44, 49:46, 50:47, 51:47, 52:48, 53:49, 55:50, 56:51
};
const rigNode=index=>rigIndexMap[index]??index;
const groups={beakUpper:[13,4,3],beakLower:[13,6,5],tongue:[8,7],head:[14,13],earsLeft:[10,9],earsRight:[12,11],
 leftWing:[21,20,19,16,18,15,17],rightWing:[28,27,26,23,25,22,24],
 feetLeft:[38,37,36,33,35],feetRight:[46,45,44,40,42],tail:[49,48,47],body:[50,51]};
// Animazioni procedurali additive alle rotazioni di riposo, nessun clip Meshy richiesto.
// Si animano principalmente le articolazioni prossimali: muovere tutte le ossa
// in modo identico deformerebbe piume e dita.
let mouthOpenNow=0,tongueActivity=0; // aggiornati a ogni posa; disegno lingua sul canvas del volto
function procedural(poses,t){
 const w=Math.PI*2, wave=(speed,phase=0)=>Math.sin(t*w*speed+phase);
 const rawRot=(node,axis,angle)=>{if(!poses[node])return;const q=poses[node].rotation,half=angle/2,h=Math.sin(half),r=[axis===0?h:0,axis===1?h:0,axis===2?h:0,Math.cos(half)];poses[node].rotation=[q[3]*r[0]+q[0]*r[3]+q[1]*r[2]-q[2]*r[1],q[3]*r[1]-q[0]*r[2]+q[1]*r[3]+q[2]*r[0],q[3]*r[2]+q[0]*r[1]-q[1]*r[0]+q[2]*r[3],q[3]*r[3]-q[0]*r[0]-q[1]*r[1]-q[2]*r[2]]};
 const rot=(oldNode,axis,angle)=>rawRot(rigNode(oldNode),axis,angle);
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
 const aim=(root,tip,target,strength)=>{root=rigNode(root);tip=rigNode(tip);if(!poses[root]||!poses[tip]||strength<=0)return;const at=worldPose(),r=at(root),end=at(tip),v=end.p.map((x,k)=>x-r.p[k]);if(Math.hypot(...v)<.001)return;const parent=parents[root],pq=parent>=0?at(parent).q:[0,0,0,1];const delta=qbetween(v,target),local=qmul(qmul(qinv(pq),delta),pq),desired=qmul(local,poses[root].rotation);poses[root].rotation=quat(poses[root].rotation,desired,Math.min(1,strength));};
 // 2.337: ali piu visibili ai fianchi, restando dietro al pancino.
 // 2.334: ali raccolte DIETRO i fianchi del pancino, come nel riferimento
 // approvato. Il becco punta verso +Z; -Z e' il retro.
 // 14 e 30 devono scendere, portando con se' i segmenti figli.
 // 2.340: ogni ala resta sul proprio fianco, senza convergere sul dorso.
 // Le direzioni sono espresse nello spazio del modello e non nell'asse locale delle ossa.
 // La nuova armatura ha le ali su Bone_020 (nodo 21) e Bone_023 (nodo 28).
 // Rotazione Z simmetrica verificata sul mesh skinnato: chiusura anatomica
 // dietro i fianchi, apertura al livello delle spalle. Priorità all'ultimo frame.
 const wingFold=(amount)=>{
   const a=Math.max(0,Math.min(1,amount));
   rawRot(21,2,-.95*a);
   rawRot(28,2,+.95*a);
 };
 const flap=(a)=>{const opening=1-wingFoldProgress;rot(21,2,a*opening);rot(37,2,-a*opening);rot(18,2,a*.18*opening);rot(34,2,-a*.18*opening)};
 const nod=(a)=>{rot(39,0,a*.35);rot(5,0,a*.65)};
 // 2.368: anatomia confermata dalla mappa: nodo 13 = cerniera comune.
 // Ramo superiore 13 -> 4 -> 3; ramo inferiore 13 -> 6 -> 5.
 // Ogni ramo viene mosso sul proprio asse locale X, senza ruotare il nodo 13.
 // Il vecchio movimento (max 0.14 rad solo sul nodo 6) risultava impercettibile.
 const mouth=(close,tongue=0)=>{
   const open=1-Math.max(0,Math.min(1,close));
   mouthOpenNow=open;
   mouthClosureNow=1-open;
   tongueActivity=Math.max(0,Math.min(1,tongue));
   // L'escursione visibile viene ora principalmente dal morph del becco,
   // mentre i quattro nodi originali aggiungono articolazioni leggere.
   rawRot(4,0,.035*mouthClosureNow-.025*open);
   rawRot(3,0,.085*mouthClosureNow-.065*open);
   rawRot(6,0,.085*mouthClosureNow-.065*open);
   rawRot(5,0,.026*mouthClosureNow-.020*open);
   // 8 -> 7 è il riferimento scheletrico per la lingua. Il nodo 7 ha
   // zero pesi di skinning nel GLB e il nodo 8 controlla anche la testa:
   // NON ruotare 8. Spostiamo virtualmente 7; il risultato visibile è
   // disegnato vicino alla parte rosa della bocca da drawMimoTongue().
   rawRot(7,0,.22*tongueActivity);
 };
 const talk=(a)=>{mouth(a,.28+.72*Math.pow(Math.abs(wave(4.2,.7)),.8));};
 const step=(a)=>{rot(44,0,a);rot(49,0,-a);rot(40,0,a*.12);rot(45,0,-a*.12)};
 const ears=(a)=>{rawRot(10,2,a);rawRot(12,2,-a*.92);rawRot(9,1,a*.17);rawRot(11,1,-a*.17)};
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
   // Nuovo rig: la coda ha tre segmenti, non quattro.
 };
 const isFlying=mode==='Mimi_Flap'||mode==='Mimi_Celebrate';
 // Apertura e chiusura graduali, indipendenti dalla frequenza dei frame.
 const now=performance.now(),dt=Math.min(.08,Math.max(0,(now-wingFoldLastTime)/1000));wingFoldLastTime=now;
 const lifeSeconds=performance.now()/1000;
 if(previewEmotion&&now>=previewUntil){previewEmotion=null;applyEmotionalYaw(emotionalState)}
 const mood=activeEmotion(),profile=emotionProfiles[mood]||emotionProfiles.contento;
 const wingLifeAmplitude=['stanco','riposo','assonnato','rilassato'].includes(mood)?.025:['felice','entusiasta','coccolato'].includes(mood)?.13:.070;
 const wingLife=Math.sin(lifeSeconds*.73)+.45*Math.sin(lifeSeconds*1.37+1.1);
 // La chiusura/apertura richiesta dall'utente non può essere sovrascritta dall'idle.
 if(wingCommand!==null&&Number.isFinite(wingCommandUntil)&&now>=wingCommandUntil){wingCommand=null;wingCommandUntil=Infinity;}
 const targetFold=wingCommand!==null?wingCommand:(isFlying?0:Math.max(.08,Math.min(1,profile.fold-wingLifeAmplitude*wingLife)));
 const speed=dt/(wingCommand!==null ? .48 : (isFlying ? .38 : 1.15));wingFoldProgress+=Math.max(-speed,Math.min(speed,targetFold-wingFoldProgress));
 // Il comando non va applicato qui: i gesti lo sovrascriverebbero.
 switch(mode){
 case 'Mimi_No':mouth(.95);rot(39,1,.14*wave(1.5));rot(5,1,.24*wave(1.5));break;
 case 'Mimi_Yes':mouth(.95);nod(.25*wave(1.1));break;
 case 'Mimi_Talk':talk(mimoSpeaking||performance.now()<demoTalkingUntil?(.26+.54*Math.pow(Math.abs(wave(4.2)),.75)):.96);nod(.035*wave(.8));break;
 case 'Mimi_Greet':mouth(.95);if(wingCommand===null){rot(21,2,.24+.26*wave(1.4));rot(18,1,.16*wave(1.4));}break;
 case 'Mimi_Flap':mouth(.95);flap(.33*wave(1.5));tail(.07);break;
 case 'Mimi_Walk':mouth(.95);step(.28*wave(1.1));nod(.04*wave(2.2));flap(.035*wave(1.1));break;
 case 'Mimi_Tail':mouth(.95);tail(.3);break;
 case 'Mimi_Ears':mouth(.95);ears(.34*wave(1.8));nod(.025*wave(.6));break;
 case 'Mimi_Eat':{const chew=(1+wave(2.65))*.5;mouth(.21+.70*chew,.18+.24*chew);nod(.075*wave(1.3));rot(44,0,.055*wave(.9));rot(49,0,-.055*wave(.9));tail(.09);break;}
 case 'Mimi_Celebrate':mouth(.95);flap(.42*wave(2.2));nod(.12*wave(1.2));tail(.18);break;
 case 'Mimi_Think':mouth(.95);nod(-.10+.06*wave(.4));if(wingCommand===null)rot(21,2,.08);break;
 default:{
   const slow=lifeSeconds,slowW=Math.sin(slow*.79),fastW=Math.sin(slow*3.1);
   const tired=['stanco','triste','riposo','assonnato','rilassato'].includes(mood);
   const energy=['entusiasta','stressato','arrabbiato'].includes(mood)?1.40: tired? .56 : ['felice','coccolato'].includes(mood)?1.20:1;
   // Sempre vivi: oscillazione del collo, piccoli passi, codina e ali.
   nod((tired?-.08:0)+.024*energy*Math.sin(slow*.92)+.011*Math.sin(slow*1.71));
   rot(39,1,.027*energy*Math.sin(slow*.61));rot(5,1,.017*energy*Math.sin(slow*.61+.25));
   step(.027*energy*Math.sin(slow*1.08));
   flap(.020*energy*Math.sin(slow*.83));
   tail(.040*energy);
   // La posa emotiva non e' una fotografia: ogni stato ha una propria coreografia.
   switch(mood){
    case 'felice':nod(.090*Math.sin(slow*2.5));flap(.10*Math.sin(slow*2));tail(.20);mouth(.88+.08*Math.sin(slow*2.7));break;
    case 'entusiasta':nod(.15*Math.sin(slow*3.2));step(.17*Math.sin(slow*3.9));flap(.18*Math.sin(slow*3));tail(.30);mouth(.62+.24*(1+fastW)*.5);break;
    case 'triste':nod(-.17+.025*slowW);rot(5,2,.10*Math.sin(slow*.5));tail(.012);mouth(.99);break;
    case 'affamato':nod(.08*Math.sin(slow*1.9));rot(39,1,.11*Math.sin(slow*1.3));mouth(.62+.24*Math.sin(slow*2.4)**2);step(.055*Math.sin(slow*1.7));break;
    case 'sazio':nod(.04*Math.sin(slow*.9));tail(.07);mouth(.98);break;
    case 'stressato':rot(39,1,.23*Math.sin(slow*3.7));rot(5,1,.13*Math.sin(slow*3.7+.4));step(.13*Math.sin(slow*3.4));tail(.19);mouth(.86);break;
    case 'rilassato':nod(-.09+.045*Math.sin(slow*.48));rot(5,2,.08*Math.sin(slow*.53));tail(.024);mouth(.99);break;
    case 'assonnato':nod(-.20+.045*Math.sin(slow*.59));rot(5,2,.065*Math.sin(slow*.35));mouth(.99);break;
    case 'curioso':rot(5,2,.21*Math.sin(slow*.82));rot(39,1,.14*Math.sin(slow*.67));nod(.06*Math.sin(slow*1.15));mouth(.90);break;
    case 'arrabbiato':rot(39,1,.20*Math.sin(slow*2.25));rot(5,1,.18*Math.sin(slow*2.25));step(.10*Math.sin(slow*2.8));tail(.23);mouth(.94);break;
    case 'coccolato':rot(5,2,.14*Math.sin(slow*.88));nod(.055*Math.sin(slow*1.3));tail(.16);flap(.045*Math.sin(slow*1.1));mouth(.91);break;
    case 'sporco':rot(5,2,.12*Math.sin(slow*2));step(.10*Math.sin(slow*2.2));flap(.055*Math.sin(slow*2.6));mouth(.97);break;
    case 'stanco':case 'riposo':nod(-.13+.03*Math.sin(slow*.54));tail(.012);mouth(.98);break;
    default:{const beakPulse=Math.max(0,Math.sin(slow*.47)-.92)/.08;mouth(.97-.08*Math.min(1,beakPulse));}
   }
   break;
 }
 }
 // Orecchie vive e indipendenti: ascolto, emozione, piccoli movimenti spontanei.
 const earEnergy=['curioso','entusiasta','stressato'].includes(mood)?1.65:
   ['assonnato','stanco','riposo'].includes(mood)?.42:1;
 if(mode!=='Mimi_Ears')ears(.055*earEnergy*Math.sin(lifeSeconds*1.33)+.026*Math.sin(lifeSeconds*.69+.6));
 // Anche durante i gesti speciali Mìmo non diventa mai una posa congelata.
 // Ogni gesto mantiene micro-movimenti autonomi sulle articolazioni che non sta usando in modo marcato.
 if(mode!=='Mimi_Idle'){
   const liveEnergy=['stanco','triste','riposo','assonnato'].includes(mood)?.55:['felice','entusiasta'].includes(mood)?1.35:1;
   rot(39,1,.008*liveEnergy*Math.sin(lifeSeconds*.9));
   if(!['Mimi_Walk','Mimi_Eat'].includes(mode))step(.007*liveEnergy*Math.sin(lifeSeconds*.8));
   if(!['Mimi_Flap','Mimi_Celebrate','Mimi_Greet'].includes(mode))flap(.008*liveEnergy*Math.sin(lifeSeconds*.73));
   if(!['Mimi_Tail','Mimi_Celebrate','Mimi_Flap','Mimi_Eat'].includes(mode))tail(.020*liveEnergy);
 }
 // 2.332: respiro continuo del pancino. Le ossa 55 e 56 sono nella
 // catena del tronco (56 -> 55 -> 54), percio' la deformazione e' minima
 // e applicata alla scala locale, non a una traslazione che sposterebbe i piedi.
 // Fase assoluta: il respiro non riparte quando cambia animazione.
 const breathPhase=performance.now()*Math.PI*2/3600;
 const inhale=(1+Math.sin(breathPhase-Math.PI/2))*.5; // 0 espirato, 1 inspirato
 const belly=(inhale-.5)*(performance.now()<breathingDemoUntil?3.0:1);
 // Espansione simmetrica sul piano orizzontale del busto.
 for(const [legacyBone,amount] of [[55,.018],[56,.012]]){
   const bone=rigNode(legacyBone);
   if(!poses[bone])continue;
   poses[bone].scale[0]*=1+amount*belly;
   poses[bone].scale[2]*=1+amount*belly;
 }
 // Torace, spalle e testa accompagnano il gonfiarsi del pancino.
 rot(38,0,.025*Math.sin(breathPhase));
 rot(21,0,.018*Math.sin(breathPhase));
 rot(37,0,-.018*Math.sin(breathPhase));
 rot(5,0,-.013*Math.sin(breathPhase-.25));
 // Ultima operazione sulle ossa delle ali: stessa cinematica della 2.340.
 // Tutte le animazioni di base sono gia' state applicate; questo ripiegamento
 // ha la priorita' e non viene annullato da salute, saluto, respiro o volo.
 wingFold(wingFoldProgress);

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
let parents;function prepare(){nodes=data.nodes;skin=data.skins[0];if(nodes.length!==54||skin.joints.length!==52)throw Error('Ossatura Mìmo inattesa: '+skin.joints.length+' ossa');parents=nodes.map(()=>-1);nodes.forEach((n,i)=>(n.children||[]).forEach(j=>parents[j]=i));ibm=Array.from(accessor(skin.inverseBindMatrices));anim=data.animations||[];const prim=data.meshes[0].primitives[0];mesh=prim;gl.useProgram(program);basePositions=accessor(prim.attributes.POSITION);baseNormals=accessor(prim.attributes.NORMAL);jointData=accessor(prim.attributes.JOINTS_0);weightData=accessor(prim.attributes.WEIGHTS_0);animatedPositions=new Float32Array(basePositions.length);animatedNormals=new Float32Array(baseNormals.length);prepareBeakMorph();prepareBellyMorph();
for(const [key,name,size] of [['POSITION','p',3],['NORMAL','n',3],['TEXCOORD_0','uv',2]]){const loc=gl.getAttribLocation(program,name);if(loc<0)continue;const values=key==='POSITION'?animatedPositions:key==='NORMAL'?animatedNormals:accessor(prim.attributes[key]);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,values,key==='TEXCOORD_0'?gl.STATIC_DRAW:gl.DYNAMIC_DRAW);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,size,gl.FLOAT,false,0,0);if(key==='POSITION')posBuffer=buffer;if(key==='NORMAL')normBuffer=buffer;}
const mouthLoc=gl.getAttribLocation(program,'mouthMask');if(mouthLoc>=0){const mouthBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,mouthBuffer);gl.bufferData(gl.ARRAY_BUFFER,beakRegion,gl.STATIC_DRAW);gl.enableVertexAttribArray(mouthLoc);gl.vertexAttribPointer(mouthLoc,1,gl.FLOAT,false,0,0)}
const idx=accessor(prim.indices);mesh.count=idx.length;mesh.indexType=idx instanceof Uint32Array?gl.UNSIGNED_INT:idx instanceof Uint8Array?gl.UNSIGNED_BYTE:gl.UNSIGNED_SHORT;// WebGL 2 supporta nativamente gli indici UNSIGNED_INT. L'estensione OES_element_index_uint
// va richiesta SOLO con WebGL 1. Nel vecchio controllo la sua assenza su WebGL 2
// impediva il caricamento dei 109.273 vertici, mostrando solo un riquadro beige.
const hasWebGL2=(typeof WebGL2RenderingContext!=='undefined')&&(gl instanceof WebGL2RenderingContext);
if(mesh.indexType===gl.UNSIGNED_INT&&!hasWebGL2&&!gl.getExtension('OES_element_index_uint'))throw Error('Indici 32-bit non supportati su WebGL 1');const b=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,b);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,idx,gl.STATIC_DRAW);
const imageIndex=data.textures[data.materials[prim.material].pbrMetallicRoughness.baseColorTexture.index].source,
 img=data.images[imageIndex],view=data.bufferViews[img.bufferView],
 blob=new Blob([bin.slice(view.byteOffset||0,(view.byteOffset||0)+view.byteLength)],{type:img.mimeType}),url=URL.createObjectURL(blob);
texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([225,190,145,255]));
const im=new Image();im.onload=()=>{
 try{texture=makeTextureFromImage(im);textureReady=true;status.textContent=mimoT('loading');}
 catch(e){error('Texture 3D: '+e.message)}
 finally{URL.revokeObjectURL(url)}
};
im.onerror=()=>{URL.revokeObjectURL(url);error('Texture originale del GLB non caricata')};im.src=url;
const positions=accessor(prim.attributes.POSITION);let min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(let i=0;i<positions.length;i+=3)for(let k=0;k<3;k++){min[k]=Math.min(min[k],positions[i+k]);max[k]=Math.max(max[k],positions[i+k])}mesh.center=min.map((v,i)=>(v+max[i])/2);mesh.extent=Math.max(...max.map((v,i)=>v-min[i]));status.textContent=mimoT('loading');requestAnimationFrame(frame)}
function cpuSkin(matrices){const count=basePositions.length/3;for(let v=0;v<count;v++){const o=v*3,j=v*4,x=basePositions[o]+bodyShapeCurrent*bellyMorphX[v],y=basePositions[o+1]+mouthClosureNow*beakMorphY[v],z=basePositions[o+2]+mouthClosureNow*beakMorphZ[v]+bodyShapeCurrent*bellyMorphZ[v],nx=baseNormals[o],ny=baseNormals[o+1],nz=baseNormals[o+2];let px=0,py=0,pz=0,rx=0,ry=0,rz=0,total=0;for(let k=0;k<4;k++){const w=weightData[j+k];if(w<=0)continue;const off=jointData[j+k]*16;if(off<0||off+15>=matrices.length)continue;total+=w;px+=w*(matrices[off]*x+matrices[off+4]*y+matrices[off+8]*z+matrices[off+12]);py+=w*(matrices[off+1]*x+matrices[off+5]*y+matrices[off+9]*z+matrices[off+13]);pz+=w*(matrices[off+2]*x+matrices[off+6]*y+matrices[off+10]*z+matrices[off+14]);rx+=w*(matrices[off]*nx+matrices[off+4]*ny+matrices[off+8]*nz);ry+=w*(matrices[off+1]*nx+matrices[off+5]*ny+matrices[off+9]*nz);rz+=w*(matrices[off+2]*nx+matrices[off+6]*ny+matrices[off+10]*nz)}animatedPositions[o]=total?px/total:x;animatedPositions[o+1]=total?py/total:y;animatedPositions[o+2]=total?pz/total:z;const len=Math.hypot(rx,ry,rz)||1;animatedNormals[o]=rx/len;animatedNormals[o+1]=ry/len;animatedNormals[o+2]=rz/len}gl.bindBuffer(gl.ARRAY_BUFFER,posBuffer);gl.bufferSubData(gl.ARRAY_BUFFER,0,animatedPositions);gl.bindBuffer(gl.ARRAY_BUFFER,normBuffer);gl.bufferSubData(gl.ARRAY_BUFFER,0,animatedNormals)}
function frame(now){requestAnimationFrame(frame);try{if(!toggle.checked||document.hidden)return;
// Interpolazione continua (nessun salto istantaneo e nessuna modifica al DOM).
const bodyDt=bodyShapeFrameAt?Math.min(.1,(now-bodyShapeFrameAt)/1000):0;
bodyShapeFrameAt=now;
bodyShapeCurrent+=(bodyShapeTarget-bodyShapeCurrent)*(1-Math.exp(-3.3*bodyDt));
if(Math.abs(bodyShapeTarget-bodyShapeCurrent)<.0007)bodyShapeCurrent=bodyShapeTarget;
if(now>until)play('Mimi_Idle');if(now>nextBlink){blinkUntil=now+260;nextBlink=now+3600+Math.random()*2500}const wantedExpression=chooseExpression(now);if(wantedExpression!==host.dataset.expression){host.dataset.expression=wantedExpression}const t=(now-started)/1000;const width=Math.max(1,host.clientWidth),height=Math.max(1,host.clientHeight),dpr=MIMO_SIMULATOR?1:Math.min(1.5,devicePixelRatio||1);if(canvas.width!==Math.round(width*dpr)||canvas.height!==Math.round(height*dpr)){canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr)}gl.viewport(0,0,canvas.width,canvas.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);gl.useProgram(program);const ratio=canvas.width/canvas.height,f=1/Math.tan(.45),proj=[f/ratio,0,0,0,0,f,0,0,0,0,-1.002,-1,0,0,-.2002,0];const s=3.05/mesh.extent;const yawDt=mimoLastYawFrame?Math.min(.06,(now-mimoLastYawFrame)/1000):0;mimoLastYawFrame=now;const yawDelta=mimoTargetYaw-mimoCurrentYaw;mimoCurrentYaw+=yawDelta*Math.min(1,yawDt*6);if(Math.abs(yawDelta)<.001)mimoCurrentYaw=mimoTargetYaw;// Salto morbido con giravolta: coordinate della stanza invariate.
const victoryProgress=(mode==='Mimi_Celebrate'&&now<victoryEnd&&victoryEnd>victoryStart)
 ? Math.max(0,Math.min(1,(now-victoryStart)/(victoryEnd-victoryStart))):-1;
const spinProgress=victoryProgress<0?0:smooth01((victoryProgress-.10)/.77);
mimoRenderYaw=mimoCurrentYaw+Math.PI*2*spinProgress;
const lift=victoryProgress<0?0:.40*Math.sin(Math.PI*Math.min(1,victoryProgress/.82));
const cy=Math.cos(mimoRenderYaw),sy=Math.sin(mimoRenderYaw);const view=[s*cy,0,-s*sy,0,0,s,0,0,s*sy,0,s*cy,0,-s*(cy*mesh.center[0]+sy*mesh.center[2]),-mesh.center[1]*s+lift,s*(sy*mesh.center[0]-cy*mesh.center[2])-4.7,1];gl.uniformMatrix4fv(gl.getUniformLocation(program,'proj'),false,new Float32Array(proj));gl.uniformMatrix4fv(gl.getUniformLocation(program,'view'),false,new Float32Array(view));if(now-lastSkin>(MIMO_SIMULATOR?145:83)){cpuSkin(matNodes(t));lastSkin=now;}gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,texture);gl.uniform1i(gl.getUniformLocation(program,'diffuse'),0);gl.uniform1f(gl.getUniformLocation(program,'mouthClosure'),mouthClosureNow);gl.drawElements(gl.TRIANGLES,mesh.count,mesh.indexType,0);drawEyelids(now,wantedExpression,view,proj,width,height,dpr);drawMimoTongue(now,view,proj,width,height);if(!mesh.renderChecked && textureReady){mesh.renderChecked=true;const e=gl.getError();status.textContent=e===gl.NO_ERROR?mimoT('ready'):'Mìmo 3D: errore GPU '+e;if(e===gl.NO_ERROR)mimoReport('ready','Mìmo 3D pronto');else error('Errore GPU WebGL: '+e)}}catch(e){if(!mesh.frameError){mesh.frameError=true;error('Rendering: '+e.message)}}}
// File incorporato nell'app; per la versione web deve trovarsi nello stesso percorso
// sul server (GitHub Pages compreso), non solo nella scheda del repository GitHub.
const MIMO_GLB_URL='Assets/mimo-orecchie-365.glb';
// I WKURLSchemeHandler servono musicrainbow:// senza uno stato HTTP reale:
// in WebKit una RISPOSTA RIUSCITA puo' avere status=0 / ok=false.
// Verifichiamo sempre la firma e la lunghezza dei dati, non solo lo stato.
function isMimoGLBBuffer(candidate){
  if(!(candidate instanceof ArrayBuffer)||candidate.byteLength<20)return false;
  const header=new DataView(candidate);
  return header.getUint32(0,true)===0x46546c67 &&
         header.getUint32(4,true)===2 &&
         header.getUint32(8,true)===candidate.byteLength;
}
async function readMimoGLBByXHR(url){
  return await new Promise((resolve,reject)=>{
    const request=new XMLHttpRequest();
    request.open('GET',url,true);
    request.responseType='arraybuffer';
    request.timeout=45000;
    request.onload=()=>{
      const bytes=request.response;
      if((request.status===0||request.status===200)&&isMimoGLBBuffer(bytes))resolve(bytes);
      else reject(new Error('XHR '+request.status+': dati GLB non validi ('+(bytes?.byteLength||0)+' byte)'));
    };
    request.onerror=()=>reject(new Error('XHR: impossibile leggere il file'));
    request.ontimeout=()=>reject(new Error('Timeout XHR'));
    request.send();
  });
}
// Ultimo recupero, SOLO nella app nativa: i dati GLB vengono letti dal bundle
// in blocchi tramite WKScriptMessageHandlerWithReply, senza rete né data URL giganti.
async function readMimoGLBByNativeBridge(){
  const handler=window.webkit?.messageHandlers?.musicRainbowMimoAsset;
  if(!handler||typeof handler.postMessage!=='function')throw new Error('Bridge 3D nativo non disponibile');
  const parts=[];
  let offset=0,total=0;
  do{
    const chunk=await handler.postMessage({asset:'mimo-orecchie-365.glb',offset,length:196608});
    if(!chunk||!Number.isSafeInteger(chunk.total)||chunk.total<20||chunk.total>128*1048576||
       !Number.isSafeInteger(chunk.offset)||chunk.offset!==offset||typeof chunk.base64!=='string'){
      throw new Error('Blocco GLB nativo non valido');
    }
    if(total&&chunk.total!==total)throw new Error('Dimensione GLB cambiata durante la lettura');
    total=chunk.total;
    const raw=atob(chunk.base64),bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
    if(bytes.byteLength===0||offset+bytes.byteLength>total)throw new Error('Blocco GLB nativo vuoto o oltre il limite');
    parts.push(bytes);
    offset+=bytes.byteLength;
  }while(offset<total);
  const data=new Uint8Array(total);
  let position=0;
  for(const part of parts){data.set(part,position);position+=part.byteLength;}
  return data.buffer;
}
async function loadMimoGLB(){
  mimoReport('loading','Lettura del modello 3D…');
  const url=new URL(MIMO_GLB_URL,document.baseURI);
  const nativeScheme=url.protocol==='musicrainbow:';
  const failures=[];
  let buffer=null;
  try{
    const response=await fetch(url.href,{cache:'no-store'});
    if(!response.ok && !(nativeScheme&&response.status===0)){
      throw new Error('HTTP '+response.status);
    }
    const bytes=await response.arrayBuffer();
    if(!isMimoGLBBuffer(bytes))throw new Error('Risposta priva di GLB valido ('+bytes.byteLength+' byte, HTTP '+response.status+')');
    buffer=bytes;
  }catch(err){failures.push('fetch: '+(err?.message||err));}
  if(!buffer&&nativeScheme){
    mimoReport('loading','Verifica caricamento alternativo di Mìmo…');
    try{buffer=await readMimoGLBByXHR(url.href);}
    catch(err){failures.push('XHR: '+(err?.message||err));}
  }
  if(!buffer&&nativeScheme){
    mimoReport('loading','Lettura diretta del modello 3D dall’app…');
    try{buffer=await readMimoGLBByNativeBridge();}
    catch(err){failures.push('nativo: '+(err?.message||err));}
  }
  if(!buffer)throw new Error('Impossibile leggere Mìmo 3D: '+failures.join(' · '));
  mimoReport('loading','Preparazione del modello 3D ('+Math.round(buffer.byteLength/1048576)+' MB)…');
  if(buffer.byteLength<20)throw new Error('File modello vuoto o incompleto ('+buffer.byteLength+' byte).');
  const dv=new DataView(buffer);
  if(dv.getUint32(0,true)!==0x46546c67)throw new Error('Risposta non GLB (probabile pagina HTML, LFS pointer o percorso errato): '+MIMO_GLB_URL);
  const length=dv.getUint32(8,true);
  if(length!==buffer.byteLength)throw new Error('GLB troncato: '+buffer.byteLength+'/'+length+' byte.');
  let off=12;
  const jsonLength=dv.getUint32(off,true);
  if(jsonLength<2||jsonLength+20>buffer.byteLength)throw new Error('GLB JSON non valido.');
  if(dv.getUint32(off+4,true)!==0x4e4f534a)throw new Error('Chunk JSON mancante.');
  off+=8;
  data=JSON.parse(new TextDecoder().decode(new Uint8Array(buffer,off,jsonLength)));
  off+=jsonLength;
  if(off+8>buffer.byteLength)throw new Error('Chunk BIN mancante.');
  const binLength=dv.getUint32(off,true), binType=dv.getUint32(off+4,true);
  if(binType!==0x004e4942||off+8+binLength>buffer.byteLength)throw new Error('Chunk BIN incompleto.');
  bin=buffer.slice(off+8,off+8+binLength);
  prepare();
}
loadMimoGLB().catch(e=>error(e.message));
let last=0;for(const id of ['statusBarLearn','learnHandsStatus','statusBarHands']){const el=document.getElementById(id);if(!el)continue;new MutationObserver(()=>{const now=Date.now();if(now-last<1400)return;const t=(el.textContent||'').toLowerCase();if(/brav|corrett|compl|perfect|success|ottim|riuscit/.test(t)){last=now;play('Mimi_Celebrate')}else if(/erro|sbagli|wrong|retry|riprova/.test(t)){last=now;play('Mimi_Think')}}).observe(el,{subtree:true,childList:true,characterData:true})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
