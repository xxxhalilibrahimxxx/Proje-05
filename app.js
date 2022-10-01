const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","pink","green","aqua","blue","red","purple"];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
  // sırayla arkaplan rengi seç
  if (sıra == 7) sıra = 0;
  const secilenRenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenRenk;
}