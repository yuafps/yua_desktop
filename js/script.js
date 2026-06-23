const ICONS = 'https://win98icons.alexmeub.com/icons/png/';
const ic = name => ICONS + name + '.png';
const w7Icon = path => `https://github.com/bartekl1/windows-ui-assets/raw/main/Icons/Windows%207/ico/${path}`;

const iconSvg = (emoji, bg = '#1f6fd1') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="#111827"/></linearGradient></defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#g)" stroke="rgba(255,255,255,.75)" stroke-width="2"/>
    <text x="32" y="40" text-anchor="middle" font-size="29" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif">${emoji}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

const CONFIG = {
  site: {
    title: "yua's desktop",
    startUrl: 'https://gearz.gg/yuafps',
    startScale: 1.75,
  },
  desktopIcons: [
    { label: 'About me', windowId: 'win-about', icon: w7Icon('imageres.dll/ICON88_1.ico') },
    { label: 'FPS Settings', windowId: 'win-settings', icon: w7Icon('shell32.dll/ICON283_1.ico') },
    { label: 'Gear List', windowId: 'win-gear', icon: w7Icon('imageres.dll/ICON109_1.ico') },
    { label: 'Unused Gear', windowId: 'win-unused-gear', icon: w7Icon('shell32.dll/ICON271_1.ico') },
    { label: 'Media Player', windowId: 'win-player', icon: w7Icon('imageres.dll/ICON137_1.ico') },
    { label: 'Gearz Profile', url: 'https://gearz.gg/yuafps', icon: w7Icon('shell32.dll/ICON14_1.ico') },
    { label: 'Credit', windowId: 'win-credit', icon: w7Icon('imageres.dll/ICON77_1.ico') },
  ],
  layout: [
    ['win-about', 'win-settings'],
    ['win-player', 'win-unused-gear'],
    ['win-gear'],
  ],
  windows: [
    { id: 'win-about', title: 'About Me', icon: w7Icon('imageres.dll/ICON88_1.ico'), width: 300, height: 260, minWidth: 250, minHeight: 210, controls: ['minimize', 'maximize', 'close'], type: 'about' },
    { id: 'win-settings', title: 'FPS Settings', icon: w7Icon('shell32.dll/ICON283_1.ico'), width: 310, height: 250, minWidth: 245, minHeight: 190, controls: ['minimize', 'maximize', 'close'], type: 'settings' },
    { id: 'win-player', title: 'Windows Media Player', icon: w7Icon('imageres.dll/ICON137_1.ico'), width: 430, height: 330, minWidth: 310, minHeight: 270, controls: ['minimize', 'maximize', 'close'], type: 'player' },
    { id: 'win-unused-gear', title: 'Gear Not In Use', icon: w7Icon('shell32.dll/ICON271_1.ico'), width: 430, height: 300, minWidth: 300, minHeight: 220, controls: ['minimize', 'maximize', 'close'], type: 'unusedGear' },
    { id: 'win-gear', title: "Yua's Representative Gear", icon: w7Icon('imageres.dll/ICON109_1.ico'), width: 480, height: 500, minWidth: 330, minHeight: 280, controls: ['minimize', 'maximize', 'close'], type: 'gear' },
    { id: 'win-credit', title: 'Credit', icon: w7Icon('imageres.dll/ICON77_1.ico'), width: 320, height: 150, minWidth: 250, minHeight: 120, controls: ['minimize', 'close'], type: 'credit' },
  ],
  profile: {
    name: 'yua',
    pronouns: 'he/him',
    discordStatus: 'dnd',
    statusLabel: 'DND',
    bio: 'Movement FPS enjoyer, tracking fps game main now mostly, into IEM, custom keyboard and peripherals',
    links: [
      { label: 'Gearz', url: 'https://gearz.gg/yuafps', icon: '🔗' },
    ],
  },
  settings: [
    { label: 'Grip', value: 'Ftip Grip' },
    { label: 'Sensitivity', value: '37 cm/360°' },
    { label: 'Main Mouse', value: 'G-Wolves Lycan / Finalmouse FrostLord' },
  ],
  gear: [
    { type: 'Mouse', name: 'G-Wolves LYCAN 8K - Grey', note: 'main mouse' },
    { type: 'Mouse', name: 'Finalmouse FrostLord', note: 'in rotation' },
    { type: 'Mousepad', name: 'GLSSWRKS Polarity - Black', note: 'main pad' },
    { type: 'Keyboard', name: 'Venom 60 HE', note: 'main gaming keyboard' },
    { type: 'Keyboard', name: 'Mode Envoy', note: 'daily work keyboard' },
    { type: 'Monitor', name: 'LG UltraGear QHD 27GL83A-B', note: '27 inch @1080p' },
    { type: 'IEM', name: 'Lucid IEMS by tekkusai', note: '' },
    { type: 'Mic', name: 'HyperX SoloCast USB Condenser Mic', note: '' },
  ],
  keyboardSpecs: [
    {
      title: 'Venom 60 HE',
      rows: [
        ['Case', 'Geonworks Frog Mini Leggera Acrylic'],
        ['PCB', 'Geonworks Venom 60HE'],
        ['Mount', 'FKM 70A KeySnap'],
        ['Plate', 'Aluminum plate'],
        ['Switches', 'Polar Ice Shine'],
        ['Spacebar', 'TTC Horse'],
        ['Stabilizers', 'TypePlus'],
        ['Keycaps', 'Royal Cadet'],
        ['Mods', 'Half plate foam (mods)'],
      ],
    },
    {
      title: 'Mode Envoy',
      rows: [
        ['Case', 'PC case'],
        ['Plate', 'CF plate'],
        ['Switches', 'SWK Ghost Dragon'],
        ['Stabilizers', 'FourWrap'],
        ['Mount', 'Solid Block Mount'],
        ['Keycaps', 'KKB Retro Light Remix'],
      ],
    },
  ],
  credit: {
    title: 'Template credit',
    author: 'deana',
    handle: 'girlglock',
    github: 'https://github.com/girlglock',
    note: 'Credit goes to original author. Thanks for making the base that this site was made from.',
  },
  unusedGear: [
    { type: 'Mouse', items: [
      'Ninjutso Sora V2 - Black',
      'Razer Viper V2 Pro - Black',
      'Sprime PM1 - White',
      'Endgame Gear OP1 8K - White',
      'WLMOUSE Beast Miao - Black',
      'Pulsar LAB X2F',
    ] },
    { type: 'Mouse Pad', items: [
      'Yuki Aim Kitsune Glass',
      'Lethal Gaming Gear Saturn Pro Soft - Red',
      'Kanami Yuna',
      'ZOWIE G-SR-SE Rouge',
      'EVOLAST GEAR Olympus Series: POSEIDON',
      'ARTISAN FX Hien MID - Navy Blue',
    ] },
    { type: 'Keyboard', items: [
      'custom qk80',
      'LUMINKEY Magger 68 HE (Professional) - Ano Black',
      'Wooting 80HE - PCR Black',
    ] },
    { type: 'Audio', items: [
      'Sony WH-1000XM4',
      'Truthear x Crinacle Zero:RED',
    ] },
  ],
};

