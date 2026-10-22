/* Music Rainbow 2.0.1 (461) — regole delle stanze premio. Nessuna dipendenza esterna. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)root.MimoMiniroomsRules461=api;
})(typeof window!=='undefined'?window:null,function(){
  const COST=1, DURATION=300000;
  const rooms=['disco','games'];
  function normalize(s){
    const out={};
    for(const name of rooms){
      const n=Number(s&&s[name]);
      out[name]=Number.isFinite(n)?Math.max(0,Math.min(DURATION,Math.floor(n))):0;
    }
    return out;
  }
  function enter(s,room,tokens){
    if(!rooms.includes(room))return {status:'invalid',state:normalize(s),spend:0};
    const state=normalize(s);
    if(state[room]>0)return {status:'resume',state,spend:0};
    if(!Number.isFinite(Number(tokens))||Number(tokens)<COST)return {status:'no-token',state,spend:0};
    state[room]=DURATION;
    return {status:'new',state,spend:COST};
  }
  function advance(s,room,ms){
    const state=normalize(s);
    if(rooms.includes(room))state[room]=Math.max(0,state[room]-Math.max(0,Math.floor(Number(ms)||0)));
    return state;
  }
  function formatTime(ms){const v=Math.ceil(Math.max(0,Number(ms)||0)/1000);return `${Math.floor(v/60)}:${String(v%60).padStart(2,'0')}`;}
  return {COST,DURATION,normalize,enter,advance,formatTime};
});
