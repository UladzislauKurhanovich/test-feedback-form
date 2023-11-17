const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

export function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

export function closeModal() {
    console.log('click')
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};