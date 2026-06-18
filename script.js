const THEME = {
  "Limgrave": {g1:"rgba(110,150,120,.55)", g2:"#7fae8e", i:0},
  "Liurnia of the Lakes": {g1:"rgba(95,130,190,.55)", g2:"#7fa0d6", i:1},
  "Caelid": {g1:"rgba(180,70,60,.55)", g2:"#d98a83", i:2},
  "Altus Plateau": {g1:"rgba(200,165,90,.55)", g2:"#e8cf94", i:3},
  "Mountaintops": {g1:"rgba(140,165,190,.5)", g2:"#aec3d8", i:4},
  "Crumbling Farum Azula": {g1:"rgba(120,100,150,.55)", g2:"#b3a0d0", i:5},
  "Haligtree": {g1:"rgba(190,90,110,.55)", g2:"#e09fb0", i:6},
  "Eternal Cities": {g1:"rgba(95,95,180,.55)", g2:"#9fa0e0", i:0},
  "Gravesite Plain": {g1:"rgba(150,120,80,.5)", g2:"#cbb085", i:3},
  "Scadu Altus": {g1:"rgba(110,140,110,.5)", g2:"#9fc09f", i:0},
  "Shadow Keep": {g1:"rgba(180,80,60,.55)", g2:"#e09080", i:2},
  "Abyssal Woods": {g1:"rgba(160,110,70,.55)", g2:"#d6a878", i:5},
  "Jagged Peak": {g1:"rgba(120,130,160,.5)", g2:"#a6b3cf", i:4},
  "Enir-Ilim": {g1:"rgba(190,150,90,.6)", g2:"#f0d49a", i:6}
};

const SIGILS = [
  '<path d="M50 8v84M8 50h84M22 22l56 56M78 22L22 78"/><circle cx="50" cy="50" r="26"/><circle cx="50" cy="50" r="40"/>',
  '<circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="22"/><path d="M50 12v18M50 70v18M12 50h18M70 50h18"/>',
  '<path d="M50 10l34 20v40L50 90 16 70V30z"/><path d="M50 26l20 12v24L50 74 30 62V38z"/>',
  '<circle cx="50" cy="50" r="40"/><path d="M30 50a20 20 0 0140 0 12 12 0 01-24 0 8 8 0 0116 0"/>',
  '<path d="M50 8l10 28 28-2-20 20 12 26-30-14-30 14 12-26-20-20 28 2z"/>',
  '<circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="14"/><path d="M50 6v88"/>',
  '<path d="M50 10c14 14 14 26 0 40-14-14-14-26 0-40z"/><path d="M50 50c14 14 14 26 0 40-14-14-14-26 0-40z"/><path d="M30 30c14 14 26 14 40 0-14-14-26-14-40 0z"/>'
];

