// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Welcome message
window.addEventListener('load', () => {
  console.log("Nova Business Pro website loaded successfully!");
});