let topZ = 100;
const wState = {};

function mkEl(tag, props = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    try {
      if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    } catch { }
  }
  for (const child of children) {
    if (typeof child === 'string') el.appendChild(document.createTextNode(child));
    else if (child) el.appendChild(child);
  }
  return el;
}

function mkImg(src, w = 16, h = 16, extra = {}) {
  return mkEl('img', { src, width: w, height: h, alt: '', style: { verticalAlign: 'middle', ...extra } });
}

function buildWindowBody(cfg) {
  if (cfg.type === 'about') return buildAbout();
  if (cfg.type === 'settings') return buildSettings();
  if (cfg.type === 'player') return buildPlayer();
  if (cfg.type === 'gear') return buildGear();
  if (cfg.type === 'unusedGear') return buildUnusedGear();
  if (cfg.type === 'credit') return buildCredit();
  return mkEl('div', { class: 'window-body has-space' });
}

function mkTitleBar(cfg) {
  const text = mkEl('div', { class: 'title-bar-text' }, [mkImg(cfg.icon, 14, 14, { marginRight: '4px' }), cfg.title]);
  const controls = mkEl('div', { class: 'title-bar-controls' });
  const ctrlMap = {
    minimize: ['Minimize', () => minimizeWin(cfg.id)],
    maximize: ['Maximize', () => maximizeWin(cfg.id)],
    close: ['Close', () => closeWin(cfg.id)],
  };
  for (const key of cfg.controls || ['minimize', 'close']) {
    const [label, handler] = ctrlMap[key];
    controls.appendChild(mkEl('button', { 'aria-label': label, onclick: handler }));
  }
  return mkEl('div', { class: 'title-bar' }, [text, controls]);
}

