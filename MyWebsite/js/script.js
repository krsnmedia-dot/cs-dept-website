/* ---------------- Hamburger Menu Toggle ---------------- */
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

/* ---------------- Event Modal / Lightbox ---------------- */

// Array of event images (update paths as needed)
const images = [
  "images/event1.jpg",
  "images/event2.jpg",
  "images/event3.jpg",
  "images/event4.jpg"
];

let currentIndex = 0;

// Open modal with selected image
function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = images[currentIndex];
}

// Close modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Navigate modal images
function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  document.getElementById('modal-img').src = images[currentIndex];
}

/* ---------------- Keyboard Navigation ---------------- */
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('modal');
  if(modal.style.display === 'flex') {
    if(e.key === "ArrowLeft") { changeSlide(-1); }
    else if(e.key === "ArrowRight") { changeSlide(1); }
    else if(e.key === "Escape") { closeModal(); }
  }
});
window.addEventListener('load', () => {
  setTimeout(() => {
    const heroText = document.querySelector('.hero-content');
    heroText.style.display = 'none';
  }, 5000); // disappears after 5 seconds
});
