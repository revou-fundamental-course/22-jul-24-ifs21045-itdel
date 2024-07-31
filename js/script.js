document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pilihan = document.getElementById('pilihan').value;

    if (name && email && pilihan) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
});
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  const offset = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  slideIndex++;
  showSlides();
});

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  showSlides();
});

// Initial call to show the first slide
showSlides();

// Optional: Automatically change slides every 3 seconds
setInterval(() => {
  slideIndex++;
  showSlides();
}, 3000);

