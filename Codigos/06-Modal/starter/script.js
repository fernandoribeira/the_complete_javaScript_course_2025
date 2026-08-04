"use strict";

const variaveisDOM = {
    showModal: document.querySelectorAll(".show-modal"),
    modal: document.querySelector(".modal"),
    closeModal: document.querySelector(".close-modal"),
    overlay: document.querySelector(".overlay"),
};

const openModal = () => {
    variaveisDOM.modal.classList.remove("hidden");
    variaveisDOM.overlay.classList.remove("hidden");
};

const closeModal = () => {
    variaveisDOM.modal.classList.add("hidden");
    variaveisDOM.overlay.classList.add("hidden");
};

for (let i = 0; i < variaveisDOM.showModal.length; i++) {
    variaveisDOM.showModal[i].addEventListener("click", openModal);
}

variaveisDOM.closeModal.addEventListener("click", closeModal);

variaveisDOM.overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !variaveisDOM.modal.classList.contains("hidden")) closeModal();
});
