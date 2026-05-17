
const PROGRAM = {
  dag1:{naam:"Push — Borst / Schouders / Triceps",kleur:"#e85d04",oefeningen:[
    {id:"bench",naam:"Bench Press",sets:4,reps:"6–8"},
    {id:"incline_db",naam:"Incline Dumbbell Press",sets:3,reps:"8–10"},
    {id:"ohp",naam:"Overhead Press",sets:4,reps:"6–8"},
    {id:"lat_raise",naam:"Lateral Raises",sets:3,reps:"12–15"},
    {id:"tricep_push",naam:"Tricep Pushdown (cable)",sets:3,reps:"10–12"},
    {id:"overhead_tri",naam:"Overhead Tricep Extension (dumbbell)",sets:3,reps:"10–12"}
  ]},
  dag2:{naam:"Pull — Rug / Biceps",kleur:"#0077b6",oefeningen:[
    {id:"deadlift",naam:"Deadlift",sets:4,reps:"4–6"},
    {id:"row_bb",naam:"Barbell Row (overhand)",sets:4,reps:"6–8"},
    {id:"lat_pull",naam:"Lat Pulldown",sets:3,reps:"8–10"},
    {id:"face_pull",naam:"Face Pull",sets:3,reps:"12–15"},
    {id:"curl_bb",naam:"Barbell Curl",sets:3,reps:"8–10"},
    {id:"hammer",naam:"Hammer Curl",sets:3,reps:"10–12"}
  ]},
  dag3:{naam:"Benen — Quads / Hamstrings / Glutes",kleur:"#2d6a4f",oefeningen:[
    {id:"squat",naam:"Squat",sets:4,reps:"6–8"},
    {id:"leg_press",naam:"Leg Press",sets:3,reps:"8–10"},
    {id:"rdl",naam:"Romanian Deadlift",sets:3,reps:"8–10"},
    {id:"leg_curl",naam:"Leg Curl (machine)",sets:3,reps:"10–12"},
    {id:"leg_ext",naam:"Leg Extension",sets:3,reps:"12–15"},
    {id:"calf_raise",naam:"Calf Raise",sets:4,reps:"12–15"}
  ]},
  dag4:{naam:"Push — Borst / Schouders / Triceps (variant)",kleur:"#9d4edd",oefeningen:[
    {id:"bench2",naam:"Incline Bench Press",sets:4,reps:"6–8"},
    {id:"dips",naam:"Weighted Dips",sets:3,reps:"8–10"},
    {id:"db_ohp",naam:"Dumbbell OHP",sets:3,reps:"8–10"},
    {id:"cable_fly",naam:"Cable Fly",sets:3,reps:"12–15"},
    {id:"skull_crusher",naam:"Skull Crusher",sets:3,reps:"10–12"},
    {id:"lat_raise2",naam:"Cable Lateral Raise",sets:3,reps:"12–15"}
  ]},
  dag5:{naam:"Pull + Core — Rug / Biceps / Buik",kleur:"#b5838d",oefeningen:[
    {id:"pullup",naam:"Weighted Pull-up",sets:4,reps:"4–8"},
    {id:"seated_row",naam:"Seated Cable Row",sets:4,reps:"8–10"},
    {id:"db_row",naam:"Dumbbell Row",sets:3,reps:"8–10"},
    {id:"incline_curl",naam:"Incline Dumbbell Curl",sets:3,reps:"10–12"},
    {id:"plank",naam:"Plank",sets:3,reps:"45–60s"},
    {id:"ab_wheel",naam:"Ab Wheel Rollout",sets:3,reps:"8–12"}
  ]}
};

