/* ===== Elden Ring Boss Archive — enhance.js ===== */
/* Ambient embers, scroll reveals, count-up, sound, keyboard nav, easter eggs. */
/* Loaded after script.js; relies on its globals (currentList, data, openBoss, mode, scrollToTarget). */
(function(){
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  const $ = sel => document.querySelector(sel);

  /* ---------------- Ambient embers ---------------- */
  const embers = (function(){
    if(reduce) return { burst(){} };
    const canvas = document.createElement("canvas");
    canvas.id = "ember-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, particles = [], raf = null;

    const rnd = (a, b) => a + Math.random() * (b - a);

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(innerWidth * dpr);
      h = canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
    }

    function make(x, y, isBurst){
      return {
        x: x == null ? rnd(0, w) : x,
        y: y == null ? rnd(0, h) : y,
        r: rnd(0.6, 2.2) * dpr,
        vx: (isBurst ? rnd(-1.4, 1.4) : rnd(-0.15, 0.15)) * dpr,
        vy: (isBurst ? rnd(-2.6, -0.6) : rnd(-0.4, -0.12)) * dpr,
        drift: rnd(0, Math.PI * 2),
        ds: rnd(0.005, 0.02),
        amp: rnd(0.2, 0.7) * dpr,
        bright: Math.random() < 0.2,
        life: 1,
        decay: isBurst ? rnd(0.006, 0.014) : 0
      };
    }

    function seed(){
      const n = Math.round(Math.min(72, innerWidth / 22));
      particles = [];
      for(let i = 0; i < n; i++) particles.push(make());
    }

    function burst(x, y, n){
      x = (x == null ? innerWidth / 2 : x) * dpr;
      y = (y == null ? innerHeight / 2 : y) * dpr;
      n = n || 46;
      for(let i = 0; i < n; i++) particles.push(make(x, y, true));
    }

    function step(){
      ctx.clearRect(0, 0, w, h);
      for(let i = particles.length - 1; i >= 0; i--){
        const p = particles[i];
        p.drift += p.ds;
        p.x += p.vx + Math.cos(p.drift) * p.amp * 0.15;
        p.y += p.vy;
        let alpha;
        if(p.decay){
          p.life -= p.decay;
          p.vy *= 0.99;
          alpha = Math.max(0, p.life) * 0.9;
          if(p.life <= 0){ particles.splice(i, 1); continue; }
        } else {
          if(p.y < -12){ p.y = h + 12; p.x = rnd(0, w); }
          alpha = p.bright ? 0.5 : 0.32;
        }
        const col = p.bright ? "232,207,148" : "201,164,92";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + col + "," + alpha + ")";
        if(p.bright || p.decay){
          ctx.shadowBlur = p.r * 4;
          ctx.shadowColor = "rgba(232,207,148," + (alpha * 0.8) + ")";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(step);
    }

    resize();
    seed();
    step();
    addEventListener("resize", () => { resize(); seed(); });
    document.addEventListener("visibilitychange", () => {
      if(document.hidden){ cancelAnimationFrame(raf); raf = null; }
      else if(!raf){ step(); }
    });
    return { burst };
  })();

  /* ---------------- Hero parallax ---------------- */
  if(fine && !reduce){
    const hero = $(".hero");
    const sil = $(".hero .silhouette");
    const scene = $(".hero .scene");
    const copy = $(".hero .hero-copy");
    if(hero){
      let tx = 0, ty = 0, cx = 0, cy = 0, ticking = false;
      function apply(){
        ticking = false;
        cx += (tx - cx) * 0.08;
        cy += (ty - cy) * 0.08;
        if(sil)   sil.style.transform   = "translateX(-50%) translate(" + (cx * -18) + "px," + (cy * -10) + "px)";
        if(scene) scene.style.transform = "translate(" + (cx * 10) + "px," + (cy * 8) + "px) scale(1.06)";
        if(copy)  copy.style.transform  = "translate(" + (cx * 6) + "px," + (cy * 4) + "px)";
        if(Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001){ ticking = true; requestAnimationFrame(apply); }
      }
      addEventListener("mousemove", e => {
        const r = hero.getBoundingClientRect();
        if(r.bottom < 0 || r.top > innerHeight) return;
        tx = e.clientX / innerWidth - 0.5;
        ty = e.clientY / innerHeight - 0.5;
        if(!ticking){ ticking = true; requestAnimationFrame(apply); }
      }, { passive: true });
    }
  }

  /* ---------------- Hero rotating gallery ---------------- */
  (function(){
    const art = document.querySelector(".hero-art");
    if(!art) return;
    const SLIDES = [
      { name: "Malenia, Blade of Miquella", src: "main", img: "assets/bosses/malenia.webp" },
      { name: "Starscourge Radahn", src: "main", img: "assets/bosses/starscourge-radahn.webp" },
      { name: "Messmer the Impaler", src: "dlc", img: "assets/bosses/dlc-messmer-the-impaler.webp" },
      { name: "Maliketh, the Black Blade", src: "main", img: "assets/bosses/maliketh.webp" },
      { name: "Mohg, Lord of Blood", src: "main", img: "assets/bosses/mohg-lord-of-blood.webp" },
      { name: "Godfrey, First Elden Lord (Golden Shade)", src: "main", img: "assets/bosses/godfrey-golden-shade.webp" }
    ];
    const q = s => String(s).replace(/"/g, "&quot;");

    const sil = art.querySelector(".silhouette");
    if(sil) sil.style.display = "none";

    const gallery = document.createElement("div");
    gallery.className = "hero-gallery";
    gallery.innerHTML = SLIDES.map((s, i) =>
      `<button class="hg-slide${i === 0 ? " is-active" : ""}" type="button" data-name="${q(s.name)}" data-src="${s.src}" aria-label="View ${q(s.name)}" tabindex="${i === 0 ? 0 : -1}"><img alt="${q(s.name)}" data-src="${s.img}"></button>`
    ).join("");
    art.insertBefore(gallery, art.querySelector(".grain"));

    const cap = document.createElement("div");
    cap.className = "hg-caption";
    cap.innerHTML = '<span class="hg-kicker">Featured Foe</span><span class="hg-name"></span><span class="hg-cta">View boss &rarr;</span>';
    art.appendChild(cap);

    const dots = document.createElement("div");
    dots.className = "hg-dots";
    dots.innerHTML = SLIDES.map((s, i) => `<button class="hg-dot${i === 0 ? " is-active" : ""}" type="button" aria-label="Show ${q(s.name)}" data-i="${i}"></button>`).join("");
    art.appendChild(dots);

    const slides = [...gallery.children];
    const dotEls = [...dots.children];
    const nameEl = cap.querySelector(".hg-name");
    let idx = 0, timer = null;

    function loadSlide(i){
      const img = slides[i] && slides[i].querySelector("img");
      if(img && !img.getAttribute("src") && img.dataset.src) img.src = img.dataset.src;
    }
    function show(i){
      idx = (i % slides.length + slides.length) % slides.length;
      loadSlide(idx);
      loadSlide((idx + 1) % slides.length);
      slides.forEach((s, k) => { const on = k === idx; s.classList.toggle("is-active", on); s.tabIndex = on ? 0 : -1; });
      dotEls.forEach((d, k) => d.classList.toggle("is-active", k === idx));
      nameEl.textContent = SLIDES[idx].name;
    }
    function start(){ if(reduce) return; stop(); timer = setInterval(() => show(idx + 1), 5500); }
    function stop(){ if(timer){ clearInterval(timer); timer = null; } }

    show(0);
    start();

    art.addEventListener("mouseenter", stop);
    art.addEventListener("mouseleave", start);
    gallery.addEventListener("click", e => {
      const s = e.target.closest(".hg-slide");
      if(s && typeof openBoss === "function") openBoss(s.dataset.name, s.dataset.src);
    });
    dots.addEventListener("click", e => {
      const d = e.target.closest(".hg-dot");
      if(d){ show(+d.dataset.i); start(); }
    });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  })();

  /* ---------------- Scroll reveals + count-up ---------------- */
  if(!reduce && "IntersectionObserver" in window){
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if(en.isIntersecting){
          en.target.style.transitionDelay = (en.target.dataset.rvDelay || 0) + "ms";
          en.target.classList.add("rv-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    function reveal(el, delay){
      if(!el || el.classList.contains("rv")) return;
      el.classList.add("rv");
      if(delay) el.dataset.rvDelay = delay;
      io.observe(el);
    }

    ["#regions", ".content .botd", ".map-head", ".map-tabs", ".map-legend", "footer .flourish"]
      .forEach(s => reveal($(s)));
    document.querySelectorAll("#grid .card")
      .forEach((c, i) => reveal(c, Math.min(i * 45, 360)));

    // Safety net: never leave anything hidden if the observer misses it.
    setTimeout(() => document.querySelectorAll(".rv:not(.rv-in)").forEach(el => el.classList.add("rv-in")), 1800);

    const statsEl = $(".stats");
    if(statsEl){
      let counted = false;
      const cio = new IntersectionObserver(ents => {
        ents.forEach(e => {
          if(e.isIntersecting && !counted){
            counted = true;
            document.querySelectorAll("#sBosses,#sRegions,#sDefeated").forEach(el => {
              animateNum(el, parseInt(el.textContent, 10) || 0, 900);
            });
            cio.disconnect();
          }
        });
      }, { threshold: 0.4 });
      cio.observe(statsEl);
    }
  }

  function animateNum(el, to, dur){
    const start = performance.now();
    function tick(now){
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(to * eased);
      if(t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- Sound (Web Audio, opt-in) ---------------- */
  const SOUND_KEY = "elden-ring-sound";
  let soundOn = false;
  try { soundOn = localStorage.getItem(SOUND_KEY) === "on"; } catch(_) {}
  let actx = null;

  function audio(){
    if(!actx){
      const AC = window.AudioContext || window.webkitAudioContext;
      if(!AC) return null;
      try { actx = new AC(); } catch(_) { return null; }
    }
    if(actx.state === "suspended") actx.resume();
    return actx;
  }

  function tone(o){
    if(!soundOn) return;
    const c = audio();
    if(!c) return;
    const t = c.currentTime + (o.delay || 0);
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = o.type || "sine";
    osc.frequency.setValueAtTime(o.freq, t);
    if(o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + o.dur);
    const peak = o.gain == null ? 0.04 : o.gain;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (o.attack || 0.008));
    g.gain.exponentialRampToValueAtTime(0.0001, t + o.dur);
    osc.connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + o.dur + 0.05);
  }

  const SFX = {
    hover:   () => tone({ freq: 1200, dur: 0.05, type: "sine", gain: 0.012 }),
    click:   () => tone({ freq: 300, to: 200, dur: 0.1, type: "triangle", gain: 0.03 }),
    open:    () => tone({ freq: 240, to: 560, dur: 0.22, type: "sine", gain: 0.03 }),
    close:   () => tone({ freq: 420, to: 160, dur: 0.18, type: "sine", gain: 0.025 }),
    victory: () => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
                tone({ freq: f, dur: 0.5, type: "triangle", gain: 0.035, delay: i * 0.09 })),
    death:   () => { tone({ freq: 200, to: 55, dur: 1.6, type: "sawtooth", gain: 0.06 });
                     tone({ freq: 90, to: 40, dur: 1.8, type: "sine", gain: 0.05, delay: 0.02 }); },
    grace:   () => [392, 523.25, 659.25].forEach((f, i) =>
                tone({ freq: f, dur: 0.9, type: "sine", gain: 0.03, delay: i * 0.12 }))
  };

  let lastHover = 0;
  document.addEventListener("pointerover", e => {
    if(!soundOn || !e.target.closest) return;
    if(e.target.closest(".card,.pin,.menu button,.btn-primary,.btn-secondary,.map-tab,.view,.reveal,.mark-btn,.map-jump")){
      const now = performance.now();
      if(now - lastHover > 70){ lastHover = now; SFX.hover(); }
    }
  });

  document.addEventListener("click", e => {
    if(!soundOn || !e.target.closest) return;
    const mark = e.target.closest(".mark-btn");
    if(mark){ mark.classList.contains("is-done") ? SFX.click() : SFX.victory(); return; }
    if(e.target.closest(".card,.view,.pin,.reveal")){ SFX.open(); return; }
    if(e.target.closest(".mclose") || e.target.id === "overlay"){ SFX.close(); return; }
    if(e.target.closest("button,.switch,.map-tab,.menu-util,select")){ SFX.click(); }
  }, true);

  /* ---------------- Header utility buttons ---------------- */
  const menu = $("#menu");

  function soundIcon(on){
    const wave = on
      ? '<path d="M16 9a3 3 0 010 6M18.5 7a6 6 0 010 10"/>'
      : '<path d="M22 9l-6 6M16 9l6 6"/>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9v6h4l5 4V5L8 9z"/>' + wave + '</svg><span>Sound</span>';
  }

  if(menu){
    const soundBtn = document.createElement("button");
    soundBtn.type = "button";
    soundBtn.id = "soundToggle";
    soundBtn.className = "menu-util" + (soundOn ? " on" : "");
    soundBtn.setAttribute("aria-label", "Toggle sound");
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    soundBtn.innerHTML = soundIcon(soundOn);
    soundBtn.addEventListener("click", e => {
      e.stopPropagation();
      soundOn = !soundOn;
      try { localStorage.setItem(SOUND_KEY, soundOn ? "on" : "off"); } catch(_) {}
      soundBtn.classList.toggle("on", soundOn);
      soundBtn.setAttribute("aria-pressed", String(soundOn));
      soundBtn.innerHTML = soundIcon(soundOn);
      if(soundOn){ audio(); SFX.grace(); }
    });
    menu.appendChild(soundBtn);

    const helpBtn = document.createElement("button");
    helpBtn.type = "button";
    helpBtn.id = "helpToggle";
    helpBtn.className = "menu-util";
    helpBtn.setAttribute("aria-label", "Keyboard shortcuts");
    helpBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 114 2c-1 .7-1.5 1.2-1.5 2.2"/><circle cx="12" cy="17" r=".6" fill="currentColor"/></svg><span>Keys</span>';
    helpBtn.addEventListener("click", e => { e.stopPropagation(); toggleHelp(); });
    menu.appendChild(helpBtn);
  }

  /* ---------------- Mobile nav (hamburger) ---------------- */
  const navBar = document.querySelector("header .nav");
  if(navBar && menu){
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "menu");
    toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    navBar.insertBefore(toggle, menu);

    const setNav = open => {
      navBar.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", e => { e.stopPropagation(); setNav(!navBar.classList.contains("nav-open")); });
    menu.addEventListener("click", e => { if(e.target.closest("button[data-go]")) setNav(false); });
    document.addEventListener("click", e => {
      if(navBar.classList.contains("nav-open") && !navBar.contains(e.target)) setNav(false);
    });
    addEventListener("keydown", e => { if(e.key === "Escape") setNav(false); });
  }

  /* ---------------- Random boss ---------------- */
  let lastRandom = null;
  function randomBoss(){
    let list = (typeof currentList === "function") ? currentList() : [];
    if(!list || !list.length) list = (typeof data === "function") ? data() : [];
    if(!list.length) return;
    let pick, tries = 0;
    do { pick = list[Math.floor(Math.random() * list.length)]; tries++; }
    while(list.length > 1 && pick && pick.n === lastRandom && tries < 8);
    if(!pick) return;
    lastRandom = pick.n;
    if(typeof openBoss === "function") openBoss(pick.n, mode);
  }
  const randBtn = $("#randomBoss");
  if(randBtn) randBtn.addEventListener("click", randomBoss);

  /* ---------------- Keyboard shortcuts ---------------- */
  function go(id){
    const el = document.getElementById(id);
    if(!el) return;
    if(typeof scrollToTarget === "function") scrollToTarget(el, "start");
    else el.scrollIntoView({ behavior: "smooth" });
  }

  addEventListener("keydown", e => {
    if(e.key === "Escape"){ hideHelp(); return; }
    const tag = (document.activeElement && document.activeElement.tagName || "").toLowerCase();
    if(tag === "input" || tag === "textarea" || tag === "select") return;
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    switch(e.key){
      case "/": e.preventDefault(); { const q = $("#q"); if(q){ q.focus(); q.select && q.select(); } } break;
      case "r": case "R": randomBoss(); break;
      case "g": case "G": go("grid"); break;
      case "m": case "M": go("map"); break;
      case "t": case "T": { const sw = $("#switch"); if(sw) sw.click(); } break;
      case "?": toggleHelp(); break;
    }
  });

  /* ---------------- Help panel ---------------- */
  let helpEl = null;
  function buildHelp(){
    helpEl = document.createElement("div");
    helpEl.className = "help-overlay";
    helpEl.id = "helpOverlay";
    helpEl.innerHTML =
      '<div class="help-panel" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts">' +
        '<button class="help-close" type="button" aria-label="Close">&times;</button>' +
        '<div class="help-title">Keyboard &amp; Secrets</div>' +
        '<ul class="help-list">' +
          '<li><kbd>/</kbd><span>Focus search</span></li>' +
          '<li><kbd>R</kbd><span>Summon a random foe</span></li>' +
          '<li><kbd>G</kbd><span>Jump to the bosses</span></li>' +
          '<li><kbd>M</kbd><span>Jump to the map</span></li>' +
          '<li><kbd>T</kbd><span>Toggle Main / DLC</span></li>' +
          '<li><kbd>Esc</kbd><span>Close dialogs</span></li>' +
          '<li><kbd>?</kbd><span>This panel</span></li>' +
        '</ul>' +
        '<div class="help-foot">…they say an old incantation — <em>up up down down…</em> — still echoes here.</div>' +
      '</div>';
    document.body.appendChild(helpEl);
    helpEl.addEventListener("click", e => {
      if(e.target === helpEl || e.target.closest(".help-close")) hideHelp();
    });
  }
  function toggleHelp(){ if(!helpEl) buildHelp(); helpEl.classList.toggle("open"); }
  function hideHelp(){ if(helpEl) helpEl.classList.remove("open"); }

  /* ---------------- Easter egg: YOU DIED (Konami) ---------------- */
  const deathAudio = new Audio("assets/you-died.mp3");
  deathAudio.preload = "auto";
  function playDeathSound(){
    try {
      deathAudio.currentTime = 0;
      deathAudio.volume = 0.75;
      const p = deathAudio.play();
      if(p && p.catch) p.catch(() => SFX.death());
    } catch(_) { SFX.death(); }
  }

  function youDied(){
    const o = document.createElement("div");
    o.className = "you-died";
    o.innerHTML = '<div class="yd-text">YOU DIED</div>';
    document.body.appendChild(o);
    void o.offsetWidth;
    o.classList.add("show");
    playDeathSound();
    setTimeout(() => embers.burst(innerWidth / 2, innerHeight * 0.62, 64), 1400);
    setTimeout(() => {
      const t = o.querySelector(".yd-text");
      t.textContent = "Rise now, Tarnished.";
      t.classList.add("yd-rise");
    }, 2300);
    setTimeout(() => o.classList.remove("show"), 3700);
    setTimeout(() => o.remove(), 4500);
  }

  const KONAMI = ["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"];
  let kseq = [];
  addEventListener("keydown", e => {
    kseq.push(e.key.length === 1 ? e.key.toLowerCase() : e.key.toLowerCase());
    if(kseq.length > KONAMI.length) kseq.shift();
    if(kseq.length === KONAMI.length && KONAMI.every((v, i) => kseq[i] === v)){
      kseq = [];
      youDied();
    }
  });

  /* ---------------- Easter egg: crest "GOD SLAIN" ---------------- */
  function godSlain(){
    const o = document.createElement("div");
    o.className = "god-slain";
    o.innerHTML = '<div class="gs-text">GOD SLAIN</div>';
    document.body.appendChild(o);
    void o.offsetWidth;
    o.classList.add("show");
    SFX.grace();
    embers.burst(innerWidth / 2, innerHeight * 0.55, 64);
    document.documentElement.classList.add("grace-flash");
    setTimeout(() => document.documentElement.classList.remove("grace-flash"), 1400);
    setTimeout(() => o.classList.remove("show"), 2700);
    setTimeout(() => o.remove(), 3500);
  }

  const crest = $(".crest");
  if(crest){
    let clicks = 0, timer = null;
    crest.addEventListener("click", () => {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => clicks = 0, 1400);
      if(clicks >= 5){
        clicks = 0;
        godSlain();
      }
    });
  }

  /* ---------------- Map coordinate helper (Alt+click) ---------------- */
  /* Dev tool: add ?cal to the URL, then Alt+click the map to copy a spot's x%,y%. */
  const mapCanvas = document.getElementById("mapCanvas");
  if(mapCanvas && new URLSearchParams(location.search).has("cal")){
    mapCanvas.addEventListener("click", e => {
      if(!e.altKey) return;
      e.preventDefault();
      e.stopPropagation();
      const plane = document.querySelector(".map-plane.show");
      if(!plane) return;
      const rect = plane.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      const text = `x:${x}, y:${y}`;
      if(navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
      console.log("[map cal]", text);

      let chip = document.getElementById("mapCalChip");
      if(!chip){ chip = document.createElement("div"); chip.id = "mapCalChip"; document.body.appendChild(chip); }
      chip.textContent = text + "  (copied)";
      chip.classList.remove("show");
      void chip.offsetWidth;
      chip.classList.add("show");
      clearTimeout(chip._t);
      chip._t = setTimeout(() => chip.classList.remove("show"), 2200);
    }, true);
  }
})();
