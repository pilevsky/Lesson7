// let inp = document.querySelector('.text');
// let btn = document.querySelector('.plus');
// let div = document.querySelector('div');
// btn.onclick = function(){
// let a = inp.value;
// div.innerHTML = a;
// };

let a;
let b;
let e;
let f;
let m;
let inp = document.querySelector(".text");
let btn1 = document.querySelector(".plus");
let btn2 = document.querySelector(".minus");
let btn3 = document.querySelector(".umno");
let btn4 = document.querySelector(".razd");
let btn5 = document.querySelector(".ravn");
let btn6 = document.querySelector(".clear");
let div = document.querySelector("div");
btn1.onclick = function () {
  a = inp.value;
  f = null;
  e = null;
  n = null;
  getInput = inp;
  getInput.value = "";
};
btn2.onclick = function () {
  e = inp.value;
  a = null;
  f = null;
  n = null;
  getInput = inp;
  getInput.value = "";
};
btn3.onclick = function () {
  f = inp.value;
  a = null;
  e = null;
  n = null;
  getInput = inp;
  getInput.value = "";
};
btn4.onclick = function () {
  n = inp.value;
  a = null;
  e = null;
  f = null;
  getInput = inp;
  getInput.value = "";
};
btn5.onclick = function () {
  b = inp.value;
  let c = +a + +b;
  let d = +e - +b;
  let h = +f * +b;
  let m = +n / +b;
  if (a != null) {
    getInput.value = c;
  } else if (e != null) {
    getInput.value = d;
  } else if (f != null) {
    getInput.value = h;
  } else if (n != null) {
    getInput.value = m;
  }
};
btn6.onclick = function () {
  getInput.value = "";
};

btn1.style.padding = "5px";
btn2.style.padding = "5px";
btn3.style.padding = "5px";
btn4.style.padding = "5px";
btn5.style.padding = "5px";
btn6.style.padding = "5px";