const MAIN = [
  {
    n:"Margit, the Fell Omen",
    loc:"Stormveil Castle",
    r:"Limgrave",
    d:"Medium",
    req:true,
    map:{plane:"surface", x:28.0, y:73.8},
    img:"assets/bosses/margit-cinematic.webp",
    imgMode:"cover",
    lore:"A spectral omen barring the way to Stormveil. In truth he is Morgott in disguise, sworn to deny the unworthy.",
    w:["Margit's Shackle (item)", "Bleed buildup", "Patient dodging of delayed swings"],
    rw:["Talisman Pouch", "Runes"]
  },
  {
    n:"Godrick the Grafted",
    loc:"Stormveil Castle",
    r:"Limgrave",
    d:"Medium",
    req:true,
    map:{plane:"surface", x:27.1, y:72.6},
    img:"assets/bosses/godrick.webp",
    lore:"A demigod who grafts the limbs of the fallen onto himself, clinging to a fading bloodline of the Golden Lineage.",
    w:["Strike the grafted arm to stagger him", "Bleed", "Stay close in phase two"],
    rw:["Godrick's Great Rune", "Remembrance of the Grafted"]
  },
  {
    n:"Leonine Misbegotten",
    loc:"Castle Morne",
    r:"Limgrave",
    d:"Easy",
    req:false,
    map:{plane:"surface", x:36.9, y:96.2},
    img:"assets/bosses/leonine-misbegotten.webp",
    lore:"A beast-man cast out and abandoned, lashing out from the storm-battered shore of Castle Morne.",
    w:["Frost", "Jump attacks during recovery", "Bleed"],
    rw:["Grafted Blade Greatsword", "Runes"]
  },
  {
    n:"Red Wolf of Radagon",
    loc:"Raya Lucaria Academy",
    r:"Liurnia of the Lakes",
    d:"Easy",
    req:false,
    map:{plane:"surface", x:16.0, y:55.8},
    img:"assets/bosses/red-wolf-radagon.webp",
    lore:"A spectral wolf bound to the Carian royalty, conjuring blades of magic to defend the academy halls.",
    w:["Close the gap to deny ranged magic", "Bleed", "Roll through sword volleys"],
    rw:["Memory Stone", "Runes"]
  },
  {
    n:"Royal Knight Loretta",
    loc:"Caria Manor",
    r:"Liurnia of the Lakes",
    d:"Medium",
    req:false,
    map:{plane:"surface", x:16.7, y:41.6},
    img:"assets/bosses/royal-knight-loretta.webp",
    lore:"The guardian knight of House Caria, conjuring a great bow of moonlight to defend Ranni's ancestral manor.",
    w:["Close range to stop the bow", "Frost", "Punish lance thrusts"],
    rw:["Loretta's Greatbow", "Runes"]
  },
  {
    n:"Rennala, Queen of the Full Moon",
    loc:"Raya Lucaria Academy",
    r:"Liurnia of the Lakes",
    d:"Medium",
    req:true,
    map:{plane:"surface", x:15.0, y:55.0},
    img:"assets/bosses/rennala.webp",
    lore:"Head of the Carian royal family and master of the full moon's sorcery, lost to grief after Radagon left her.",
    w:["Strike the glowing students in phase one", "Bleed", "Burst her down quickly in phase two"],
    rw:["Great Rune of the Unborn", "Remembrance of the Full Moon Queen"]
  },
  {
    n:"Starscourge Radahn",
    loc:"Caelid (Wailing Dunes)",
    r:"Caelid",
    d:"Hard",
    req:true,
    map:{plane:"surface", x:66.0, y:76.5},
    img:"assets/bosses/starscourge-radahn.webp",
    lore:"Mightiest of Radagon's children, a colossus of gravity magic who halted the very stars to spare his beloved steed.",
    w:["Summon the NPC spirits at the festival", "Scarlet Rot", "Bloodhound's Step to reposition"],
    rw:["Radahn's Great Rune", "Remembrance of the Starscourge"]
  },
  {
    n:"Mohg, Lord of Blood",
    loc:"Mohgwyn Palace",
    r:"Eternal Cities",
    d:"Hard",
    req:false,
    map:{plane:"under", x:76.4, y:73.0},
    img:"assets/bosses/mohg-lord-of-blood.webp",
    lore:"Lord of the Mohgwyn Dynasty, who steals away Miquella and bathes his cocoon in accursed blood.",
    w:["Purifying Crystal Tear nullifies his Nihil", "Fire", "Heal through the bleed nova"],
    rw:["Mohg's Great Rune", "Remembrance of the Blood Lord"]
  },
  {
    n:"Elemer of the Briar",
    loc:"Shaded Castle",
    r:"Altus Plateau",
    d:"Medium",
    req:false,
    map:{plane:"surface", x:25.6, y:29.2},
    img:"assets/bosses/elemer-briar.webp",
    lore:"A bell-bearing hunter consumed by the briar, dragging his cursed blade across the ruined Shaded Castle.",
    w:["Punish long pauses after teleports", "Bleed", "Stay mobile"],
    rw:["Marais Executioner's Sword", "Runes"]
  },
  {
    n:"Godskin Noble",
    loc:"Volcano Manor",
    r:"Altus Plateau",
    d:"Medium",
    req:false,
    map:{plane:"surface", x:17.8, y:33.0},
    img:"assets/bosses/godskin-noble.webp",
    lore:"An Apostle of the Godskins, gluttonous and grotesque, who rolls its swollen body to crush the unwary.",
    w:["Black Flame stops its regeneration", "Stagger with charged R2s", "Dodge the roll inward"],
    rw:["Noble's Slender Sword", "Runes"]
  },
  {
    n:"Rykard, Lord of Blasphemy",
    loc:"Mt. Gelmir (Volcano Manor)",
    r:"Altus Plateau",
    d:"Medium",
    req:true,
    map:{plane:"surface", x:16.5, y:32.0},
    img:"assets/bosses/rykard.webp",
    lore:"Once a Carian demigod, now a serpent-devouring blasphemer who seeks to consume the gods themselves.",
    w:["The Serpent-Hunter spear is near-mandatory", "Aim for the open mouth", "Use the rooftop pillars"],
    rw:["Rykard's Great Rune", "Remembrance of the Blasphemous"]
  },
  {
    n:"Morgott, the Omen King",
    loc:"Leyndell, Royal Capital",
    r:"Altus Plateau",
    d:"Hard",
    req:true,
    map:{plane:"surface", x:47.8, y:46.7},
    img:"assets/bosses/morgott.webp",
    lore:"The shunned Omen prince who, despite his curse, became the last loyal defender of the capital and the Erdtree.",
    w:["Punish the end of his long sword combos", "Bleed", "Dodge into his cursed-sword conjures"],
    rw:["Morgott's Great Rune", "Remembrance of the Omen King"]
  },
  {
    n:"Godfrey, First Elden Lord (Golden Shade)",
    loc:"Leyndell, Royal Capital",
    r:"Altus Plateau",
    d:"Hard",
    req:true,
    map:{plane:"surface", x:45.0, y:45.0},
    img:"assets/bosses/godfrey-golden-shade.webp",
    lore:"A golden echo of the first Elden Lord, set to guard the path to the Erdtree with the strength of legend.",
    w:["Sidestep the stomp shockwaves", "Punish the leap-slam", "Heavy poise damage"],
    rw:["Runes (a substantial purse)"]
  },
  {
    n:"Astel, Naturalborn of the Void",
    loc:"Lake of Rot",
    r:"Eternal Cities",
    d:"Hard",
    req:true,
    map:{plane:"under", x:18.6, y:69.4},
    img:"assets/bosses/astel.webp",
    lore:"A fallen star-beast from beyond the world, whose arrival shattered the Eternal City of the Nox.",
    w:["Stay under it to avoid the void grab", "Stagger with jump attacks", "Frost"],
    rw:["Remembrance of the Naturalborn", "Runes"]
  },
  {
    n:"Regal Ancestor Spirit",
    loc:"Nokron / Siofra River",
    r:"Eternal Cities",
    d:"Medium",
    req:false,
    map:{plane:"under", x:68.7, y:71.6},
    img:"assets/bosses/regal-ancestor-spirit.webp",
    lore:"A radiant antlered spirit, revered by the people of the underground rivers as a great ancestral god.",
    w:["Holy resistance helps", "Stay near its legs", "Aspects of the Crucible work well"],
    rw:["Remembrance of the Regal Ancestor", "Runes"]
  },
  {
    n:"Lichdragon Fortissax",
    loc:"Deeproot Depths",
    r:"Eternal Cities",
    d:"Hard",
    req:false,
    map:null,
    img:"assets/bosses/lichdragon-fortissax.webp",
    lore:"An ancient dragon-friend of Godwyn, fighting within a dream to hold the prince's Death-rot at bay.",
    w:["Lightning resistance", "Stay between its legs", "Punish the red-lightning windups"],
    rw:["Remembrance of the Lichdragon", "Runes"]
  },
  {
    n:"Fire Giant",
    loc:"Mountaintops of the Giants",
    r:"Mountaintops",
    d:"Hard",
    req:true,
    map:{plane:"surface", x:68.8, y:31.5},
    img:"assets/bosses/fire-giant.webp",
    lore:"The last of the Fire Giants, kept alive to tend the Forge and the flame meant to burn the Erdtree.",
    w:["Attack the foot/eye-wound in phase one", "Stay under it", "Lightning"],
    rw:["Remembrance of the Fire Giant", "Runes"]
  },
  {
    n:"Commander Niall",
    loc:"Castle Sol",
    r:"Mountaintops",
    d:"Hard",
    req:false,
    map:{plane:"surface", x:61.0, y:20.2},
    img:"assets/bosses/commander-niall.webp",
    lore:"A one-legged commander of unbroken will who summons two spectral knights atop Castle Sol.",
    w:["Kill the two summons first", "Bleed", "Stagger him while alone"],
    rw:["Veteran's Prosthesis", "Runes"]
  },
  {
    n:"Maliketh, the Black Blade",
    loc:"Crumbling Farum Azula",
    r:"Crumbling Farum Azula",
    d:"Hard",
    req:true,
    map:{plane:"surface", x:89.5, y:48.2},
    img:"assets/bosses/maliketh.webp",
    lore:"The shadowbound Black Blade of Marika and keeper of Destined Death, sworn to seal it away forever.",
    w:["Keep close to read his leaps", "Maximize HP for the Black Blade damage over time", "Bloodhound's Step"],
    rw:["Remembrance of the Black Blade", "Runes"]
  },
  {
    n:"Dragonlord Placidusax",
    loc:"Crumbling Farum Azula",
    r:"Crumbling Farum Azula",
    d:"Hard",
    req:false,
    map:{plane:"surface", x:87.6, y:48.8},
    img:"assets/bosses/dragonlord-placidusax.webp",
    lore:"An Elden Lord from an age before the Erdtree, a two-headed dragon adrift outside the flow of time.",
    w:["Run perpendicular to the breath beams", "Stay under the body", "Lightning resist"],
    rw:["Remembrance of the Dragonlord", "Runes"]
  },
  {
    n:"Loretta, Knight of the Haligtree",
    loc:"Haligtree",
    r:"Haligtree",
    d:"Medium",
    req:false,
    map:{plane:"surface", x:55.6, y:8.9},
    img:"assets/bosses/loretta-haligtree.webp",
    lore:"Bound in death to guard Miquella's hidden Haligtree, conjuring spectral bows and lances once more.",
    w:["Close range to deny the bow", "Frost", "Punish the lance-thrust recovery"],
    rw:["Loretta's Mastery", "Runes"]
  },
  {
    n:"Malenia, Blade of Miquella",
    loc:"Elphael, Brace of the Haligtree",
    r:"Haligtree",
    d:"Extreme",
    req:false,
    map:{plane:"surface", x:56.4, y:9.8},
    img:"assets/bosses/malenia.webp",
    lore:"Undefeated even by Radahn, the rot-blighted blade of Miquella; every blow she lands restores her own life.",
    w:["Stagger to interrupt Waterfowl Dance", "Scarlet Rot can outpace her healing", "Frost slows her"],
    rw:["Great Rune of the Unborn", "Remembrance of the Rot Goddess"]
  },
  {
    n:"Radagon and the Elden Beast",
    loc:"Erdtree",
    r:"Altus Plateau",
    d:"Hard",
    req:true,
    map:{plane:"surface", x:46.2, y:46.0},
    img:"assets/bosses/radagon-elden-beast.webp",
    lore:"The Golden Order made flesh - Radagon's hammer of light, then the celestial Elden Beast, final wardens of the Erdtree.",
    w:["Stay glued to the Elden Beast to dodge its rings", "Holy resist", "Stagger Radagon to open a window"],
    rw:["The Elden Ring - an ending of the game"]
  }
];

