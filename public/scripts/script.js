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

/* var myAtropos = Atropos({
  el: ".atropos",
});*/

class AtroposComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.atropos = new Atropos({
      el: this.querySelector(".atropos"),
      onEnter() {
        console.log("Atropos Component: Enter");
      },
      onLeave() {
        console.log("Atropos Component: Leave");
      },
      onRotate(x, y) {
        console.log("Atropos Component: Rotate", x, y);
      },
    });

    console.log("Atropos Component: Connected!", this);
  }

  disconnectedCallback() {
    this.atropos.destroy();

    console.log("Atropos Component: Disconnected!", this);
  }
}

customElements.define("atropos-component", AtroposComponent);
var rellax = new Rellax(".relax");
window.frames[1].stop();