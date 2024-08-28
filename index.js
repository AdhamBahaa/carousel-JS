let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-section--img img");
const totalSlides = slides.length;

const dotsContainer = document.querySelector(".dots-area");
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots-area .dot");

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-section--img"
  ).style.transform = `translateX(${offset}%)`;
  updateDots();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