const DLC = [
  {
    n:"Divine Beast Dancing Lion",
    loc:"Belurat, Tower Settlement",
    r:"Gravesite Plain",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:25.3, y:58.2},
    img:"assets/bosses/dlc-divine-beast-dancing-lion.webp",
    imgMode:"cover",
    lore:"A storm-wreathed beast piloted by two dancers, shifting between wind, frost, and lightning in a furious dance.",
    w:["Track the element it is channelling", "Stay at its flank", "Lightning resist"],
    rw:["Remembrance of the Dancing Lion"]
  },
  {
    n:"Rellana, Twin Moon Knight",
    loc:"Castle Ensis",
    r:"Gravesite Plain",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:43.8, y:58.0},
    img:"assets/bosses/dlc-rellana-twin-moon-knight.webp",
    imgMode:"cover",
    lore:"Carian sword-master and sister to Rennala, wielding twin blades of moon and flame at the realm's threshold.",
    w:["Punish after her twin-moon set-up", "Stay aggressive", "Swap magic/fire resist"],
    rw:["Remembrance of the Twin Moon Knight"]
  },
  {
    n:"Messmer the Impaler",
    loc:"Shadow Keep",
    r:"Shadow Keep",
    d:"Extreme",
    req:true,
    map:{plane:"shadow", x:48.0, y:41.1},
    img:"assets/bosses/dlc-messmer-the-impaler.webp",
    imgMode:"cover",
    lore:"Marika's sealed-away son, bearer of a forbidden flame and a writhing serpent, hidden from all of history.",
    w:["Fire resist is essential", "Read the serpent's emergence", "Heavy poise damage"],
    rw:["Remembrance of the Impaler"]
  },
  {
    n:"Scadutree Avatar",
    loc:"Scadu Altus",
    r:"Scadu Altus",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:55.0, y:38.2},
    img:"assets/bosses/dlc-scadutree-avatar.webp",
    imgMode:"cover",
    lore:"A guardian spirit of the shadow tree, echoing the Erdtree Avatars of old beneath a darker canopy.",
    w:["Holy resist", "Punish the bouncing-slam recovery", "Stay close"],
    rw:["Aspects of the Crucible (shadow)"]
  },
  {
    n:"Commander Gaius",
    loc:"Shadow Keep",
    r:"Shadow Keep",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:51.8, y:41.0},
    img:"assets/bosses/dlc-commander-gaius.webp",
    imgMode:"cover",
    lore:"A boar-riding commander of Messmer's host, charging with reckless, ground-shaking force.",
    w:["Dodge into the charge, not away", "Punish the boar's stumble", "Stay to its side"],
    rw:["Path to the Saint of the Bud"]
  },
  {
    n:"Putrescent Knight",
    loc:"Stone Coffin Fissure",
    r:"Scadu Altus",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:48.1, y:94.0},
    img:"assets/bosses/dlc-putrescent-knight.webp",
    imgMode:"cover",
    lore:"A skeletal rider mounted on a steed of putrid flame, haunting the depths of the Stone Coffin Fissure.",
    w:["Frost resist", "Punish after the spinning charge", "Stay mobile"],
    rw:["Remembrance of the Wild Boar Rider"]
  },
  {
    n:"Romina, Saint of the Bud",
    loc:"Church of the Bud",
    r:"Scadu Altus",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:22.3, y:51.7},
    img:"assets/bosses/dlc-romina-saint-of-the-bud.webp",
    imgMode:"cover",
    lore:"A scorpion-bodied saint cradling the bud of rot, the first vessel touched by Miquella's discarded affliction.",
    w:["Scarlet Rot immunity helps", "Punish the tail-stab", "Stay under her body"],
    rw:["Remembrance of the Saint of the Bud"]
  },
  {
    n:"Midra, Lord of Frenzied Flame",
    loc:"Midra's Manse",
    r:"Abyssal Woods",
    d:"Hard",
    req:false,
    map:{plane:"shadow", x:49.7, y:74.2},
    img:"assets/bosses/dlc-midra-lord-of-frenzied-flame.webp",
    imgMode:"cover",
    lore:"A scholar consumed by the Frenzied Flame deep in the abyssal woods, now a herald of maddening fire.",
    w:["Madness resist", "Fire resist", "Punish the end of the long flame combos"],
    rw:["Remembrance of the Lord of Frenzied Flame"]
  },
  {
    n:"Bayle the Dread",
    loc:"Jagged Peak",
    r:"Jagged Peak",
    d:"Extreme",
    req:false,
    map:{plane:"shadow", x:77.5, y:75.5},
    img:"assets/bosses/dlc-bayle-the-dread.webp",
    imgMode:"cover",
    lore:"The most feared dragon in all of legend, scarred and vengeful, dreaded even by the ancient dragon gods.",
    w:["Use Igon's summon and his spear", "Lightning/fire resist", "Stay under the body"],
    rw:["Remembrance of the Dread Dragon"]
  },
  {
    n:"Promised Consort Radahn",
    loc:"Enir-Ilim",
    r:"Enir-Ilim",
    d:"Extreme",
    req:true,
    map:{plane:"shadow", x:21.8, y:56.2},
    img:"assets/bosses/dlc-promised-consort-radahn.webp",
    imgMode:"cover",
    lore:"Radahn reborn as Miquella's promised consort, his gravity might fused with blinding holy light - the shadow's final trial.",
    w:["Stay glued to him in phase two", "Use positioning to lessen the light blind", "Maximize Scadutree blessing"],
    rw:["Remembrance of a God and a Lord - DLC ending"]
  }
];

