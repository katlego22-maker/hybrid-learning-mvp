// === Mobile Menu Toggle ===
const nav = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Create a menu button for mobile
const menuBtn = document.createElement('div');
menuBtn.classList.add('menu-btn');
menuBtn.innerHTML = '☰';
navbar.insertBefore(menuBtn, navbar.children[1]);

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'center';
});

// === Contact Form Validation ===
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('⚠️ Please fill in all fields before sending your message.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('❌ Please enter a valid email address.');
    return;
  }

  alert('✅ Message sent successfully! (This is a demo alert — backend not yet connected.)');
  form.reset();
});
