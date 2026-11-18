// Shared behaviour for every page: nav, theme toggle, scroll reveal.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    var links = document.querySelector('.nav-links');
    var toggle = document.querySelector('.nav-toggle');
    var theme = document.querySelector('.theme-toggle');

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
      });
      links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') links.classList.remove('open');
      });
    }

    function syncThemeIcon() {
      if (!theme) return;
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      theme.innerHTML = dark ? '<i class="fa fa-sun-o"></i>' : '<i class="fa fa-moon-o"></i>';
      theme.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      return dark;
    }
    if (theme) {
      syncThemeIcon();
      theme.addEventListener('click', function () {
        var dark = syncThemeIcon();
        var next = dark ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        syncThemeIcon();
      });
    }

    function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Highlight the nav link for the section in view (home page only).
    var sectionLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
    if ('IntersectionObserver' in window && sectionLinks.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          sectionLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sectionLinks.forEach(function (a) {
        var s = document.querySelector(a.getAttribute('href'));
        if (s) spy.observe(s);
      });
    }

    window.observeReveal = function (scope) {
      var els = (scope || document).querySelectorAll('.reveal:not(.in)');
      if (!('IntersectionObserver' in window)) {
        Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      Array.prototype.forEach.call(els, function (el) { io.observe(el); });
    };
    window.observeReveal();

    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
