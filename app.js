const btn = document.querySelector(".btn");
const inpEle = document.querySelector("input");
const output = document.querySelector(".output");
const baseUrl =
  "https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec";

// const ID = "?id=100";
// window.addEventListener("DOMContentLoaded", loadData);

inpEle.classList.add("box");
inpEle.setAttribute("name", "nameOG"); // OG - OriGinal
inpEle.value = "Hello World";
output.append(inpEle);

for (let i = 0; i < 10; i++) {
  const myInput = document.createElement("input");
  myInput.setAttribute("type", "text");
  myInput.setAttribute("placeholder", "Value " + i);
  myInput.classList.add("box");
  myInput.setAttribute("name", "name" + (i + 1));
  myInput.value = "Value " + i;
  output.append(myInput);
}

output.append(btn);
btn.classList.add("box");

btn.addEventListener("click", loadData);

function loadData() {
  console.log("ready");
  const url = baseUrl + "?id=100&pg=1";
  getData(url);
}

// GET Method
function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
