const btn = document.getElementById("myBtn");
const spoilerWindow = document.getElementById("spoiler");

btn.addEventListener("click", openSpoiler);

function openSpoiler() {
  spoilerWindow.classList.add("open");
  attachSpoilerEvent();
}

function attachSpoilerEvent() {
  btn.addEventListener("click", closeSpoiler);
  document.addEventListener("keydown", closeSpoilerByEscape);
}

function detachSpoilerEvent() {
  btn.removeEventListener("click", closeSpoiler);
  document.removeEventListener("keydown", closeSpoilerByEscape);
}

function closeSpoiler() {
  spoilerWindow.classList.remove("open");
  detachSpoilerEvent();
}

function closeSpoilerByEscape() {
  closeSpoiler();
}
