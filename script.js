const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 0;
const pixelValues = [20, 260, 580, 850];

const updateProgress = () => {
  progress.style.width = pixelValues[currentActive] + "px";
  circles.forEach((circle, index) => {
    circle.style.borderColor = index <= currentActive ? "#3B83F6" : "";
  });
};
const enablePrev = () => {
  prev.disabled = false;
  prev.style.border = prev.style.borderStyle = "#3B83F6";
};

const disablePrev = () => {
  prev.disabled = true;
  prev.style.border = prev.style.borderStyle = "";
};
next.addEventListener("click", () => {
  currentActive++;
  enablePrev();
  updateProgress();
});
prev.addEventListener("click", () => {
  currentActive--;
  index > currentActive ? enablePrev() : "";
  updateProgress();
  disablePrev();
});
// prev.addEventListener("click", () => {
//   currentActive--;
//   if (currentActive > 0) {
//     prev.classList.add("active:scale-95");
//     progress.style.width = pixelValues[currentActive] + "px";
//   } else {
//     prev.disabled = true;
//     progress.style.width = "";
//     prev.classList.remove("active:scale-95");
//   }
//   circles.forEach((circle, index) => {
//     if (index > currentActive) {
//       circle.style.borderColor = "";
//     }
//   });
