let root = document.querySelector(":root");
let ng1 = document.getElementById("ng1");
let ng2 = document.getElementById("ng2");
let rpm = document.getElementById("rpm");
change();
ng1.addEventListener("input", change);
ng2.addEventListener("input", change);
rpm.addEventListener("input", change);
let str = "";
for (let i = 0; i <= 30; i++) {
  str = str + `<div class="tooth" style="--i: ${i}"></div>`;
}
document.querySelector(".gear1").innerHTML = str;
document.querySelector(".gear2").innerHTML = str;
function change() {
  let gear1 = ng1.value;
  let gear2 = ng2.value;
  root.style.setProperty("--gear1", gear1);
  root.style.setProperty("--gear2", gear2);
  let tg1 = 60 / rpm.value;
  let tg2 = (gear2 / gear1) * tg1;
  document.querySelector(
    ".gearout2"
  ).style.animation = `rotate ${tg2}s infinite linear`;
  document.querySelector(
    ".gearout1"
  ).style.animation = `rotate ${tg1}s infinite linear reverse`;
  let rg1 = 90 + (0.5 * 360) / gear1;
  document.querySelector(".gear1").style.transform = `rotate(${rg1}deg)`;
  let hg1 = (4 * gear1 * 25 * 7) / 44 - 24;
  let hg2 = (4 * gear2 * 25 * 7) / 44 - 24;
  document.querySelector(".gear1").style.height = hg1 + "px";
  document.querySelector(".gear1").style.width = hg1 + "px";
  document.querySelector(".gear2").style.height = hg2 + "px";
  document.querySelector(".gear2").style.width = hg2 + "px";
  let gearratio = reduce(gear2, gear1);
  document.querySelector(".details").innerHTML = `Gear ratio=
  ${gearratio[0]}:${gearratio[1]}`;
}
function reduce(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}