const UITLEG = {
  bench:{spier:"Borst (pectoralis major)",uitvoering:"Lig plat op de bank. Voeten plat op de grond. Grip iets breder dan schouderbreedte. Stang naar het midden van de borst zakken — lichte hoek, niet recht naar de hals. Ellebogen 45–75° van het lichaam. Druk explosief omhoog.",tip:"Schouderbladen intrekken en in de bank 'drukken' voor stabiliteit. Geen stuiterende beweging van de borst."},
  incline_db:{spier:"Borst (bovenste deel) / Schouders",uitvoering:"Bank stand 2 (~30°). Dumbbells naast de schouders, handpalmen naar voren. Druk recht omhoog en breng dumbbells licht naar elkaar toe bovenaan. Gecontroleerd terug.",tip:"Hoek boven 45° traint meer schouder dan borst. Stand 2 van de bank is ideaal."},
  ohp:{spier:"Schouders / Triceps",uitvoering:"Zittend op de bank, stang of dumbbells op schouderhoogte. Druk recht omhoog — hoofd licht naar achteren als de stang passeert. Gecontroleerd terug naar sleutelbeen.",tip:"Core aanspannen. Niet uithollen in de rug."},
  lat_raise:{spier:"Schouders (deltoideus medial)",uitvoering:"Sta rechtop, dumbbells naast het lichaam. Hef armen zijwaarts tot schouderhoogte — lichte buiging in de elleboog. Pinkzijde iets omhoog. Gecontroleerd zakken.",tip:"Niet slingeren met de romp. Gewicht laag houden liever dan vals spelen."},
  tricep_push:{spier:"Triceps",uitvoering:"Sta voor het kabelstation, touw of stang bevestigd hoog. Bovenarmen langs het lichaam — die blijven stil. Druk naar beneden tot ellebogen gestrekt. Gecontroleerd terug tot 90°.",tip:"Bovenarmen bewegen niet mee. Alleen het onderste deel van de arm werkt."},
  overhead_tri:{spier:"Triceps (lange kop)",uitvoering:"Zit op de bank, één dumbbell met beide handen boven het hoofd (diamond grip). Bovenarmen verticaal en stil. Laat de dumbbell achter je hoofd zakken door de ellebogen te buigen. Strek terug omhoog.",tip:"Lange kop wordt beter getraind in gestrekte positie. Bovenarmen blijven verticaal en bewegen niet mee."},
  deadlift:{spier:"Rug / Hamstrings / Glutes",uitvoering:"Stang boven de middenvoet. Greep schouderbreedte. Heupen zakken, borst op, rug recht. Trek de stang langs het lichaam omhoog. Bovenaan heupen volledig gestrekt.",tip:"Stang altijd contact houden met het lichaam. Geen ronde onderrug. Adem in voor de rep, uit bovenaan."},
  row_bb:{spier:"Rug (latissimus dorsi, rhomboids) / Biceps",uitvoering:"Voorovergebogen torso (~45°), rug recht. Overhand grip. Stang naar de navel trekken — ellebogen langs het lichaam. Schouderbladen samenknijpen bovenaan.",tip:"Niet omhoogkomen met de romp om te helpen. Torso blijft stabiel."},
  lat_pull:{spier:"Rug (latissimus dorsi)",uitvoering:"Zit met dijen onder de steun. Brede greep. Trek de stang naar het sleutelbeen — ellebogen naar beneden en achteren. Torso licht naar achter.",tip:"Niet naar achter leunen om momentum te gebruiken. Focus op de ellebogen naar beneden trekken."},
  face_pull:{spier:"Schouders (posterieur) / Bovenrug",uitvoering:"Kabel op ooghoogte, touw bevestigd. Trek naar het gezicht — handen naar de oren, ellebogen hoog en breed. Schouderbladen samenknijpen.",tip:"Ellebogen hoger dan de handen houden. Belangrijk voor schoudergezondheid."},
  curl_bb:{spier:"Biceps",uitvoering:"Sta rechtop, stang met onderhands greep. Bovenarmen stil langs het lichaam. Curl omhoog tot volledig gecontracteerd. Gecontroleerd terug — volledig uitstrekken onderaan.",tip:"Niet slingeren. Bovenarmen bewegen niet mee. Volledig uitstrekken voor maximale stretch."},
  hammer:{spier:"Biceps (brachialis) / Onderarm",uitvoering:"Neutraal greep (duimen omhoog). Curl omhoog zonder de pols te draaien. Gecontroleerd terug.",tip:"Traint de brachialis dieper dan standaard curl — goed voor armdikte."},
  squat:{spier:"Quads / Glutes / Hamstrings",uitvoering:"Stang op de bovenste rug. Voeten schouderbreedte, lichte hoek naar buiten. Zak diep — heupen onder de knieën als mobiliteit het toelaat. Knieën volgen de voetrichting. Druk via de hielen omhoog.",tip:"Borst omhoog houden. Knieën niet naar binnen laten klappen. Adem in voor de rep."},
  leg_press:{spier:"Quads / Glutes",uitvoering:"Voeten op het platform schouderbreedte. Zak gecontroleerd tot knieën ~90°. Druk terug zonder de knieën te vergrendelen bovenaan.",tip:"Voeten hoger = meer glutes/hamstrings. Lager = meer quads."},
  rdl:{spier:"Hamstrings / Glutes / Onderrug",uitvoering:"Stang voor het lichaam, lichte buiging in de knieën. Heupen naar achteren terwijl je voorover buigt — stang langs de benen omlaag. Stop als je de rek in de hamstrings voelt. Heupen terug naar voren om omhoog te komen.",tip:"Knieën blijven relatief gestrekt. Gevoel van rek in hamstrings is het doel."},
  leg_curl:{spier:"Hamstrings",uitvoering:"Lig op de machine, as op kniehoogte. Curl de hielen naar de billen. Gecontroleerd teruglaten — volledig uitstrekken.",tip:"Niet de heupen optillen om te helpen. Langzame negatief voor meer spierschade."},
  leg_ext:{spier:"Quads",uitvoering:"Zit rechtop, as op kniehoogte. Strek de benen volledig. Gecontroleerd laten zakken.",tip:"Bovenaan even inhouden voor extra spanning."},
  calf_raise:{spier:"Kuiten",uitvoering:"Sta op de rand van een verhoging — hielen hangen vrij. Zak volledig door (rek), druk dan op de tenen zo hoog mogelijk. Even vasthouden bovenaan.",tip:"Volledig bewegingsbereik is cruciaal."},
  bench2:{spier:"Borst (bovenste deel) / Schouders",uitvoering:"Bank op 30–45°. Stang naar het bovenste deel van de borst zakken. Ellebogen iets meer naar buiten dan bij flat bench. Explosief omhoog.",tip:"Goede aanvulling op dag 1 — traint meer bovenste borst."},
  dips:{spier:"Borst / Triceps / Schouders",uitvoering:"Grip op de parallelle stangen. Licht naar voren leunen voor meer borstactivatie. Zak tot ellebogen ~90°. Druk omhoog.",tip:"Gewicht bevestigen met riem als bodyweight te makkelijk is."},
  db_ohp:{spier:"Schouders / Triceps",uitvoering:"Zittend of staand. Dumbbells op schouderhoogte, handpalmen naar voren. Druk recht omhoog. Gecontroleerd terug.",tip:"Dumbbells geven meer bewegingsvrijheid dan stang — goed voor schoudermobiliteit."},
  cable_fly:{spier:"Borst (pectoralis major)",uitvoering:"Kabels hoog bevestigd. Sta in het midden, lichte voorwaartse helling. Breng de kabels met een boogbeweging samen voor de borst — ellebogen licht gebogen.",tip:"Geen krachtoefen — gewicht laag houden, volledige contractie voelen."},
  skull_crusher:{spier:"Triceps",uitvoering:"Lig op de bank, stang of dumbbells boven de borst. Laat gecontroleerd zakken naar het voorhoofd — alleen de onderarmen bewegen. Strek terug omhoog.",tip:"Bovenarmen licht naar achter kantelen voor meer spanning op de triceps."},
  lat_raise2:{spier:"Schouders (deltoideus medial)",uitvoering:"Kabel laag bevestigd. Sta zijdelings van het station. Hef de arm met een boogbeweging tot schouderhoogte. Gecontroleerd teruglaten.",tip:"Kabel houdt constant spanning — beter dan dumbbells voor de mediale deltoid."},
  pullup:{spier:"Rug (latissimus dorsi) / Biceps",uitvoering:"Brede bovenhands greep. Hang volledig uit. Trek omhoog tot kin boven de stang. Gecontroleerd teruglaten tot volledige strekking.",tip:"Gewichtsriem gebruiken als bodyweight te makkelijk wordt."},
  seated_row:{spier:"Rug (midden) / Biceps",uitvoering:"Zit rechtop, voeten op de steun. Trek de kabel naar de navel — ellebogen langs het lichaam. Schouderbladen samenknijpen.",tip:"Niet naar achter leunen. Torso stabiel houden."},
  db_row:{spier:"Rug (latissimus dorsi, rhomboids)",uitvoering:"Knie en hand op de bank voor steun. Dumbbell ophangen, arm volledig gestrekt. Trek naar de heup — elleboog langs het lichaam omhoog.",tip:"Roteer licht met de romp mee voor extra bereik."},
  incline_curl:{spier:"Biceps (lange kop)",uitvoering:"Zit op een 45° bank, armen hangen vrij naar beneden. Curl omhoog — bovenarmen blijven naar achter hangen. Gecontroleerd terug tot volledig gestrekt.",tip:"De gestrekte startpositie rekent de lange kop extra aan."},
  plank:{spier:"Core",uitvoering:"Onderarmen en tenen op de grond. Lichaam in een rechte lijn van hoofd tot hielen. Glutes en core aanspannen.",tip:"Kwaliteit boven tijd. Een goede 30 sec is beter dan een slappe 60 sec."},
  ab_wheel:{spier:"Core (rectus abdominis)",uitvoering:"Knieel op de grond. Wiel voor de knieën. Rol langzaam naar voren — romp zo laag mogelijk. Trek het wiel terug via de core.",tip:"Beginnen op de knieën, later op de voeten als dat te makkelijk wordt."}
};

