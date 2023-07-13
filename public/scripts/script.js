const lenis = new Lenis({
  duration: 0.0,
  smoothWheel: false,
  smoothTouch: false,
  normalizeWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
new Ukiyo(".ukiyo");

particlesJS.load("particles-js", "scripts/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