const ASPECT = {
  surface:"1 / 1",
  under:"643 / 705",
  shadow:"807 / 960"
};

let mode = "main";
let activePlane = "surface";
const MAP_ZOOM = {min:1, max:3.4, step:.25};
const MAP_EDGE_GAP = 72;
let mapZoom = 1;
let mapPan = {x:0, y:0};
let panStart = null;
let mapClickBlocked = false;

const $ = selector => document.querySelector(selector);
const ESC = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"};

function esc(value){
  return String(value).replace(/[&<>"']/g, char => ESC[char]);
}

function loadDefeated(){
  try {
    const saved = JSON.parse(localStorage.getItem("elden-ring-defeated") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

const defeated = new Set(loadDefeated());
const data = () => mode === "main" ? MAIN : DLC;

function knownDefeated(){
  const knownNames = new Set([...MAIN, ...DLC].map(boss => boss.n));
  return [...defeated].filter(name => knownNames.has(name));
}

function saveDefeated(){
  try {
    localStorage.setItem("elden-ring-defeated", JSON.stringify(knownDefeated()));
  } catch {}
}

const DIFF_ORDER = {Easy:0, Medium:1, Hard:2, Extreme:3};

function sortList(list, sort){
  const out = list.slice();
  if(sort === "name"){
    out.sort((a, b) => a.n.localeCompare(b.n));
  } else if(sort === "diff-asc"){
    out.sort((a, b) => DIFF_ORDER[a.d] - DIFF_ORDER[b.d] || a.n.localeCompare(b.n));
  } else if(sort === "diff-desc"){
    out.sort((a, b) => DIFF_ORDER[b.d] - DIFF_ORDER[a.d] || a.n.localeCompare(b.n));
  } else if(sort === "region"){
    out.sort((a, b) => a.r.localeCompare(b.r) || a.n.localeCompare(b.n));
  }
  return out;
}

function currentList(){
  const q = $("#q").value.trim().toLowerCase();
  const reg = $("#fRegion").value;
  const diff = $("#fDiff").value;
  const sortEl = $("#fSort");
  const sort = sortEl ? sortEl.value : "";
  const list = data().filter(boss =>
    (!q || boss.n.toLowerCase().includes(q) || boss.loc.toLowerCase().includes(q) || boss.r.toLowerCase().includes(q)) &&
    (!reg || boss.r === reg) &&
    (!diff || boss.d === diff)
  );
  return sort ? sortList(list, sort) : list;
}

function artHTML(boss, height){
  const theme = THEME[boss.r] || THEME.Limgrave;
  const sigil = SIGILS[theme.i % SIGILS.length];

  if(boss.img){
    const imgMode = ` photo-${esc(boss.imgMode || "cover")}`;
    return `
      <div class="art has-photo${imgMode}" style="height:${height}px;--g1:${theme.g1};--g2:${theme.g2}">
        <div class="glow"></div>
        <img class="boss-photo" src="${esc(boss.img)}" alt="${esc(boss.n)}" loading="lazy">
        <div class="photo-vig"></div>
        <div class="grain" style="background:url(#grain)"></div>
      </div>
    `;
  }

  return `
    <div class="art" style="height:${height}px;--g1:${theme.g1};--g2:${theme.g2}">
      <div class="glow"></div>
      <svg class="sigil" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4">${sigil}</svg>
      <div class="initial">${esc(boss.n.charAt(0))}</div>
      <div class="grain" style="background:url(#grain)"></div>
    </div>
  `;
}

function locSvg(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.7-7-12a7 7 0 0114 0c0 5.3-7 12-7 12z"/><circle cx="12" cy="9" r="2.2"/></svg>';
}

function cardHTML(boss){
  const done = defeated.has(boss.n);
  return `
    <article class="card ${done ? "done" : ""}" data-name="${esc(boss.n)}">
      <div class="done-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg></div>
      ${artHTML(boss, 185)}
      <div class="body">
        <h3>${esc(boss.n)}</h3>
        <div class="meta">
          <span class="loc">${locSvg()}${esc(boss.loc)}</span>
          <span class="tag ${boss.d.toLowerCase()}">${esc(boss.d)}</span>
        </div>
      </div>
      <button class="view">View Boss <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></button>
    </article>
  `;
}

function render(){
  const list = currentList();
  $("#grid").innerHTML = list.length
    ? list.map(cardHTML).join("")
    : '<div class="empty">No bosses match your search. The path ahead is clear, Tarnished.</div>';
}

function buildRegionOptions(){
  const regions = [...new Set(data().map(boss => boss.r))];
  $("#fRegion").innerHTML = '<option value="">All Regions</option>' +
    regions.map(region => `<option value="${esc(region)}">${esc(region)}</option>`).join("");
}

function updateStats(){
  const modeData = data();
  $("#sBosses").textContent = modeData.length;
  $("#sRegions").textContent = new Set(modeData.map(boss => boss.r)).size;
  $("#sDefeated").textContent = modeData.filter(boss => defeated.has(boss.n)).length;
  const badge = $("#navBadge");
  const badgeCount = knownDefeated().length;
  badge.textContent = badgeCount;
  badge.classList.toggle("show", badgeCount > 0);

  const fill = $("#cmFill");
  const pctEl = $("#cmPct");
  if(fill && pctEl){
    const total = modeData.length;
    const done = modeData.filter(boss => defeated.has(boss.n)).length;
    const pct = total ? Math.round(done / total * 100) : 0;
    fill.style.width = pct + "%";
    pctEl.textContent = pct + "%";
  }
}

let dailyDay = null;

function dailyDayNumber(date = new Date()){
  // Whole days since epoch in the visitor's local time, so the boss rolls over at local midnight.
  return Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 86400000);
}

function dailyBoss(){
  return MAIN[((dailyDayNumber() % MAIN.length) + MAIN.length) % MAIN.length];
}

function msUntilNextDay(){
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return next.getTime() - now.getTime();
}

function formatCountdown(ms){
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function bossOfDay(){
  dailyDay = dailyDayNumber();
  const boss = dailyBoss();
  const optional = boss.req ? "Required" : "Optional";
  const done = defeated.has(boss.n);
  const botd = $("#botd");
  botd.classList.toggle("is-done", done);
  botd.innerHTML = `
    <div class="cap">DAILY CHALLENGE</div>
    <div class="capline flourish"><span class="dot"></span></div>
    <div class="botd-art-wrap">
      ${artHTML(boss, 240)}
      ${done ? '<div class="botd-stamp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M5 13l4 4L19 7"/></svg><span>Defeated</span></div>' : ''}
    </div>
    <div class="info">
      <h3>${esc(boss.n)}</h3>
      <div class="row"><span class="star">&#10022;</span><span class="dlabel" style="color:var(--${boss.d.toLowerCase()})">${optional} &middot; ${esc(boss.d)} Difficulty</span></div>
      <div class="botd-timer" aria-live="polite">
        <span class="botd-timer-label">Next challenge in</span>
        <span class="botd-timer-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
          <span class="botd-countdown" id="botdCountdown">${formatCountdown(msUntilNextDay())}</span>
        </span>
      </div>
    </div>
    <button class="reveal" data-name="${esc(boss.n)}" data-src="main">View Lore &amp; Strategy</button>
  `;
}

function tickDaily(){
  if(dailyDayNumber() !== dailyDay){
    bossOfDay();
    return;
  }
  const el = $("#botdCountdown");
  if(el) el.textContent = formatCountdown(msUntilNextDay());
}

function rewardHTML(items){
  return items.map(item => `
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6"/></svg>${esc(item)}</li>
  `).join("");
}

function findBoss(name){
  return MAIN.find(item => item.n === name) || DLC.find(item => item.n === name);
}

function modeForBoss(name){
  return DLC.some(item => item.n === name) ? "dlc" : "main";
}

function setMode(nextMode, resetFilters = true){
  mode = nextMode;
  $("#switch").dataset.on = mode;
  $("#lblMain").className = "tlabel " + (mode === "main" ? "on" : "off");
  $("#lblDlc").className = "tlabel " + (mode === "dlc" ? "on" : "off");
  if(resetFilters){
    $("#q").value = "";
    $("#fDiff").value = "";
  }
  buildRegionOptions();
  if(resetFilters){
    $("#fRegion").value = "";
  }
  updateMapTabs();
  renderAll();
}

function openBoss(name, src = mode){
  const source = src === "dlc" ? DLC : src === "main" ? MAIN : data();
  const boss = source.find(item => item.n === name) || findBoss(name);
  if(!boss) return;

  const done = defeated.has(boss.n);
  $("#modalContent").innerHTML = `
    <div class="mhead">
      ${artHTML(boss, 200)}
      <div class="titlebar">
        <h3>${esc(boss.n)}</h3>
        <div class="sub">
          <span>${locSvg()}${esc(boss.loc)}</span>
          <span>&#9670; ${esc(boss.r)}</span>
          ${boss.req ? '<span style="color:var(--gold)">&#10022; Required to reach an ending</span>' : '<span>&#10022; Optional</span>'}
        </div>
      </div>
    </div>
    <div class="mbody">
      <p class="lore">${esc(boss.lore)}</p>
      <div class="msect">
        <div class="h"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 3.5l6 6M3 21l4-1 13-13-3-3L4 17z"/></svg>Weaknesses &amp; Strategy</div>
        <div class="chips">${boss.w.map(item => `<span class="chip">${esc(item)}</span>`).join("")}</div>
      </div>
      <div class="msect">
        <div class="h"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l3 6 6 1-4.5 4 1 6L12 17l-5.5 3 1-6L4 10l6-1z"/></svg>Rewards</div>
        <ul class="rewards">${rewardHTML(boss.rw)}</ul>
      </div>
      <div class="mfoot">
        <button class="mark-btn ${done ? "is-done" : ""}" id="markBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4L19 7"/></svg>
          ${done ? "Defeated" : "Mark as Defeated"}
        </button>
        ${boss.map ? `<button class="map-jump" id="mapJumpBtn" data-name="${esc(boss.n)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.7-7-12a7 7 0 0114 0c0 5.3-7 12-7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>
          Show on Map
        </button>` : ""}
        <span class="diffpill tag ${boss.d.toLowerCase()}">${esc(boss.d)}</span>
      </div>
    </div>
  `;

  $("#markBtn").onclick = () => {
    if(defeated.has(boss.n)){
      defeated.delete(boss.n);
    } else {
      defeated.add(boss.n);
    }
    saveDefeated();
    updateStats();
    render();
    renderMap();
    bossOfDay();
    openBoss(boss.n, src);
  };
  const mapJump = $("#mapJumpBtn");
  if(mapJump){
    mapJump.onclick = () => focusBossOnMap(boss.n);
  }

  $("#overlay").classList.remove("closing");
  $("#overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const overlay = $("#overlay");
  overlay.classList.add("closing");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  window.setTimeout(() => overlay.classList.remove("closing"), 320);
}

function getTargetTop(target, block = "start"){
  const rect = target.getBoundingClientRect();
  const offset = block === "center"
    ? Math.max(0, (window.innerHeight - rect.height) / 2)
    : 76;
  return Math.max(0, rect.top + window.scrollY - offset);
}

function forceScrollTop(top){
  const root = document.scrollingElement || document.documentElement;
  root.scrollTop = top;
  document.documentElement.scrollTop = top;
  document.body.scrollTop = top;
  window.scrollTo(0, top);
}

function scrollToTarget(target, block = "start", behavior = null){
  const top = getTargetTop(target, block);
  const useAuto = behavior === "auto" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(useAuto){
    forceScrollTop(top);
  } else {
    const root = document.scrollingElement || document.documentElement;
    root.scrollTo({top, behavior:"smooth"});
    window.setTimeout(() => {
      if(Math.abs(window.scrollY - top) > 48){
        forceScrollTop(top);
      }
    }, 760);
  }
  return top;
}

function focusBossOnMap(name){
  const boss = findBoss(name);
  if(!boss || !boss.map) return;
  setMode(modeForBoss(boss.n), true);
  setPlane(boss.map.plane);
  document.body.style.overflow = "";
  const map = $("#map");
  const targetTop = scrollToTarget(map, "start", "auto");
  closeModal();

  const pin = [...document.querySelectorAll(".pin")].find(item => item.dataset.name === boss.n);
  if(!pin) return;
  pin.classList.remove("is-focused");
  void pin.offsetWidth;
  pin.classList.add("is-focused");
  window.setTimeout(() => {
    if(Math.abs(window.scrollY - targetTop) > 48){
      scrollToTarget(map, "start", "auto");
    }
  }, 760);
  window.setTimeout(() => pin.focus({preventScroll:true}), 1180);
  window.setTimeout(() => pin.classList.remove("is-focused"), 3000);
}

function clamp(value, min, max){
  return Math.min(max, Math.max(min, value));
}

function mapMetrics(){
  const canvas = $("#mapCanvas");
  const plane = document.querySelector(".map-plane.show");
  if(!canvas || !plane) return null;
  const rect = canvas.getBoundingClientRect();
  const baseW = plane.offsetWidth;
  const baseH = plane.offsetHeight;
  return {
    canvasW: rect.width,
    canvasH: rect.height,
    baseW,
    baseH,
    baseX: (rect.width - baseW) / 2,
    baseY: (rect.height - baseH) / 2
  };
}

function clampMapPan(){
  const metrics = mapMetrics();
  if(!metrics) return;
  const minX = metrics.canvasW - MAP_EDGE_GAP - metrics.baseW * mapZoom - metrics.baseX;
  const maxX = MAP_EDGE_GAP - metrics.baseX;
  const minY = metrics.canvasH - MAP_EDGE_GAP - metrics.baseH * mapZoom - metrics.baseY;
  const maxY = MAP_EDGE_GAP - metrics.baseY;
  mapPan.x = clamp(mapPan.x, Math.min(minX, maxX), Math.max(minX, maxX));
  mapPan.y = clamp(mapPan.y, Math.min(minY, maxY), Math.max(minY, maxY));
}

function applyMapTransform(){
  const canvas = $("#mapCanvas");
  if(!canvas) return;
  clampMapPan();
  const metrics = mapMetrics();
  if(!metrics) return;
  document.querySelectorAll(".map-plane").forEach(plane => {
    plane.style.transform = `translate3d(${metrics.baseX + mapPan.x}px, ${metrics.baseY + mapPan.y}px, 0) scale(${mapZoom})`;
  });
  canvas.dataset.zoomed = mapZoom > 1 ? "true" : "false";
  const slider = $("#mapZoom");
  if(slider) slider.value = mapZoom.toFixed(1);
}

function setMapZoom(nextZoom, center = null){
  const metrics = mapMetrics();
  if(!metrics) return;
  const oldZoom = mapZoom;
  const newZoom = clamp(nextZoom, MAP_ZOOM.min, MAP_ZOOM.max);
  if(newZoom === oldZoom) return;

  const rect = $("#mapCanvas").getBoundingClientRect();
  const focus = center || {x:rect.left + rect.width / 2, y:rect.top + rect.height / 2};
  const localX = focus.x - rect.left;
  const localY = focus.y - rect.top;
  const mapX = (localX - metrics.baseX - mapPan.x) / oldZoom;
  const mapY = (localY - metrics.baseY - mapPan.y) / oldZoom;

  mapZoom = newZoom;
  mapPan.x = localX - metrics.baseX - mapX * mapZoom;
  mapPan.y = localY - metrics.baseY - mapY * mapZoom;
  applyMapTransform();
}

function resetMapView(){
  mapZoom = 1;
  mapPan = {x:0, y:0};
  applyMapTransform();
}

function nudgeMapZoom(direction){
  const nextZoom = Math.round((mapZoom + MAP_ZOOM.step * direction) * 10) / 10;
  setMapZoom(nextZoom);
}

function markerIcon(){
  return `
    <svg viewBox="0 0 38 48" aria-hidden="true">
      <path class="shield" fill="currentColor" d="M19 1C10.3 1 3.2 8 3.2 16.7c0 10.8 12.1 22.9 15.8 29.8 3.7-6.9 15.8-19 15.8-29.8C34.8 8 27.7 1 19 1Z"/>
      <path class="shield-edge" fill="none" stroke="currentColor" stroke-width="1.4" d="M19 4.2c-7 0-12.6 5.6-12.6 12.5 0 8.8 9.3 18.6 12.6 24.4 3.3-5.8 12.6-15.6 12.6-24.4 0-6.9-5.6-12.5-12.6-12.5Z"/>
      <g class="skull" fill="currentColor">
        <path d="M19 5l1.5 4.6h-3z"/>
        <path d="M12.6 14.4C10.6 12.8 9.2 10.6 9.4 8.3 9.45 7.7 10.1 7.7 10.5 8.2 11.8 10 13.4 11.6 15.2 12.6L12.6 14.4Z"/>
        <path d="M25.4 14.4C27.4 12.8 28.8 10.6 28.6 8.3 28.55 7.7 27.9 7.7 27.5 8.2 26.2 10 24.6 11.6 22.8 12.6L25.4 14.4Z"/>
        <path d="M19 9.8c-5.4 0-9.4 3.8-9.4 9 0 3.2 1.2 5.7 3.2 7.4v2.4c0 .8.6 1.4 1.4 1.4h9.6c.8 0 1.4-.6 1.4-1.4v-2.4c2-1.7 3.2-4.2 3.2-7.4 0-5.2-4-9-9.4-9Z"/>
      </g>
      <g class="skull-dark" fill="#170a05">
        <ellipse cx="14.7" cy="17.8" rx="3" ry="3.4" transform="rotate(20 14.7 17.8)"/>
        <ellipse cx="23.3" cy="17.8" rx="3" ry="3.4" transform="rotate(-20 23.3 17.8)"/>
        <path d="M19 21.2l1.8 3.2h-3.6z"/>
      </g>
      <path class="skull-teeth" fill="none" stroke="#170a05" stroke-width=".85" stroke-linecap="round" d="M14.4 25.2H23.6M16.5 25.5v2.8M19 25.5v3M21.5 25.5v2.8"/>
    </svg>
  `;
}

function pinHTML(boss){
  const done = defeated.has(boss.n);
  const preview = boss.img ? `<img class="tip-img" src="${esc(boss.img)}" alt="" loading="lazy">` : "";
  const previewClass = boss.img ? " with-preview" : "";
  return `
    <button class="pin ${done ? "done" : ""}" data-name="${esc(boss.n)}" data-src="${mode}" data-diff="${esc(boss.d)}" style="left:${boss.map.x}%;top:${boss.map.y}%" aria-label="${esc(boss.n)} at ${esc(boss.loc)}">
      ${markerIcon()}
      <span class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg></span>
      <span class="tip${previewClass}">${preview}<span class="tip-copy"><span class="tn">${esc(boss.n)}</span><span class="td">${esc(boss.loc)}</span><span class="tdiff">${esc(boss.d)}</span></span></span>
    </button>
  `;
}

function planesForMode(){
  return mode === "dlc" ? ["shadow"] : ["surface", "under"];
}

function setPlane(plane){
  activePlane = plane;
  document.querySelectorAll(".map-plane").forEach(item => {
    item.classList.toggle("show", item.id === `plane-${plane}`);
  });
  document.querySelectorAll(".map-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.plane === plane);
  });
  $("#mapCanvas").dataset.plane = plane;
  $("#mapCanvas").style.setProperty("--map-aspect", ASPECT[plane] || "1 / 1");
  resetMapView();
}

function updateMapTabs(){
  const allowed = planesForMode();
  document.querySelectorAll(".map-tab").forEach(tab => {
    tab.style.display = allowed.includes(tab.dataset.plane) ? "flex" : "none";
  });
  if(!allowed.includes(activePlane)){
    activePlane = allowed[0];
  }
  setPlane(activePlane);
}

function renderMap(){
  const list = currentList().filter(boss => boss.map);
  document.querySelectorAll(".map-plane .markers").forEach(markers => {
    const plane = markers.closest(".map-plane").id.replace("plane-", "");
    const pins = list.filter(boss => boss.map.plane === plane);
    markers.innerHTML = pins.length
      ? pins.map(pinHTML).join("")
      : '<div class="map-empty on">No bosses match the current filters on this map.</div>';
  });
  applyMapTransform();
}

function renderAll(){
  render();
  renderMap();
  updateStats();
}

$("#q").addEventListener("input", renderAll);
$("#fRegion").addEventListener("change", renderAll);
$("#fDiff").addEventListener("change", renderAll);
if($("#fSort")) $("#fSort").addEventListener("change", renderAll);

$("#switch").addEventListener("click", () => {
  setMode(mode === "main" ? "dlc" : "main");
});

$("#grid").addEventListener("click", event => {
  const card = event.target.closest(".card");
  if(card) openBoss(card.dataset.name, mode);
});

$("#botd").addEventListener("click", event => {
  const target = event.target.closest("[data-name]");
  if(target) openBoss(target.dataset.name, target.dataset.src);
});

$("#mapCanvas").addEventListener("click", event => {
  if(mapClickBlocked){
    event.preventDefault();
    return;
  }
  const pin = event.target.closest(".pin");
  if(pin) openBoss(pin.dataset.name, pin.dataset.src);
});

$("#mapCanvas").addEventListener("wheel", event => {
  event.preventDefault();
  setMapZoom(mapZoom + (event.deltaY < 0 ? .2 : -.2), {x:event.clientX, y:event.clientY});
}, {passive:false});

$("#mapCanvas").addEventListener("pointerdown", event => {
  if(event.button !== 0 || event.target.closest(".pin") || mapZoom <= 1) return;
  panStart = {
    id:event.pointerId,
    x:event.clientX,
    y:event.clientY,
    panX:mapPan.x,
    panY:mapPan.y,
    moved:false
  };
  $("#mapCanvas").classList.add("is-panning");
  $("#mapCanvas").setPointerCapture(event.pointerId);
});

$("#mapCanvas").addEventListener("pointermove", event => {
  if(!panStart || panStart.id !== event.pointerId) return;
  event.preventDefault();
  const dx = event.clientX - panStart.x;
  const dy = event.clientY - panStart.y;
  if(Math.hypot(dx, dy) > 3) panStart.moved = true;
  mapPan.x = panStart.panX + dx;
  mapPan.y = panStart.panY + dy;
  applyMapTransform();
});

function endMapPan(event){
  if(!panStart || panStart.id !== event.pointerId) return;
  if(panStart.moved){
    mapClickBlocked = true;
    window.setTimeout(() => mapClickBlocked = false, 80);
  }
  $("#mapCanvas").classList.remove("is-panning");
  panStart = null;
}

$("#mapCanvas").addEventListener("pointerup", endMapPan);
$("#mapCanvas").addEventListener("pointercancel", endMapPan);

$("#zoomIn").addEventListener("click", () => nudgeMapZoom(1));
$("#zoomOut").addEventListener("click", () => nudgeMapZoom(-1));
$("#mapReset").addEventListener("click", resetMapView);
$("#mapZoom").addEventListener("input", event => setMapZoom(Number(event.target.value)));

document.querySelector(".map-tabs").addEventListener("click", event => {
  const tab = event.target.closest(".map-tab");
  if(tab && tab.style.display !== "none"){
    setPlane(tab.dataset.plane);
  }
});

$("#mclose").addEventListener("click", closeModal);
$("#overlay").addEventListener("click", event => {
  if(event.target.id === "overlay") closeModal();
});
document.addEventListener("keydown", event => {
  if(event.key === "Escape") closeModal();
});

$("#menu").addEventListener("click", event => {
  const button = event.target.closest("button");
  if(!button) return;
  [...$("#menu").children].forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const targets = {top:"top", grid:"grid", regions:"regions", map:"map", progress:"progress"};
  const target = document.getElementById(targets[button.dataset.go]);
  if(target){
    scrollToTarget(target, button.dataset.go === "progress" ? "center" : "start");
  }
});

document.querySelectorAll(".btn-primary[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    const targets = {top:"top", grid:"grid", regions:"regions", map:"map", progress:"progress"};
    const target = document.getElementById(targets[button.dataset.go]);
    if(target) scrollToTarget(target, button.dataset.go === "progress" ? "center" : "start");
  });
});

buildRegionOptions();
updateMapTabs();
renderAll();
bossOfDay();
setInterval(tickDaily, 1000);