function addResizeHandles(win) {
  for (const dir of ['n', 's', 'e', 'w', 'nw', 'ne', 'sw', 'se']) {
    win.appendChild(mkEl('div', { class: `rh rh-${dir}`, 'data-win': win.id, 'data-dir': dir }));
  }
}

function mkWindow(cfg) {
  const win = mkEl('div', {
    class: 'win window glass',
    id: cfg.id,
    style: {
      width: cfg.width + 'px',
      height: cfg.height ? cfg.height + 'px' : '',
      minWidth: (cfg.minWidth || 180) + 'px',
      minHeight: (cfg.minHeight || 90) + 'px',
      display: 'flex',
    },
  });
  win.appendChild(mkTitleBar(cfg));
  win.appendChild(buildWindowBody(cfg));
  addResizeHandles(win);
  bindDrag(win);
  wState[cfg.id] = { minimized: false, closed: false, maxSave: null, attention: cfg.id === 'win-credit' };
  if (wState[cfg.id].attention) win.classList.add('attention');
  return win;
}

function buildAbout() {
  const p = CONFIG.profile;
  const body = mkEl('div', { class: 'window-body has-space bio-body' });
  const avatar = mkEl('div', { class: 'pixel-avatar' }, [mkEl('img', { src: 'images/yua-avatar.png', alt: 'Yua profile picture', class: 'avatar-image' })]);
  const name = mkEl('div', { class: 'bio-name' }, ['hello im ', mkEl('span', {}, [p.name])]);
  const pronouns = mkEl('div', { class: 'bio-pronouns' }, [p.pronouns]);
  const status = mkEl('div', { class: 'bio-discord-status' }, [
    mkEl('span', { class: 'sdot s-dnd' }),
    mkEl('span', {}, [p.statusLabel]),
  ]);
  const linkGrid = mkEl('div', { class: 'social-btn-grid' });
  p.links.forEach(link => {
    linkGrid.appendChild(mkEl('button', { onclick: () => window.open(link.url, '_blank') }, [link.icon + ' ' + link.label]));
  });

  body.append(
    mkEl('div', { class: 'bio-head' }, [avatar, mkEl('div', {}, [name, pronouns, status])]),
    mkEl('fieldset', {}, [mkEl('legend', {}, ['Bio']), mkEl('p', { class: 'bio-copy' }, [p.bio])]),
    mkEl('fieldset', { style: { marginTop: '8px' } }, [mkEl('legend', {}, ['Links']), linkGrid])
  );
  return body;
}

function buildSettings() {
  const body = mkEl('div', { class: 'window-body has-space' });
  const rows = mkEl('div', { class: 'settings-list' });
  CONFIG.settings.forEach(item => {
    rows.appendChild(mkEl('div', { class: 'settings-row' }, [
      mkEl('span', { class: 'settings-label' }, [item.label]),
      mkEl('span', { class: 'settings-value' }, [item.value]),
    ]));
  });
  body.append(
    mkEl('fieldset', {}, [mkEl('legend', {}, ['Aim / Setup']), rows]),
    mkEl('fieldset', { style: { marginTop: '8px' } }, [
      mkEl('legend', {}, ['Quick note']),
      mkEl('p', { class: 'bio-copy' }, ['sen is different from game, I have lower sen for tac shooter like cs and r6.'])
    ])
  );
  return body;
}

function buildGear() {
  const body = mkEl('div', { class: 'window-body has-space gear-body' });
  const grid = mkEl('div', { class: 'gear-card-grid' });
  CONFIG.gear.forEach(item => {
    grid.appendChild(mkEl('div', { class: 'gear-card' }, [
      mkEl('div', { class: 'gear-type' }, [item.type]),
      mkEl('div', { class: 'gear-name' }, [item.name]),
      mkEl('div', { class: 'gear-note' }, [item.note]),
    ]));
  });

  const specs = mkEl('div', { class: 'gear-spec-wrap' });
  CONFIG.keyboardSpecs.forEach(board => {
    const rows = mkEl('div', { class: 'gear-spec-rows' });
    board.rows.forEach(([label, value]) => {
      rows.appendChild(mkEl('div', { class: 'gear-spec-row' }, [
        mkEl('span', { class: 'gear-spec-label' }, [label]),
        mkEl('span', { class: 'gear-spec-value' }, [value]),
      ]));
    });
    specs.appendChild(mkEl('div', { class: 'gear-spec-card' }, [
      mkEl('div', { class: 'gear-spec-title' }, [board.title]),
      rows,
    ]));
  });

  body.append(
    mkEl('div', { class: 'gear-title' }, ["Check out Yua's representative gear."]),
    grid,
    mkEl('div', { class: 'gear-title gear-subtitle' }, ['Keyboard specs']),
    specs,
    mkEl('div', { class: 'gear-footer' }, [
      mkEl('button', { onclick: () => window.open(CONFIG.site.startUrl, '_blank') }, ['Open Gearz profile'])
    ])
  );
  return body;
}

