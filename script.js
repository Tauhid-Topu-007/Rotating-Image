const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x += 45;
  clearTimeout(timer);
  updateGallary();
});
nextEl.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updateGallary();
});

function updateGallary() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x -= 45;
    updateGallary();
  }, 3000);
}
updateGallary();
