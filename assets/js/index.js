let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

function modulo(a, b) {
  return ((a % b) + b) % b;
}

const title = new Array(
  "Jujutsu Kaisen",
  "Black Clover",
  "One Piece",
  "Kakegurui",
  "Demon Slayer"
);
const desc = new Array(
  "Set in a world where everyone is given the ability to use magic, the story follows Asta, a young boy born without any magic power who is given a rare grimoire that grants him anti-magic abilities. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King.",
  "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
);
const score = new Array(" 8.9/10", " 7/10", " 8/10", " 9/10", " 10/10");

let lengthItems = items.length - 1;
let active = 0;
let idx = 0;

setinfo(0);

next.onclick = function () {
  idx++;
  idx = modulo(idx, 5);
  setinfo(idx);
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  idx--;
  idx = modulo(idx, 5);
  setinfo(idx);
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 10000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 10000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

function setinfo(i) {
  document.getElementById("title").innerHTML = title[i];
  document.getElementById("desc").innerHTML = desc[i];
  document.getElementById("score").innerHTML = score[i];
}