const DAG_LABELS = ["dag1","dag2","dag3","dag4","dag5"];
const LS_KEY = "fitness_log_v4";
const WH_KEY = "fitness_webhook_v1";

let state = {
  tab: "log",
  dag: "dag1",
  date: today(),
  session: {},
  sessions: {},
  gewicht: [],
  saved: false,
  saveErr: false,
  saving: false,
  openUitleg: null,
  webhookUrl: localStorage.getItem(WH_KEY)||"",
  webhookInput: "",
  webhookConnecting: false,
  webhookError: "",
  syncMode: "local"
};

function today(){return new Date().toISOString().slice(0,10)}
function fmtDate(d){return new Date(d).toLocaleDateString("nl-NL",{day:"numeric",month:"short",year:"numeric"})}

function lsSave(sessions,gewicht){
  try{localStorage.setItem(LS_KEY,JSON.stringify({sessions,gewicht}));return true}
  catch(e){return false}
}
function lsLoad(){
  try{const r=localStorage.getItem(LS_KEY);return r?JSON.parse(r):{sessions:{},gewicht:[]}}
  catch{return{sessions:{},gewicht:[]}}
}

async function whLoad(url){
  try{
    const r=await fetch(url,{method:"GET"});
    if(!r.ok)throw new Error("HTTP "+r.status);
    return await r.json();
  }catch(e){console.error(e);return null}
}
async function whSave(url,sessions,gewicht){
  try{
    const r=await fetch(url,{method:"POST",body:JSON.stringify({sessions,gewicht})});
    if(!r.ok)throw new Error("HTTP "+r.status);
    const j=await r.json();
    return j.ok===true;
  }catch(e){console.error(e);return false}
}