function buildUnusedGear() {
  const body = mkEl('div', { class: 'window-body has-space gear-body unused-gear-body' });

  CONFIG.unusedGear.forEach(group => {
    const list = mkEl('ul', { class: 'unused-gear-list' });
    group.items.forEach(name => list.appendChild(mkEl('li', {}, [name])));
    body.appendChild(mkEl('fieldset', { class: 'unused-gear-group' }, [
      mkEl('legend', {}, [group.type]),
      list,
    ]));
  });

  return body;
}


function buildCredit() {
  const c = CONFIG.credit;
  const body = mkEl('div', { class: 'window-body has-space credit-body' });
  body.append(
    mkEl('div', { class: 'credit-kicker' }, ['Credit / Thanks']),
    mkEl('div', { class: 'credit-title' }, [`Original by ${c.author} (@${c.handle})`]),
    mkEl('p', { class: 'bio-copy credit-copy' }, [c.note]),
    mkEl('div', { class: 'credit-actions' }, [
      mkEl('button', { onclick: () => window.open(c.github, '_blank') }, ['Open GitHub'])
    ]),
  );
  return body;
}

function buildPlayer() {
  const outer = mkEl('div', { class: 'window-body no-scroll player-window' });
  const video = mkEl('video', {
    id: 'profile-video',
    class: 'profile-video',
    src: 'images/profile-video.mp4',
    preload: 'metadata',
    playsinline: '',
    muted: '',
    autoplay: '',
  });
  video.muted = true;
  video.volume = 0;
  video.autoplay = true;

  const playBtn = mkEl('button', { id: 'mp-play' }, ['Play']);
  const rewatchBtn = mkEl('button', { id: 'mp-rewatch', style: { display: 'none' } }, ['Rewatch']);
  const vol = mkEl('input', { id: 'mp-volume', type: 'range', min: '0', max: '1', step: '0.01', value: '0', 'aria-label': 'Volume' });
  const seek = mkEl('input', { id: 'mp-seek', type: 'range', min: '0', max: '100', value: '0', step: '0.1', 'aria-label': 'Seek' });
  const time = mkEl('span', { id: 'mp-time', class: 'mp-time' }, ['0:00 / 0:00']);

  const controls = mkEl('div', { class: 'player-controls' }, [
    mkEl('div', { class: 'player-row' }, [playBtn, rewatchBtn, mkEl('label', { class: 'volume-label' }, ['Vol ', vol])]),
    mkEl('div', { class: 'player-row seek-row' }, [seek, time]),
  ]);

  outer.append(mkEl('div', { class: 'video-shell' }, [video]), controls);

  const fmt = seconds => {
    if (!Number.isFinite(seconds)) return '0:00';
    const s = Math.max(0, Math.floor(seconds));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  };

  const syncTime = () => {
    const duration = video.duration || 0;
    seek.value = duration ? String((video.currentTime / duration) * 100) : '0';
    time.textContent = `${fmt(video.currentTime)} / ${fmt(duration)}`;
  };

  const tryAutoplay = async () => {
    try {
      await video.play();
    } catch { }
  };

  playBtn.addEventListener('click', async () => {
    if (video.paused) {
      try { await video.play(); } catch { }
    } else {
      video.pause();
    }
  });

  rewatchBtn.addEventListener('click', async () => {
    video.currentTime = 0;
    rewatchBtn.style.display = 'none';
    syncTime();
    try { await video.play(); } catch { }
  });

  vol.addEventListener('input', () => {
    video.volume = Number(vol.value);
    video.muted = video.volume === 0;
  });

  seek.addEventListener('input', () => {
    if (video.duration) video.currentTime = (Number(seek.value) / 100) * video.duration;
  });

  video.addEventListener('play', () => {
    playBtn.textContent = 'Pause';
    rewatchBtn.style.display = 'none';
  });
  video.addEventListener('pause', () => { playBtn.textContent = 'Play'; });
  video.addEventListener('loadedmetadata', () => {
    syncTime();
    tryAutoplay();
  });
  video.addEventListener('canplay', tryAutoplay);
  video.addEventListener('timeupdate', syncTime);
  video.addEventListener('ended', () => {
    playBtn.textContent = 'Play';
    rewatchBtn.style.display = '';
  });

  setTimeout(tryAutoplay, 0);

  return outer;
}

