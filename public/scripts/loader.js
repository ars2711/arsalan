(function newFact() {
  var facts = [
    "Professionalism",
    "Modern",
    "Elegant",
    "Arsalan Afzal",
    "Beautiful",
    "Professional",
    "Well-suited",
    "New",
    "Experienced",
    "Lively",
    "Hand-Made",
    "Pure",
    "Perfection",
  ];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById("factDisplay").innerHTML = facts[randomFact];
})();
function loaderflow() {
  const loader = document.getElementById("loader1");
  const page = document.getElementById("body1");
  if (loader.style.display === "flex") {
    page.style.overflow = "hidden";
  } else {
    page.style.overflow = "auto";
  }
}
document.getElementById("body1").onload = loaderflow();
