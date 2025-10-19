document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // щоб не оновлювала сторінку
  document.getElementById("successModal").style.display = "flex";
  this.reset(); // очистити форму після відправки
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("successModal").style.display = "none";
});