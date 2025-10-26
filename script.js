let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const buttons = document.querySelectorAll('.filter-buttons button');

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close Lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Change Image (Next/Prev)
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;
  lightboxImg.src = images[currentIndex].src;
}

// Filter Gallery by Category
function filterImages(category) {
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.display = 
      category === 'all' || item.classList.contains(category) ? 'block' : 'none';
  });
}

// Toggle Filter Effect (Bonus)
const filterToggle = document.getElementById('filterToggle');
let filtered = false;

filterToggle.addEventListener('click', () => {
  filtered = !filtered;
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.filter = filtered ? 'grayscale(100%)' : 'none';
  });
});
