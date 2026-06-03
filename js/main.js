window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('main').classList.add('visible');
    initReveal();
    initTypewriters();
  }, 2400);
});
function initReveal() {
  var items = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  items.forEach(function (el) { obs.observe(el); });
}
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});
function makeTypewriter(el, words, opts) {
  opts = opts || {};
  var typeSpeed = opts.typeSpeed || 80, deleteSpeed = opts.deleteSpeed || 50;
  var pauseMs = opts.pauseMs || 1200, initDelay = opts.initDelay || 400;
  var idx = 0, char = 0, deleting = false;
  function tick() {
    var word = words[idx];
    if (!deleting) {
      char++; el.textContent = word.slice(0, char);
      if (char === word.length) { deleting = true; setTimeout(tick, pauseMs); return; }
      setTimeout(tick, typeSpeed);
    } else {
      char--; el.textContent = word.slice(0, char);
      if (char === 0) { deleting = false; idx = (idx + 1) % words.length; setTimeout(tick, 280); return; }
      setTimeout(tick, deleteSpeed);
    }
  }
  setTimeout(tick, initDelay);
}
function initTypewriters() {
  var sdr = document.getElementById('tw-sdr');
  if (sdr) makeTypewriter(sdr, [
    'respondendo o cliente...',
    'tirando as dúvidas...',
    'adiantando o orçamento...',
    'enviando pro consultor...',
    'recuperando o lead...',
  ], { typeSpeed: 70, deleteSpeed: 40, pauseMs: 1000 });
}