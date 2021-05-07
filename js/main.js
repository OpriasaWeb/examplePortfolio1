/** @format */

$(document).ready(function () {
  $("#wavy").parent().addClass("animated bounce");
});

function toggleMore() {
  const sec = document.getElementById("sec");
  sec.classList.toggle("active");
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function toggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
