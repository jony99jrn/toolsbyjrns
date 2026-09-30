/* ==========================================================================
   Tools By JRN — app logic
   Reads window.TOOLS (filled by js/tools/*.js, loaded before this file) and
   drives the loader, search, category chips, tools grid, ticker, theme
   toggle and mobile menu. Add new tools in js/tools/, not here.
   ========================================================================== */
(function(){
"use strict";

const tools = window.TOOLS || [];
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== LOADER (first visit of a session only) ===== */
const root = document.documentElement;
if(root.classList.contains('loading')){
  let n = 0;
  const done = () => {
    $('loader').classList.add('done');
    setTimeout(() => root.classList.remove('loading'), 1000);
    try{ sessionStorage.setItem('tbj-loaded', '1'); }catch(e){}
  };
  const timer = setInterval(() => {
    n = Math.min(100, n + (reduceMotion ? 100 : Math.ceil(Math.random() * 9)));
    $('count').textContent = n;
    if(n === 100){ clearInterval(timer); setTimeout(done, 250); }
  }, 45);
  setTimeout(() => { clearInterval(timer); root.classList.remove('loading'); }, 4000);
}

/* ===== TICKER + TRUST LINE (built from the tools list) ===== */
const tickerText = tools.map(t => esc(t.name) + ' &nbsp;●&nbsp; ').join('');
$('ticker').innerHTML = tickerText.repeat(Math.max(4, Math.ceil(12 / Math.max(tools.length, 1))));
$('trustLine').textContent = `${tools.length} tool${tools.length === 1 ? '' : 's'} and counting. Free, no ads.`;

/* ===== CARDS ===== */
function cardHTML(tool){
  return `
  <article class="card">
    ${tool.featured ? '<span class="featured-tag">Featured</span>' : ''}
    <div class="card-thumb">${tool.icon}</div>
    <div class="card-category">${esc(tool.category)}</div>
    <h3>${esc(tool.name)}</h3>
    <p>${esc(tool.description)}</p>
    <a class="card-link" href="${esc(tool.url)}" target="_blank" rel="noopener noreferrer">
      <span>Open tool</span><span class="arrow-chip" aria-hidden="true">→</span>
    </a>
  </article>`;
}
function reveal(container){
  requestAnimationFrame(() => container.querySelectorAll('.card').forEach((c, i) => setTimeout(() => c.classList.add('visible'), reduceMotion ? 0 : i * 70)));
}

/* ===== CHIPS ===== */
const categories = ['All', ...new Set(tools.map(t => t.category))];
const chipsEl = $('chips');
chipsEl.innerHTML = categories.map((c, i) =>
  `<button class="chip${i === 0 ? ' active' : ''}" data-category="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('');
let activeCategory = 'All';

/* ===== SEARCH + FILTER ===== */
const grid = $('toolsGrid'), empty = $('emptyState'), input = $('searchInput'), clearBtn = $('searchClear');

function matches(tool, term){
  if(!term) return true;
  return [tool.name, tool.description, tool.category, ...(tool.keywords || [])].join(' ').toLowerCase().includes(term);
}
function render(){
  const term = input.value.trim().toLowerCase();
  clearBtn.classList.toggle('visible', term.length > 0);
  const list = tools.filter(t => (activeCategory === 'All' || t.category === activeCategory) && matches(t, term));
  empty.hidden = list.length > 0;
  grid.style.display = list.length ? 'grid' : 'none';
  if(list.length){ grid.innerHTML = list.map(cardHTML).join(''); reveal(grid); }
}
chipsEl.addEventListener('click', e => {
  const btn = e.target.closest('.chip'); if(!btn) return;
  activeCategory = btn.dataset.category;
  chipsEl.querySelectorAll('.chip').forEach(c => { c.classList.toggle('active', c === btn); c.setAttribute('aria-pressed', c === btn); });
  render();
});
input.addEventListener('input', render);
input.addEventListener('keydown', e => { if(e.key === 'Enter') $('tools').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'}); });
clearBtn.addEventListener('click', () => { input.value = ''; input.focus(); render(); });
$('toSearch').addEventListener('click', () => setTimeout(() => input.focus(), 400));
document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  if(e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA'){ e.preventDefault(); input.focus(); }
});
render();

/* ===== THEME ===== */
$('themeToggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try{ localStorage.setItem('tbj-theme', next); }catch(e){}
});

/* ===== MOBILE MENU ===== */
const burger = $('hamburgerBtn'), panel = $('mobilePanel');
function setMenu(open){ panel.classList.toggle('open', open); burger.classList.toggle('active', open); burger.setAttribute('aria-expanded', open); }
burger.addEventListener('click', () => setMenu(!panel.classList.contains('open')));
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
})();
