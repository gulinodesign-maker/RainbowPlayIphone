/* Music Rainbow 2.448 — Mìmo: fumetti per le esigenze e aiuto didattico solo su richiesta.
   Nessun evento degli esercizi viene intercettato o modificato. */
(()=>{'use strict';
 const pageIds=['learnNotesPage','learnTempoPage','learnHandsPage',...Array.from({length:8},(_,i)=>'level'+(i+1)+'Page')];
 const pages=pageIds.map(id=>document.getElementById(id)).filter(Boolean);
 const room=document.getElementById('trophyPage');
 const tutorialPrefix='musicRainbowMimoFirstLesson435:';
 const NEEDS_COOLDOWN='musicRainbowMimoNeedBubble435';
 // 2.447: preferenza SOLO per la stanza; gli aiuti didattici restano indipendenti.
 const ROOM_BUBBLES_KEY='musicRainbowMimoRoomBubbles446';
 let roomBubblesEnabled=true;
 try{roomBubblesEnabled=localStorage.getItem(ROOM_BUBBLES_KEY)!=='off';}catch(_e){}
 const roomButtonText={
  it:['Mostra i fumetti di Mìmo','Nascondi i fumetti di Mìmo'],
  en:['Show Mìmo speech bubbles','Hide Mìmo speech bubbles'],
  es:['Mostrar bocadillos de Mìmo','Ocultar bocadillos de Mìmo'],
  fr:['Afficher les bulles de Mìmo','Masquer les bulles de Mìmo'],
  de:['Mìmos Sprechblasen zeigen','Mìmos Sprechblasen ausblenden'],
  pt:['Mostrar balões do Mìmo','Ocultar balões do Mìmo'],
  ru:['Показывать подсказки Мимо','Скрыть подсказки Мимо'],
  zh:['显示米莫的对话框','隐藏米莫的对话框'],
  ja:['ミモの吹き出しを表示','ミモの吹き出しを隠す']
 };
 const dict={
  it:{name:'Mìmo',intro:'Un consiglio per cominciare',help:'Il mio suggerimento',
   notesIntro:'Esploriamo le note! Guarda le linee e gli spazi del pentagramma, poi ascolta come suonano.',notesHelp:'Osserva la posizione della nota sul pentagramma. Puoi confrontare la chiave di violino e quella di basso.',
   tempoIntro:'Impariamo il tempo! Ascolta il battito e prova a seguirlo con regolarità.',tempoHelp:'Conta i battiti con calma. Prima ascolta, poi ripeti il ritmo senza accelerare.',
   handsIntro:'Qui lavorano tutte e due le mani! Segui i simboli dello spartito e prova i due tamburi.',handsHelp:'Guarda il ritmo di ciascuna mano. Prova prima lentamente e ascolta la dimostrazione quando ti serve.',
   levelIntro:'Benvenuto al livello {n}! Osserva lo spartito, ascolta e prova a eseguire l’esercizio.',levelHelp:'Non avere fretta: guarda la nota o la figura sul pentagramma e prova a seguire il ritmo.',
   roomHello:'Ciao! Trascinami sul tappeto, nel letto o nella vasca. Ti farò sapere come sto!',
   hungry:'Ho fame! Mi accompagni sul tappeto e mi dai un frutto?',sleepy:'Sono stanco… mi porti sul letto?',dirty:'Mi serve un bel bagno! Mi porti nella vasca?',
   happy:'Che bello stare insieme! Se vuoi, puoi accarezzarmi.',food:'Eccoci sul tappeto! Trascina un frutto dal cestino fino alla mia testa.',
   bath:'Splash! Un bel bagno mi fa sentire pulito!',bed:'Che sonno… qui posso riposare tranquillo.',
   tokens:'Guarda i miei gettoni! Tocca il cesto se vuoi usarne uno per suonare il piano.',thanks:'Grazie! Che bella sorpresa!',close:'Chiudi il fumetto',ask:'Chiedi aiuto a Mìmo'},
  en:{name:'Mìmo',intro:'A tip to get started',help:'My hint',notesIntro:'Let’s explore notes! Look at the lines and spaces on the staff, then listen to them.',notesHelp:'Look at the note’s place on the staff. Compare the treble and bass clefs.',tempoIntro:'Let’s learn rhythm! Listen to the beat and try to follow it steadily.',tempoHelp:'Count the beats calmly. Listen first, then repeat without rushing.',handsIntro:'Both hands work together here! Follow the score and try the two drums.',handsHelp:'Look at each hand’s rhythm. Start slowly and play the demonstration when needed.',levelIntro:'Welcome to level {n}! Look at the score, listen and try the exercise.',levelHelp:'Take your time: watch the note or symbol on the staff and follow the rhythm.',roomHello:'Hello! Move me to the rug, bed or bath and I’ll tell you how I feel!',hungry:'I’m hungry! Can you take me to the rug and give me a fruit?',sleepy:'I’m tired… could you take me to bed?',dirty:'I need a bath! Can you bring me to the tub?',happy:'I love spending time with you! Give me a little pet!',food:'Here I am on the rug! Drag a fruit from the basket to my head.',bath:'Splash! A bath makes me feel clean!',bed:'So sleepy… I can rest here.',tokens:'Look at my tokens! Tap the tray to use one for free piano play.',thanks:'Thank you! What a lovely surprise!',close:'Close bubble',ask:'Ask Mìmo for help'},
  es:{name:'Mìmo',intro:'Un consejo para empezar',help:'Mi consejo',notesIntro:'¡Exploremos las notas! Mira las líneas y los espacios del pentagrama.',notesHelp:'Observa dónde está la nota en el pentagrama y compara las claves.',tempoIntro:'¡Aprendamos el ritmo! Escucha el pulso y síguelo.',tempoHelp:'Cuenta los pulsos con calma. Escucha primero y repite después.',handsIntro:'¡Vamos a usar las dos manos! Sigue la partitura y prueba los tambores.',handsHelp:'Observa el ritmo de cada mano y practica despacio.',levelIntro:'¡Bienvenido al nivel {n}! Mira la partitura y prueba el ejercicio.',levelHelp:'Sin prisa: mira la nota y sigue el ritmo.',roomHello:'¡Hola! Llévame a la alfombra, a la cama o a la bañera.',hungry:'¡Tengo hambre! ¿Me das una fruta en la alfombra?',sleepy:'Tengo sueño… ¿me llevas a la cama?',dirty:'¡Necesito un baño!',happy:'¡Me encanta estar contigo!',food:'¡Aquí puedo comer! Arrastra una fruta hasta mi cabeza.',bath:'¡Chapoteo! ¡Qué bien sienta el baño!',bed:'Aquí puedo descansar.',tokens:'¡Mira mis fichas! Toca el cofre para tocar el piano libremente.',thanks:'¡Gracias!',close:'Cerrar bocadillo',ask:'Pedir ayuda a Mìmo'},
  fr:{name:'Mìmo',intro:'Un conseil pour commencer',help:'Mon conseil',notesIntro:'Découvrons les notes ! Observe les lignes et espaces de la portée.',notesHelp:'Regarde où se trouve la note sur la portée et compare les clés.',tempoIntro:'Apprenons le rythme ! Écoute la pulsation et suis-la.',tempoHelp:'Compte les pulsations lentement. Écoute puis recommence.',handsIntro:'Les deux mains travaillent ensemble ! Suis la partition et essaie les tambours.',handsHelp:'Observe le rythme de chaque main et commence doucement.',levelIntro:'Bienvenue au niveau {n} ! Regarde la partition et essaie.',levelHelp:'Prends ton temps, regarde la note et suis le rythme.',roomHello:'Bonjour ! Pose-moi sur le tapis, dans le lit ou la baignoire.',hungry:'J’ai faim ! Donne-moi un fruit sur le tapis.',sleepy:'J’ai sommeil… emmène-moi au lit.',dirty:'J’ai besoin d’un bain !',happy:'J’aime être avec toi !',food:'Je peux manger ici ! Glisse un fruit vers ma tête.',bath:'Plouf ! Quel bon bain !',bed:'Je peux me reposer ici.',tokens:'Regarde mes jetons ! Touche le coffre pour jouer librement.',thanks:'Merci !',close:'Fermer la bulle',ask:'Demander de l’aide à Mìmo'},
  de:{name:'Mìmo',intro:'Ein Tipp zum Start',help:'Mein Tipp',notesIntro:'Entdecken wir die Noten! Sieh dir Linien und Zwischenräume an.',notesHelp:'Achte auf die Position der Note und vergleiche die Schlüssel.',tempoIntro:'Lernen wir den Rhythmus! Hör auf den Schlag und mach mit.',tempoHelp:'Zähle ruhig mit. Erst zuhören, dann wiederholen.',handsIntro:'Hier spielen beide Hände! Schau auf die Noten und probiere die Trommeln.',handsHelp:'Achte auf den Rhythmus jeder Hand und beginne langsam.',levelIntro:'Willkommen in Level {n}! Sieh dir die Noten an und probiere es.',levelHelp:'Lass dir Zeit und folge dem Rhythmus.',roomHello:'Hallo! Bring mich zum Teppich, Bett oder in die Wanne.',hungry:'Ich habe Hunger! Gib mir eine Frucht auf dem Teppich.',sleepy:'Ich bin müde… bring mich ins Bett.',dirty:'Ich brauche ein Bad!',happy:'Schön, dass du da bist!',food:'Hier kann ich essen! Zieh eine Frucht zu meinem Kopf.',bath:'Platsch! So macht Baden Spaß!',bed:'Hier kann ich mich ausruhen.',tokens:'Sieh meine Münzen! Tippe auf die Truhe zum freien Klavierspiel.',thanks:'Danke!',close:'Sprechblase schließen',ask:'Mìmo um Hilfe bitten'},
  pt:{name:'Mìmo',intro:'Uma dica para começar',help:'Minha dica',notesIntro:'Vamos explorar as notas! Observa as linhas e os espaços da pauta.',notesHelp:'Vê onde está a nota e compara as claves.',tempoIntro:'Vamos aprender o ritmo! Escuta a pulsação e acompanha-a.',tempoHelp:'Conta as pulsações devagar. Escuta e depois repete.',handsIntro:'As duas mãos trabalham juntas! Segue a partitura e usa os tambores.',handsHelp:'Observa o ritmo de cada mão e começa lentamente.',levelIntro:'Bem-vindo ao nível {n}! Observa a partitura e experimenta.',levelHelp:'Sem pressa: observa a nota e segue o ritmo.',roomHello:'Olá! Leva-me ao tapete, à cama ou à banheira.',hungry:'Tenho fome! Dá-me uma fruta no tapete.',sleepy:'Estou com sono… leva-me para a cama.',dirty:'Preciso de um banho!',happy:'Que bom estar contigo!',food:'Aqui posso comer! Arrasta uma fruta até à minha cabeça.',bath:'Splash! Que banho bom!',bed:'Aqui posso descansar.',tokens:'Vê as minhas fichas! Toca no baú para tocar piano livremente.',thanks:'Obrigado!',close:'Fechar balão',ask:'Pedir ajuda ao Mìmo'},
  ru:{name:'Мимо',intro:'Совет для начала',help:'Моя подсказка',notesIntro:'Изучаем ноты! Посмотри на линии и промежутки нотного стана.',notesHelp:'Посмотри, где стоит нота, и сравни ключи.',tempoIntro:'Учимся ритму! Слушай пульс и повторяй.',tempoHelp:'Считай доли спокойно: сначала слушай, потом повторяй.',handsIntro:'Здесь работают обе руки! Следи за нотами и играй на барабанах.',handsHelp:'Смотри на ритм каждой руки и начинай медленно.',levelIntro:'Добро пожаловать на уровень {n}! Посмотри на ноты и попробуй.',levelHelp:'Не спеши: смотри на ноты и следи за ритмом.',roomHello:'Привет! Отнеси меня на коврик, в кровать или в ванну.',hungry:'Я голоден! Дай мне фрукт на коврике.',sleepy:'Хочу спать… отнеси меня в кровать.',dirty:'Мне нужна ванна!',happy:'Как приятно быть с тобой!',food:'Здесь я могу поесть! Перетащи фрукт к моей голове.',bath:'Плюх! Как здорово купаться!',bed:'Здесь можно отдохнуть.',tokens:'Смотри, мои жетоны! Нажми на сундук, чтобы свободно играть.',thanks:'Спасибо!',close:'Закрыть облачко',ask:'Попросить Мимо помочь'},
  zh:{name:'米莫',intro:'开始前的小提示',help:'我的提示',notesIntro:'来认识音符吧！看看五线谱上的线和间。',notesHelp:'观察音符的位置，比较高音谱号和低音谱号。',tempoIntro:'来学节奏！先听拍子，再跟着打拍。',tempoHelp:'慢慢数拍，先听再模仿。',handsIntro:'两只手一起练习！看着乐谱，试试两个鼓。',handsHelp:'分别观察每只手的节奏，慢慢练。',levelIntro:'欢迎来到第{n}关！看乐谱、听一听，然后试试。',levelHelp:'别着急，看看音符，跟上节奏。',roomHello:'你好！把我拖到地毯、床或浴缸旁吧！',hungry:'我饿啦！能给我一个水果吗？',sleepy:'我困了……带我去床上吧。',dirty:'我想洗个澡！',happy:'和你在一起真开心！',food:'这里可以吃东西！把水果拖到我头边。',bath:'哗啦！洗澡真舒服！',bed:'我可以在这里休息。',tokens:'看我的代币！点宝箱就可以自由弹琴。',thanks:'谢谢！',close:'关闭气泡',ask:'向米莫求助'},
  ja:{name:'ミモ',intro:'はじめのヒント',help:'ぼくのヒント',notesIntro:'音符を見つけよう！五線譜の線と間を見てね。',notesHelp:'音符の位置を見て、ト音記号とヘ音記号を比べてね。',tempoIntro:'リズムを学ぼう！拍子を聞いて合わせてみよう。',tempoHelp:'ゆっくり数えて、まず聞いてからまねしてね。',handsIntro:'両手で挑戦！楽譜を見て、二つの太鼓をたたこう。',handsHelp:'左右のリズムをよく見て、ゆっくり始めよう。',levelIntro:'レベル{n}へようこそ！楽譜を見て挑戦しよう。',levelHelp:'あわてず音符を見て、リズムに合わせよう。',roomHello:'こんにちは！ぼくをじゅうたん、ベッド、おふろへ連れていってね。',hungry:'おなかがすいた！くだものをちょうだい。',sleepy:'ねむいな……ベッドへ連れていって。',dirty:'おふろに入りたいな！',happy:'いっしょにいられてうれしい！',food:'ここで食べられるよ！くだものを頭まで運んでね。',bath:'ちゃぷちゃぷ！気持ちいい！',bed:'ここでおやすみできるよ。',tokens:'コインを見て！宝箱を押すと自由にピアノを弾けるよ。',thanks:'ありがとう！',close:'ふきだしを閉じる',ask:'ミモにヒントを聞く'}
 };
 const currentLanguage=()=>{
  const lang=(typeof document!=='undefined'?document.documentElement.lang:'it').slice(0,2);
  return dict[lang]||dict.it;
 };
 let bubble,heading,copy,close,shownPage=null,currentPage=null,expireTimer=0,roomWasOpen=false,checking=false,dragStart=null,draggedUntil=0;
 const tutorialSeen=id=>{try{return localStorage.getItem(tutorialPrefix+id)==='1';}catch(_){return false;}};
 const saveSeen=id=>{try{localStorage.setItem(tutorialPrefix+id,'1');}catch(_){}};
 function roomActive(){return !!room&&room.getClientRects().length>0&&getComputedStyle(room).display!=='none';}
 function activeLesson(){return pages.find(p=>p.getClientRects().length>0&&getComputedStyle(p).display!=='none')||null;}
 function canShow(){return !document.hidden&&!document.body.classList.contains('mr357-lab-open')&&document.getElementById('mimoEnabled')?.checked!==false&&(!roomActive()||roomBubblesEnabled);}
 function positionBubble(){
  if(!bubble||bubble.hidden)return;
  const page=activeLesson();
  const host=document.getElementById('mimoBuddy');
  const useHost=host&&host.getClientRects().length&&!document.body.classList.contains('mr410-mimo-hidden')&&
   !document.body.classList.contains('mr410-mimo-no-space')&&getComputedStyle(host).visibility!=='hidden'&&getComputedStyle(host).display!=='none';
  const rect=useHost?host.getBoundingClientRect():null;
  const panel=(page||room)?.querySelector('.top-panel')?.getBoundingClientRect();
  const minY=Math.max(8,(panel?.bottom||0)+8);
  const width=bubble.offsetWidth||270,height=bubble.offsetHeight||100;
  const viewportW=document.documentElement.clientWidth||innerWidth,viewportH=document.documentElement.clientHeight||innerHeight;
  let left,top,side='none';
  if(rect){
   const spaceLeft=rect.left-12,spaceRight=viewportW-rect.right-12;
   side=(spaceLeft>=width+12&&spaceLeft>spaceRight*.70)?'left':(spaceRight>=width+12?'right':(spaceLeft>spaceRight?'left':'right'));
   left=side==='left'?rect.left-width-13:rect.right+13;
   top=rect.top+Math.min(14,rect.height*.18);
  }else{
   // Se Mìmo è nascosto, il fumetto parte dalla top bar, non dallo spartito.
   left=viewportW-width-12;
   top=minY;
  }
  left=Math.max(10,Math.min(viewportW-width-10,left));
  top=Math.max(minY,Math.min(viewportH-height-12,top));
  if(top+height>viewportH-6)top=Math.max(8,viewportH-height-6);
  bubble.style.left=Math.round(left)+'px';bubble.style.top=Math.round(top)+'px';bubble.dataset.side=side;
 }
 function dismiss(){clearTimeout(expireTimer);expireTimer=0;if(bubble)bubble.hidden=true;}
 function updateRoomBubbleButton(){
  const button=document.getElementById('mr447RoomBubblesToggle');if(!button)return;
  const lang=document.documentElement.lang.slice(0,2)||'it';
  const labels=roomButtonText[lang]||roomButtonText.it;
  const action=labels[roomBubblesEnabled?1:0];
  button.setAttribute('aria-label',action);button.title=action;
  button.setAttribute('aria-pressed',String(roomBubblesEnabled));
  button.classList.toggle('mr447RoomBubblesOff',!roomBubblesEnabled);
 }
 function setRoomBubblesEnabled(value){
  roomBubblesEnabled=!!value;
  try{localStorage.setItem(ROOM_BUBBLES_KEY,roomBubblesEnabled?'on':'off');}catch(_e){}
  if(!roomBubblesEnabled&&roomActive())dismiss();
  updateRoomBubbleButton();
 }
 function bindRoomBubbleButton(){
  const button=document.getElementById('mr447RoomBubblesToggle');if(!button)return;
  if(button.dataset.mr447Wired==='1')return;
  button.dataset.mr447Wired='1';updateRoomBubbleButton();
  button.addEventListener('click',e=>{
   e.stopPropagation();
   window.MimoHaptics?.play?.('touch');
   setRoomBubblesEnabled(!roomBubblesEnabled);
  });
 }
 function say(text,label,duration=7000){
  if(!canShow()||(!roomActive()&&!activeLesson()))return false;
  if(!bubble)initBubble();
  copy.textContent=text;heading.textContent='🦉 '+(label||currentLanguage().name);
  close.setAttribute('aria-label',currentLanguage().close);
  bubble.hidden=false;positionBubble();
  clearTimeout(expireTimer);
  if(duration>0)expireTimer=setTimeout(dismiss,duration);
  return true;
 }
 function initBubble(){
  bubble=document.createElement('div');bubble.id='mr435MimoBubble';bubble.hidden=true;
  bubble.setAttribute('role','status');bubble.setAttribute('aria-live','polite');bubble.setAttribute('aria-atomic','true');
  heading=document.createElement('span');heading.className='mr435BubbleHeading';
  copy=document.createElement('span');copy.className='mr435BubbleText';
  close=document.createElement('button');close.type='button';close.className='mr435BubbleClose';close.textContent='×';
  close.addEventListener('click',e=>{e.stopPropagation();dismiss()});
  bubble.append(heading,copy,close);document.body.appendChild(bubble);
 }
 function lessonMessage(page,kind){
  const t=currentLanguage();
  const name=page.id;
  let suffix='level'+(kind==='intro'?'Intro':'Help');
  if(name==='learnNotesPage')suffix='notes'+(kind==='intro'?'Intro':'Help');
  else if(name==='learnTempoPage')suffix='tempo'+(kind==='intro'?'Intro':'Help');
  else if(name==='learnHandsPage')suffix='hands'+(kind==='intro'?'Intro':'Help');
  const level=name.match(/^level(\d)Page$/);
  return (t[suffix]||dict.it[suffix]).replaceAll('{n}',level?.[1]||'1');
 }
 function showLesson(page,kind){
  return say(lessonMessage(page,kind),currentLanguage()[kind==='intro'?'intro':'help'],kind==='intro'?8500:9500);
 }
 function roomMessage(key){return say(currentLanguage()[key]||currentLanguage().happy,currentLanguage().name,key==='roomHello'?6500:5500);}
 function likelyNeed(){
  const state=window.MimoCare?.get?.();if(!state)return 'roomHello';
  const states=[['hungry',Number(state.food)],['sleepy',Number(state.sleep)],['dirty',Number(state.clean)]];
  states.sort((a,b)=>a[1]-b[1]);
  return states[0][1]<=2?states[0][0]:'roomHello';
 }
 function mapRoomAction(text){
  if(/frutt[oi]|tappeto|cestin[o] (?:è )?vuoto/i.test(text))return 'food';
  if(/lett[o]|nido|riposa/i.test(text))return 'bed';
  if(/vasca|lavarsi|lava dentro/i.test(text))return 'bath';
  if(/getton|piano liberamente/i.test(text))return 'tokens';
  if(/conquistat[oi]|brano completato/i.test(text))return 'thanks';
  return '';
 }
 function offerHelpButton(page){
  if(page.querySelector('.mr435HelpButton'))return;
  const row=page.querySelector('.top-row .top-left-controls');if(!row)return;
  const button=document.createElement('button');button.type='button';button.className='mr435HelpButton';
  button.textContent='💬';button.setAttribute('aria-label',currentLanguage().ask);button.title=currentLanguage().ask;
  const toggle=row.querySelector('.mr409-mimo-toggle');
  if(toggle)toggle.insertAdjacentElement('afterend',button);else row.appendChild(button);
  button.addEventListener('click',e=>{e.stopPropagation();const p=activeLesson();if(p===page)showLesson(page,'help');});
 }
 function synchronize(){
  if(checking)return;checking=true;
  try{
   const lesson=activeLesson(),inRoom=roomActive();
   if(lesson!==currentPage){
    currentPage=lesson;dismiss();
    if(lesson&&!tutorialSeen(lesson.id)&&canShow()){
     const captured=lesson;
     setTimeout(()=>{
      if(activeLesson()!==captured||!canShow()||tutorialSeen(captured.id))return;
      if(showLesson(captured,'intro'))saveSeen(captured.id);
     },430);
    }
   }
   if(inRoom&&!roomWasOpen&&canShow()){
    dismiss();
    const state=window.MimoCare?.get?.();
    if(state){
     const need=likelyNeed();
     if(need!=='roomHello'){
      let last=0;try{last=Number(localStorage.getItem(NEEDS_COOLDOWN))||0;}catch(_){ }
      if(Date.now()-last>20*60000){
       setTimeout(()=>{if(roomActive()&&canShow())roomMessage(need);},500);
       try{localStorage.setItem(NEEDS_COOLDOWN,String(Date.now()));}catch(_){ }
      }
     }
    }
   }
   if(!inRoom&&roomWasOpen)dismiss();
   roomWasOpen=inRoom;
   if(bubble&&!bubble.hidden)positionBubble();
  }finally{checking=false;}
 }
 function onMimoClick(e){
  if(!e.target.closest?.('#mimoBuddy'))return;
  if(Date.now()<draggedUntil)return;
  if(document.body.classList.contains('mr357-lab-open'))return;
  const lesson=activeLesson();
  if(lesson){showLesson(lesson,'help');return;}
  if(roomActive())roomMessage(likelyNeed());
 }
 function init(){
  initBubble();bindRoomBubbleButton();pages.forEach(offerHelpButton);
  document.addEventListener('click',onMimoClick,true);
  document.addEventListener('pointerdown',e=>{dragStart=e.target.closest?.('#mimoBuddy')?{id:e.pointerId,x:e.clientX,y:e.clientY}:null;},true);
  document.addEventListener('pointermove',e=>{if(dragStart?.id===e.pointerId&&Math.hypot(e.clientX-dragStart.x,e.clientY-dragStart.y)>10)draggedUntil=Date.now()+800;},true);
  document.addEventListener('pointerup',()=>{dragStart=null;},true);
  document.addEventListener('pointercancel',()=>{dragStart=null;},true);
  window.addEventListener('musicrainbow:mimo-room-message',e=>{
   if(!roomActive()||!canShow())return;
   const key=mapRoomAction(String(e.detail?.text||''));
   if(key)roomMessage(key);
  });
  for(const page of [...pages,room].filter(Boolean))new MutationObserver(synchronize).observe(page,{attributes:true,attributeFilter:['style','class','hidden']});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')dismiss();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)dismiss();else synchronize();});
  window.addEventListener('resize',positionBubble,{passive:true});
  window.addEventListener('orientationchange',positionBubble,{passive:true});
  window.visualViewport?.addEventListener('resize',positionBubble,{passive:true});
  window.addEventListener('pageshow',synchronize);
  setInterval(synchronize,900);
  synchronize();
  window.MimoBubbles435={showLesson:(id,kind='help')=>{const p=document.getElementById(id);return p&&activeLesson()===p?showLesson(p,kind):false;},dismiss,get roomBubblesEnabled(){return roomBubblesEnabled;},setRoomBubblesEnabled};
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
