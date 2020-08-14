const hamburger = document.querySelector(".hamburger-btn");
const navbar__items = document.querySelector(".navbar__items");
const navbar__icons = document.querySelector(".navbar__icons");
const day1Field = document.querySelector("#day1-field");

function show() {
  navbar__items.classList.toggle("show");
  navbar__icons.classList.toggle("show");
}
hamburger.addEventListener("click", show);

//data

const day1 = [
  ["erratic", "adj.", "unpredictable, inconsistent, irregular"],
  ["secluded", "adj.", "hard to reach, hidden away"],
  ["fluctuate", "v.", "to rise and fall irregularly"],
  ["exalt", "v.", "to praise, to worship"],
  ["admonish", "v.", "to warn or scold someone"],
  ["abrupt", "adj.", "sudden, unexpected, without warning"],
  ["content", "adj.", "satisfied"],
  ["eccentric", "adj.", "uncommon, strange"],
  ["mired"],
  ["colloquial"],
  ["reconcile"],
  ["alienate"],
  ["distinguish"],
  ["adequate"],
  ["contend"],
  ["skeptical"],
  ["enfranchise"],
  ["sophisticated"],
  ["radical"],
  ["formuate"],
];

for (word of day1) {
  day1Field.innerHTML += `<p>${word[0]}:${word[1]}</p>`;
}