function bindDrag(win) {
  let drag = false, ox = 0, oy = 0;
  const bar = win.querySelector('.title-bar');
  const startDrag = (clientX, clientY) => {
    drag = true;
    ox = clientX - win.offsetLeft;
    oy = clientY - win.offsetTop;
    focusWin(win.id);
  };
  const moveDrag = (clientX, clientY) => {
    if (!drag) return;
    win.style.left = (clientX - ox) + 'px';
    win.style.top = Math.max(0, clientY - oy) + 'px';
  };
  bar.addEventListener('mousedown', e => {
    if (e.target.closest('.title-bar-controls')) return;
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
  document.addEventListener('mouseup', () => { drag = false; });
  bar.addEventListener('touchstart', e => {
    if (e.target.closest('.title-bar-controls')) return;
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', e => {
    if (!drag) return;
    moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchend', () => { drag = false; });
  win.addEventListener('mousedown', () => focusWin(win.id));
}

let resizeState = null;
document.addEventListener('mousedown', e => {
  const handle = e.target.closest('.rh');
  if (!handle) return;
  const win = document.getElementById(handle.dataset.win);
  resizeState = {
    win,
    dir: handle.dataset.dir,
    startX: e.clientX,
    startY: e.clientY,
    startL: win.offsetLeft,
    startT: win.offsetTop,
    startW: win.offsetWidth,
    startH: win.offsetHeight,
    minW: parseInt(win.style.minWidth) || 180,
    minH: parseInt(win.style.minHeight) || 90,
  };
  focusWin(win.id);
  e.preventDefault();
  e.stopPropagation();
});

document.addEventListener('mousemove', e => {
  if (!resizeState) return;
  const { win, dir, startX, startY, startL, startT, startW, startH, minW, minH } = resizeState;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  let [L, T, W, H] = [startL, startT, startW, startH];
  if (dir.includes('e')) W = Math.max(minW, startW + dx);
  if (dir.includes('s')) H = Math.max(minH, startH + dy);
  if (dir.includes('w')) { W = Math.max(minW, startW - dx); L = startL + startW - W; }
  if (dir.includes('n')) { H = Math.max(minH, startH - dy); T = Math.max(0, startT + startH - H); }
  Object.assign(win.style, { left: L + 'px', top: T + 'px', width: W + 'px', height: H + 'px' });
});

document.addEventListener('mouseup', () => { resizeState = null; });

function focusWin(id) {
  document.querySelectorAll('.win').forEach(w => {
    w.classList.remove('focused', 'active');
    w.querySelector('.title-bar')?.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (!el) return;
  el.style.zIndex = ++topZ;
  if (wState[id]) {
    wState[id].attention = false;
    el.classList.remove('attention');
  }
  el.classList.add('focused', 'active');
  el.querySelector('.title-bar')?.classList.add('active');
  renderTaskbar();
}

function closeWin(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (wState[id]) {
    wState[id].attention = false;
    el.classList.remove('attention');
  }
  el.style.display = 'none';
  Object.assign(wState[id], { closed: true, minimized: false });
  renderTaskbar();
}

function minimizeWin(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const s = wState[id];
  if (!s.minimized) {
    el.style.display = 'none';
    s.minimized = true;
  } else {
    el.style.display = 'flex';
    s.minimized = false;
    s.closed = false;
    focusWin(id);
  }
  renderTaskbar();
}

function maximizeWin(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const s = wState[id];
  if (s.maxSave) {
    Object.assign(el.style, s.maxSave);
    s.maxSave = null;
  } else {
    s.maxSave = { left: el.style.left, top: el.style.top, width: el.style.width, height: el.style.height || '' };
    const area = document.getElementById('desktop-area');
    Object.assign(el.style, { left: '0px', top: '0px', width: area.clientWidth + 'px', height: (area.clientHeight - 40) + 'px' });
  }
  focusWin(id);
}

function restoreWin(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'flex';
  Object.assign(wState[id], { closed: false, minimized: false });
  focusWin(id);
}

function renderTaskbar() {
  const bar = document.getElementById('taskbar-buttons');
  bar.innerHTML = '';
  for (const cfg of CONFIG.windows) {
    const el = document.getElementById(cfg.id);
    if (!el) continue;
    const s = wState[cfg.id];
    const focused = el.classList.contains('focused') && !s.minimized && !s.closed;
    const btn = mkEl('button', {
      class: 'tb-btn' + (focused ? ' active' : '') + (s.attention ? ' attention' : ''),
      title: cfg.title,
      onclick: () => {
        if (s.closed) restoreWin(cfg.id);
        else if (s.minimized) minimizeWin(cfg.id);
        else if (focused) minimizeWin(cfg.id);
        else focusWin(cfg.id);
      },
    }, [mkImg(cfg.icon, 16, 16)]);
    bar.appendChild(btn);
  }
}

function layoutWindows() {
  const area = document.getElementById('desktop-area');
  const aW = area.clientWidth;
  const aH = area.clientHeight - 40;
  const PAD = 92;
  const GAP = 14;
  const cols = CONFIG.layout.map(col => col.filter(id => document.getElementById(id)));
  const colW = ids => Math.max(...ids.map(id => document.getElementById(id).offsetWidth));
  const colH = ids => ids.reduce((sum, id) => sum + document.getElementById(id).offsetHeight, 0) + Math.max(0, ids.length - 1) * GAP;
  const widths = cols.map(colW);
  const totalW = widths.reduce((sum, w) => sum + w, 0) + Math.max(0, cols.length - 1) * GAP;
  let x = Math.max(PAD, Math.round((aW - totalW) / 2));
  cols.forEach((ids, i) => {
    let y = Math.max(GAP, Math.round((aH - colH(ids)) / 2));
    ids.forEach(id => {
      const el = document.getElementById(id);
      el.style.left = Math.max(0, Math.min(aW - el.offsetWidth, x)) + 'px';
      el.style.top = Math.max(0, Math.min(aH - el.offsetHeight, y)) + 'px';
      y += el.offsetHeight + GAP;
    });
    x += widths[i] + GAP;
  });
}


function positionCreditWindow() {
  const el = document.getElementById('win-credit');
  const area = document.getElementById('desktop-area');
  if (!el || !area) return;
  const rightPad = 16;
  const bottomPad = 54;
  const left = Math.max(0, area.clientWidth - el.offsetWidth - rightPad);
  const top = Math.max(0, area.clientHeight - el.offsetHeight - bottomPad);
  el.style.left = left + 'px';
  el.style.top = top + 'px';
}

function initDesktopIcons() {
  const container = document.getElementById('desktop-icons');
  CONFIG.desktopIcons.forEach(cfg => {
    const props = cfg.url
      ? { class: 'desktop-icon', href: cfg.url, target: '_blank', tabindex: '0' }
      : { class: 'desktop-icon', href: '#', tabindex: '0', onclick: e => { e.preventDefault(); restoreWin(cfg.windowId); } };
    container.appendChild(mkEl('a', props, [mkEl('img', { src: cfg.icon, alt: '' }), mkEl('span', {}, [cfg.label])]));
  });
}

function initTaskbarStart() {
  const btn = document.getElementById('taskbar-start');
  btn.onclick = () => window.open(CONFIG.site.startUrl, '_blank');
  const size = 40 * CONFIG.site.startScale;
  document.documentElement.style.setProperty('--start-size', size + 'px');
  document.documentElement.style.setProperty('--start-size-3x', (size * 3) + 'px');
}

function updateClock() {
  const el = document.getElementById('tray-clock');
  if (!el) return;
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });
  el.innerHTML = `${time}<br>${date}`;
}

function init() {
  document.title = CONFIG.site.title;
  initDesktopIcons();
  initTaskbarStart();
  const area = document.getElementById('desktop-area');
  CONFIG.windows.forEach(cfg => area.appendChild(mkWindow(cfg)));
  requestAnimationFrame(() => requestAnimationFrame(() => {
    layoutWindows();
    positionCreditWindow();
    focusWin('win-about');
    renderTaskbar();
  }));
  window.addEventListener('resize', () => {
    layoutWindows();
    positionCreditWindow();
  });
  updateClock();
  setInterval(updateClock, 1000);
}

init();