async function persist(sessions,gewicht){
  lsSave(sessions,gewicht);
  if(state.syncMode==="drive"&&state.webhookUrl){
    return await whSave(state.webhookUrl,sessions,gewicht);
  }
  return true;
}

function loadSession(){
  const key=state.date+"_"+state.dag;
  state.session=JSON.parse(JSON.stringify(state.sessions[key]?.sets||{}));
}

async function init(){
  const local=lsLoad();
  const url=localStorage.getItem(WH_KEY)||"";
  state.webhookUrl=url;
  if(url){
    const data=await whLoad(url);
    if(data&&data.sessions){
      state.sessions=data.sessions||{};
      state.gewicht=data.gewicht||[];
      state.syncMode="drive";
      loadSession();
      render();
      return;
    }
  }
  state.sessions=local.sessions||{};
  state.gewicht=local.gewicht||[];
  state.syncMode=url?"error":"local";
  loadSession();
  render();
}

function render(){
  const dag=PROGRAM[state.dag];
  const acc=dag.kleur;
  const key=state.date+"_"+state.dag;
  const syncColor=state.syncMode==="drive"?"#2d6a4f":state.syncMode==="error"?"#aa4400":"#555";
  const syncText=state.syncMode==="drive"?"● Drive":state.syncMode==="error"?"● fout":"● lokaal";

  document.getElementById("app").innerHTML=`
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        <span class="logo" style="color:${acc}">TRAININGSLOG</span>
        <span class="subtitle">Mark · 180cm</span>
        <span class="sync-dot" style="color:${syncColor}">${syncText}</span>
      </div>
      <button class="fullscreen-btn" onclick="openFullscreen()">⛶ volledig</button>
    </div>
    <div class="tabs">
      ${["log","schema","uitleg","progressie","gewicht"].map(t=>`
        <button class="tab${state.tab===t?" active":""}" style="${state.tab===t?"border-bottom-color:"+acc+";color:#e8e6e0":""}" onclick="setTab('${t}')">${t}</button>
      `).join("")}
    </div>
  </div>
  <div class="content">
    ${state.tab==="log"?renderLog(dag,acc,key):""}
    ${state.tab==="schema"?renderSchema():""}
    ${state.tab==="uitleg"?renderUitleg(dag,acc):""}
    ${state.tab==="progressie"?renderProgressie(dag,acc):""}
    ${state.tab==="gewicht"?renderGewicht(acc):""}
  </div>`;
}

