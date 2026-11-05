(function () {
  'use strict';
  var pre = document.querySelector('.preloader');
  if (!pre) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof window.gsap === 'undefined' || reduce) { pre.remove(); return; }

  pre.style.display = 'flex';
  gsap.set('.pl-word-inner', { yPercent: 110 });

  gsap.timeline()
    .from('.pl-dot', { scale: 0, duration: .5, ease: 'expo.out' })
    .from('.pl-word', { width: 0, marginLeft: 0, duration: .7, ease: 'power4.inOut' }, .2)
    .to('.pl-word-inner', { yPercent: 0, duration: .6, ease: 'power4.out' }, .3)
    .to('.pl-logo', { y: -20, opacity: 0, duration: .35, ease: 'power3.in' }, '+=.1')
    .to(pre, { yPercent: -100, duration: .75, ease: 'power4.inOut', onComplete: function () { pre.remove(); } }, '-=.1')
    .add(function () { if (window.introTL) window.introTL.play(); }, '-=.5');
})();
