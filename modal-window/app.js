const btn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");

btn.addEventListener("click", openModal);

function openModal() {
  modal.classList.add("open");
  attachModalEvents();
}

function attachModalEvents() {
    modal.querySelector('.close').addEventListener("click", closeMyModal);
    document.addEventListener("keydown", closeByEsc);
    modal.addEventListener("click", closeModalOutSide);
}

function detachModalEvents() {
    modal.querySelector('.close').removeEventListener("click", closeMyModal);
    document.removeEventListener("keydown", closeByEsc);
    modal.removeEventListener("click", closeModalOutSide);
}

function closeMyModal() {
    modal.classList.remove("open");
    detachModalEvents();
}

function closeByEsc(event) {
  if (event.key === "Escape") {
    closeMyModal();
  }
}

function closeModalOutSide(event) {
  if (event.target === modal) {
    closeMyModal();
  }
}