function renderLog(dag,acc,key){
  const hasSess=Object.keys(state.session).length>0;
  return `
  <div class="dag-pills">
    ${DAG_LABELS.map(d=>`
      <button class="dag-pill" style="${state.dag===d?"background:"+PROGRAM[d].kleur+";border-color:"+PROGRAM[d].kleur+";color:#0f0f0f":""}" onclick="setDag('${d}')">${d.replace("dag","Dag ")}</button>
    `).join("")}
  </div>
  <div class="date-row">
    <span class="date-label">Datum</span>
    <input type="date" class="date-input" value="${state.date}" onchange="setDate(this.value)">
  </div>
  <div class="dag-label" style="color:${acc}">${dag.naam}</div>
  <div class="reps-hint"><span>4×6–8</span> = 4 sets van 6 tot 8 reps. Haal je overal 8? Gewicht omhoog. Blijf je op 6 steken? Zelfde gewicht volgende keer.</div>
  ${dag.oefeningen.map(oef=>{
    const prev=getPrevSets(oef.id);
    const hasFilled=state.session[oef.id]&&state.session[oef.id].some(s=>s&&(s.kg||s.reps));
    return `
    <div class="exercise">
      <div class="exercise-header">
        <span class="exercise-name">${oef.naam}</span>
        <div class="exercise-meta">
          ${hasFilled?`
            <button class="btn-small" onclick="copyS1('${oef.id}',${oef.sets})">⇣ kopieer S1</button>
            <button class="btn-small danger" onclick="clearExercise('${oef.id}')">✕ clear</button>
          `:""}
          <span class="exercise-reps">${oef.sets}×${oef.reps}</span>
        </div>
      </div>
      <div class="sets-row">
        ${Array.from({length:oef.sets}).map((_,si)=>{
          const sd=(state.session[oef.id]||[])[si]||{};
          const p=prev[si]||{};
          return `
          <div class="set-col">
            <span class="set-label">S${si+1}</span>
            <div class="set-inputs">
              <div class="set-input-wrap">
                <input type="number" class="si${sd.kg?" filled":""}" placeholder="kg" step="0.5" value="${sd.kg||""}" 
                  oninput="updateSet('${oef.id}',${si},'kg',this.value)">
                <div class="prev-val">${p.kg?p.kg+"kg":"—"}</div>
              </div>
              <div class="set-input-wrap">
                <input type="number" class="si${sd.reps?" filled":""}" placeholder="reps" value="${sd.reps||""}"
                  oninput="updateSet('${oef.id}',${si},'reps',this.value)">
                <div class="prev-val">${p.reps?p.reps+"r":"—"}</div>
              </div>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  }).join("")}
  <button class="btn-save" id="save-btn"
    style="background:${state.saveErr?"#4a1a1a":state.saved?"#2d6a4f":acc};color:${state.saveErr?"#ff6b6b":"#0f0f0f"};${state.saveErr?"border:1px solid #ff6b6b":""}"
    onclick="saveSession()">
    ${state.saving?"OPSLAAN...":state.saveErr?"✕ Opslaan mislukt":state.saved?"✓ Opgeslagen":"Sessie opslaan"}
  </button>
  ${hasSess?`<button class="btn-clear-day" onclick="clearDay()">✕ clear hele dag</button>`:""}`;
}

function renderSchema(){
  return `
  <div style="font-size:11px;color:#555;letter-spacing:.1em;text-transform:uppercase;margin-bottom:20px">5-daags Push / Pull / Legs · max 90 min/sessie</div>
  ${DAG_LABELS.map(d=>{
    const dp=PROGRAM[d];
    return `
    <div class="schema-day" style="border-left-color:${dp.kleur}">
      <div class="schema-day-title" style="color:${dp.kleur}">${d.replace("dag","DAG ")} — ${dp.naam.toUpperCase()}</div>
      ${dp.oefeningen.map(o=>`
        <div class="schema-row"><span>${o.naam}</span><span>${o.sets} × ${o.reps}</span></div>
      `).join("")}
    </div>`;
  }).join("")}
  <div class="guidelines">
    <div class="guidelines-title">Richtlijnen</div>
    <div>→ <span style="color:#aaa">Rep-range:</span> haal je overal de bovenste rep? Gewicht omhoog volgende sessie</div>
    <div>→ <span style="color:#aaa">Rust:</span> 2–3 min (compounds) · 1–2 min (isolatie)</div>
    <div>→ <span style="color:#aaa">Warming-up:</span> 5–10 min + inschietsets per compound</div>
    <div>→ <span style="color:#aaa">Dag 6 & 7:</span> rust of lichte activiteit</div>
    <div class="guidelines-section">
      <div class="guidelines-title">Gewicht verhogen</div>
      <div>→ <span style="color:#aaa">Grote spieren</span> (bench, squat, OHP, row): <span style="color:#e85d04">+2.5kg</span></div>
      <div>→ <span style="color:#aaa">Benen</span> (leg press, calf raise): <span style="color:#e85d04">+5kg</span></div>
      <div>→ <span style="color:#aaa">Isolatie</span> (curls, lateral raise, pushdowns): <span style="color:#e85d04">+1–2kg</span></div>
      <div style="margin-top:6px;color:#555">→ Tip: 1.25kg schijfjes zijn de beste investering voor langdurige progressie</div>
    </div>
  </div>`;
}

function renderUitleg(dag,acc){
  return `
  <div class="dag-pills">
    ${DAG_LABELS.map(d=>`
      <button class="dag-pill" style="${state.dag===d?"background:"+PROGRAM[d].kleur+";border-color:"+PROGRAM[d].kleur+";color:#0f0f0f":""}" onclick="setDagUitleg('${d}')">${d.replace("dag","Dag ")}</button>
    `).join("")}
  </div>
  <div class="dag-label" style="color:${acc};margin-bottom:16px">${dag.naam}</div>
  ${dag.oefeningen.map(oef=>{
    const info=UITLEG[oef.id];
    const open=state.openUitleg===oef.id;
    return `
    <div class="uitleg-item">
      <button class="uitleg-btn" style="${open?"background:#1a1a1a;border-color:#2a2a2a":""}" onclick="toggleUitleg('${oef.id}')">
        <div class="uitleg-btn-left">
          <span class="uitleg-btn-name">${oef.naam}</span>
          <span class="uitleg-btn-reps">${oef.sets}×${oef.reps}</span>
        </div>
        <span class="uitleg-icon" style="color:${open?acc:"#444"};transform:${open?"rotate(45deg)":"rotate(0deg)"}">+</span>
      </button>
      ${open&&info?`
      <div class="uitleg-body">
        <div class="uitleg-spier" style="color:${acc}">${info.spier}</div>
        <div class="uitleg-text">${info.uitvoering}</div>
        <div class="uitleg-tip" style="border-left-color:${acc}">
          <span class="uitleg-tip-label" style="color:${acc}">TIP</span>
          <span class="uitleg-tip-text">${info.tip}</span>
        </div>
      </div>`:""}
    </div>`;
  }).join("")}`;
}

function renderProgressie(dag,acc){
  const dagSessions=Object.entries(state.sessions)
    .filter(([k])=>k.endsWith("_"+state.dag))
    .sort(([a],[b])=>b.localeCompare(a));

  return `
  <div class="dag-pills">
    ${DAG_LABELS.map(d=>`
      <button class="dag-pill" style="${state.dag===d?"background:"+PROGRAM[d].kleur+";border-color:"+PROGRAM[d].kleur+";color:#0f0f0f":""}" onclick="setDag('${d}')">${d.replace("dag","D")}</button>
    `).join("")}
  </div>
  <div class="dag-label" style="color:${acc};margin-bottom:16px">${dag.naam}</div>
  ${dag.oefeningen.map(oef=>{
    const sessions=dagSessions.filter(([,v])=>v.sets&&v.sets[oef.id]&&v.sets[oef.id].some(s=>s&&s.kg)).slice(0,6).reverse();
    if(!sessions.length)return`<div class="no-data">${oef.naam} — nog geen data</div>`;
    return`
    <div style="margin-bottom:22px;border-bottom:1px solid #1a1a1a;padding-bottom:16px">
      <div style="font-size:13px;font-weight:500;margin-bottom:10px">${oef.naam}</div>
      <div style="overflow-x:auto">
        <table class="prog-table">
          <thead><tr>
            <td>Datum</td>
            ${Array.from({length:oef.sets}).map((_,i)=>`<td style="text-align:center">S${i+1}</td>`).join("")}
            <td style="text-align:right">Max</td>
          </tr></thead>
          <tbody>
            ${sessions.map(([k,sess])=>{
              const sd=sess.sets[oef.id]||[];
              const maxKg=Math.max(...sd.map(s=>parseFloat(s&&s.kg)||0));
              return`<tr>
                <td style="color:#555;white-space:nowrap">${fmtDate(sess.datum)}</td>
                ${Array.from({length:oef.sets}).map((_,i)=>{
                  const s=sd[i];
                  return`<td style="text-align:center;color:${s&&s.kg?"#ccc":"#2a2a2a"}">${s&&s.kg?s.kg+"×"+(s.reps||"?"):"—"}</td>`;
                }).join("")}
                <td style="text-align:right;color:${acc};font-weight:500">${maxKg>0?maxKg+"kg":"—"}</td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>`;
  }).join("")}`;
}

function calcNavyVet(taille, nek, lengte){
  if(!taille||!nek||!lengte)return null;
  const val = 495 / (1.0324 - 0.19077 * Math.log10(taille - nek) + 0.15456 * Math.log10(lengte)) - 450;
  return Math.round(val*10)/10;
}

function renderGewicht(acc){
  // Chart op gewicht
  const vals=[...state.gewicht].reverse().slice(-12);
  let chart="";
  if(vals.length>=2){
    const kgs=vals.map(v=>v.kg).filter(Boolean);
    if(kgs.length>=2){
      const min=Math.min(...kgs)-1, max=Math.max(...kgs)+1, range=max-min;
      const W=300,H=80;
      const pts=vals.filter(v=>v.kg).map((v,i)=>`${(i/(vals.length-1))*W},${H-((v.kg-min)/range)*H}`).join(" ");
      const diff=(vals[vals.length-1].kg-vals[0].kg).toFixed(1);
      const dc=diff<0?"#2d6a4f":diff>0?"#e85d04":"#555";
      chart=`<div class="trend-box">
        <div class="trend-header">
          <span class="trend-label">Gewicht trend</span>
          <span style="font-size:13px;color:${dc}">${diff>0?"+":""}${diff} kg</span>
        </div>
        <svg class="svg-chart" viewBox="0 0 ${W} ${H}">
          <polyline points="${pts}" fill="none" stroke="#e85d04" stroke-width="1.5" stroke-linejoin="round"/>
          ${vals.filter(v=>v.kg).map((v,i)=>{const x=(i/(vals.length-1))*W,y=H-((v.kg-min)/range)*H;return`<circle cx="${x}" cy="${y}" r="3" fill="#e85d04"/>`;}).join("")}
        </svg>
      </div>`;
    }
  }

  const syncOk=state.syncMode==="drive";

  // Preview Navy berekening
  const taille=document.getElementById("navy-taille")?parseFloat(document.getElementById("navy-taille").value)||0:0;
  const nek=document.getElementById("navy-nek")?parseFloat(document.getElementById("navy-nek").value)||0:0;
  const navyResult=taille&&nek?calcNavyVet(taille,nek,180):null;

  return `
  <div style="font-size:11px;color:#555;letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px">Lichaamssamenstelling</div>

  <div class="webhook-section">
    <div style="font-size:11px;color:${syncOk?"#2d6a4f":"#664400"}">${syncOk?"● Google Drive sync actief":"● Geen sync — stel webhook in voor cross-device opslag"}</div>
    ${!syncOk?`
    <div style="font-size:10px;color:#555;margin-top:8px;line-height:1.6">Plak hier de Web-app URL van je Google Apps Script:</div>
    <div class="webhook-input-row">
      <input class="webhook-input" id="wh-input" placeholder="https://script.google.com/macros/s/..." value="${state.webhookInput}">
      <button class="btn-save" id="wh-btn" style="background:#e85d04;color:#0f0f0f;width:auto;padding:6px 14px;font-size:10px" onclick="connectWebhook()">
        ${state.webhookConnecting?"...":"Verbinden"}
      </button>
    </div>
    ${state.webhookError?`<div class="webhook-error">${state.webhookError}</div>`:""}
    `:`<button style="background:none;border:1px solid #2a2a2a;color:#555;font-family:inherit;font-size:10px;padding:4px 10px;border-radius:2px;cursor:pointer;margin-top:10px" onclick="disconnectWebhook()">Verbreken</button>`}
  </div>

  <!-- Datum -->
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <span style="font-size:11px;color:#555;letter-spacing:.1em;text-transform:uppercase">Datum</span>
    <input type="date" id="gw-datum" class="date-input" value="${today()}">
  </div>

  <!-- Basic Fit stats -->
  <div style="font-size:11px;color:${acc};letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">Basic Fit meting</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Gewicht (kg)</div>
      <input type="number" step="0.1" class="si" style="width:100%" id="gw-kg" placeholder="91.3">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Vetmassa (%)</div>
      <input type="number" step="0.1" class="si" style="width:100%" id="gw-vet" placeholder="28.0">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Spiermassa (%)</div>
      <input type="number" step="0.1" class="si" style="width:100%" id="gw-spier" placeholder="68.0">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Botmassa (%)</div>
      <input type="number" step="0.1" class="si" style="width:100%" id="gw-bot" placeholder="4.0">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Lichaamswater (%)</div>
      <input type="number" step="0.1" class="si" style="width:100%" id="gw-water" placeholder="50.3">
    </div>
  </div>

  <!-- Omtrekken + Navy berekening -->
  <div style="font-size:11px;color:${acc};letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">Omtrekken & vetberekening</div>
  <div style="font-size:10px;color:#555;margin-bottom:12px;line-height:1.7">US Navy methode — meet 's ochtends nuchter, op het smalste/breedste punt</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Taille (cm)</div>
      <input type="number" step="0.5" class="si" style="width:100%" id="navy-taille" placeholder="90" oninput="render()">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Nek (cm)</div>
      <input type="number" step="0.5" class="si" style="width:100%" id="navy-nek" placeholder="40" oninput="render()">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Heupen (cm) <span style="color:#383838">(opt.)</span></div>
      <input type="number" step="0.5" class="si" style="width:100%" id="gw-heupen" placeholder="">
    </div>
    <div>
      <div style="font-size:10px;color:#555;margin-bottom:4px">Bovenarm (cm) <span style="color:#383838">(opt.)</span></div>
      <input type="number" step="0.5" class="si" style="width:100%" id="gw-bovenarm" placeholder="">
    </div>
  </div>

  ${navyResult!==null?`
  <div style="padding:12px;background:#141414;border-radius:2px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center">
    <span style="font-size:11px;color:#555">Berekend vetpercentage (Navy)</span>
    <span style="font-size:16px;color:${acc};font-weight:500">${navyResult}%</span>
  </div>`:""}

  <button class="btn-save" style="background:${acc};color:#0f0f0f;margin-bottom:28px" onclick="saveGewicht()">Meting opslaan</button>

  ${chart}

  ${state.gewicht.length>0?`
    <div class="weight-history-label">Geschiedenis</div>
    ${state.gewicht.map(entry=>`
      <div style="padding:12px 0;border-bottom:1px solid #1a1a1a">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:11px;color:#555">${fmtDate(entry.datum)}</span>
          <span style="font-size:13px;color:#e8e6e0;font-weight:500">${entry.kg?entry.kg+" kg":""}</span>
        </div>
        ${entry.vet||entry.spier||entry.bot||entry.water?`
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          ${entry.vet?`<span style="font-size:11px;color:#888">Vet: <span style="color:${acc}">${entry.vet}%</span></span>`:""}
          ${entry.spier?`<span style="font-size:11px;color:#888">Spier: <span style="color:${acc}">${entry.spier}%</span></span>`:""}
          ${entry.bot?`<span style="font-size:11px;color:#888">Bot: <span style="color:${acc}">${entry.bot}%</span></span>`:""}
          ${entry.water?`<span style="font-size:11px;color:#888">Water: <span style="color:${acc}">${entry.water}%</span></span>`:""}
        </div>`:""}
        ${entry.taille||entry.nek||entry.navyVet?`
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:4px">
          ${entry.taille?`<span style="font-size:11px;color:#888">Taille: <span style="color:#777">${entry.taille}cm</span></span>`:""}
          ${entry.nek?`<span style="font-size:11px;color:#888">Nek: <span style="color:#777">${entry.nek}cm</span></span>`:""}
          ${entry.heupen?`<span style="font-size:11px;color:#888">Heupen: <span style="color:#777">${entry.heupen}cm</span></span>`:""}
          ${entry.bovenarm?`<span style="font-size:11px;color:#888">Bovenarm: <span style="color:#777">${entry.bovenarm}cm</span></span>`:""}
          ${entry.navyVet?`<span style="font-size:11px;color:#888">Navy vet: <span style="color:${acc}">${entry.navyVet}%</span></span>`:""}
        </div>`:""}
      </div>
    `).join("")}
  `:`<div style="padding:24px;text-align:center;color:#333;font-size:12px">Nog geen metingen gelogd.</div>`}`;
}

function getPrevSets(oefeningId){
  const key=state.date+"_"+state.dag;
  const prev=Object.entries(state.sessions)
    .filter(([k])=>k.endsWith("_"+state.dag)&&k!==key)
    .sort(([a],[b])=>b.localeCompare(a))[0];
  return prev ? ((prev[1].sets||{})[oefeningId]||[]) : [];
}

// Actions
function setTab(t){state.tab=t;render()}
function setDag(d){state.dag=d;loadSession();render()}
function setDagUitleg(d){state.dag=d;state.openUitleg=null;render()}
function setDate(v){state.date=v;loadSession();render()}
function toggleUitleg(id){state.openUitleg=state.openUitleg===id?null:id;render()}

function updateSet(oid,si,field,val){
  if(!state.session[oid])state.session[oid]=[];
  if(!state.session[oid][si])state.session[oid][si]={};
  state.session[oid][si][field]=val;
  // update class without full re-render
  const inputs=document.querySelectorAll('.si');
}

function copyS1(oid,sets){
  const s0=state.session[oid]&&state.session[oid][0];
  if(!s0)return;
  state.session[oid]=Array.from({length:sets}).map(()=>({...s0}));
  render();
}

function clearExercise(oid){
  if(!confirm('"'+PROGRAM[state.dag].oefeningen.find(o=>o.id===oid)?.naam+'" leegmaken?'))return;
  delete state.session[oid];
  render();
}

async function saveSession(){
  if(state.saving)return;
  state.saving=true;render();
  const key=state.date+"_"+state.dag;
  const entry={dag:state.dag,datum:state.date,sets:JSON.parse(JSON.stringify(state.session))};
  const newSessions={...state.sessions,[key]:entry};
  const ok=await persist(newSessions,state.gewicht);
  if(ok){
    state.sessions=newSessions;
    state.saved=true;state.saveErr=false;
    setTimeout(()=>{state.saved=false;render()},2500);
  }else{
    state.saveErr=true;
    setTimeout(()=>{state.saveErr=false;render()},3000);
  }
  state.saving=false;render();
}

async function clearDay(){
  const key=state.date+"_"+state.dag;
  const dag=PROGRAM[state.dag];
  if(!confirm("Alle data van "+dag.naam+" op "+state.date+" wissen?"))return;
  state.session={};
  const newSessions={...state.sessions};
  delete newSessions[key];
  state.sessions=newSessions;
  await persist(newSessions,state.gewicht);
  render();
}

async function saveGewicht(){
  const datum=document.getElementById("gw-datum")?.value||today();
  const kg=parseFloat(document.getElementById("gw-kg")?.value)||null;
  const vet=parseFloat(document.getElementById("gw-vet")?.value)||null;
  const spier=parseFloat(document.getElementById("gw-spier")?.value)||null;
  const bot=parseFloat(document.getElementById("gw-bot")?.value)||null;
  const water=parseFloat(document.getElementById("gw-water")?.value)||null;
  const taille=parseFloat(document.getElementById("navy-taille")?.value)||null;
  const nek=parseFloat(document.getElementById("navy-nek")?.value)||null;
  const heupen=parseFloat(document.getElementById("gw-heupen")?.value)||null;
  const bovenarm=parseFloat(document.getElementById("gw-bovenarm")?.value)||null;
  const navyVet=taille&&nek?calcNavyVet(taille,nek,180):null;
  if(!kg&&!vet&&!taille)return;
  const entry={datum,kg,vet,spier,bot,water,taille,nek,heupen,bovenarm,navyVet};
  // Remove null fields
  Object.keys(entry).forEach(k=>entry[k]===null&&delete entry[k]);
  const updated=[...state.gewicht.filter(g=>g.datum!==datum),entry].sort((a,b)=>b.datum.localeCompare(a.datum));
  state.gewicht=updated;
  await persist(state.sessions,updated);
  render();
}

async function connectWebhook(){
  const input=document.getElementById("wh-input");
  const url=input?input.value.trim():"";
  if(!url.includes("script.google.com")){state.webhookError="Geen geldige Apps Script URL";render();return}
  state.webhookConnecting=true;state.webhookError="";render();
  const data=await whLoad(url);
  if(data&&(data.sessions!==undefined)){
    localStorage.setItem(WH_KEY,url);
    state.webhookUrl=url;
    state.sessions=data.sessions||{};
    state.gewicht=data.gewicht||[];
    state.syncMode="drive";
    loadSession();
  }else{
    state.webhookError="Verbinding mislukt — check de URL en probeer opnieuw";
  }
  state.webhookConnecting=false;render();
}

function disconnectWebhook(){
  if(!confirm("Drive sync verbreken?"))return;
  localStorage.removeItem(WH_KEY);
  state.webhookUrl="";
  state.syncMode="local";
  render();
}

function openFullscreen(){
  const html=document.documentElement.outerHTML;
  const blob=new Blob([html],{type:"text/html"});
  const url=URL.createObjectURL(blob);
  window.open(url,"_blank");
}

init();
