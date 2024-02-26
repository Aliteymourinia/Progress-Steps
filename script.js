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

const scale = () => {
  prev.classList.add("active:scale-95");
};

next.addEventListener("click", () => {
  currentActive++;
  enablePrev();
  updateProgress();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (0 < currentActive) {
    updateProgress();
    scale();
  } else if (0 == currentActive) {
    updateProgress();
    disablePrev();
  }
});
