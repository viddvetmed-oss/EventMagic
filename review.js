
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModal");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // блокує стандартну відправку форми
    modal.style.display = "flex"; // показує вікно
    form.reset(); // очищає поля форми
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // закриває вікно
  });

  // Закриття при кліку поза віконцем
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


const track = document.querySelector('.reviews__track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

const totalReviews = document.querySelectorAll('.review').length;
const reviewsPerView = 3; // скільки відгуків показуємо одночасно

prevBtn.addEventListener('click', () => {
    if(index > 0) {
        index--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if(index < totalReviews - reviewsPerView) {
        index++;
        updateSlider();
    }
});

function updateSlider() {
    const width = document.querySelector('.review').offsetWidth + 20; // враховуємо margin
    track.style.transform = `translateX(-${index * width}px)`;
}