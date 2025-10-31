// === Mobile Menu Toggle ===
const nav = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

const menuBtn = document.createElement('div');
menuBtn.classList.add('menu-btn');
menuBtn.innerHTML = '☰';
navbar.insertBefore(menuBtn, navbar.children[1]);

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'center';
});

// === Contact Form Validation + Formspree Submission ===
const contactForm = document.querySelector('form[action*="formspree.io"]');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('input[name="name"]').value.trim();
  const email = contactForm.querySelector('input[name="email"]').value.trim();
  const message = contactForm.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert('⚠️ Please fill in all fields before sending your message.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('❌ Please enter a valid email address.');
    return;
  }

  // Send to Formspree
  const data = new FormData(contactForm);
  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      alert('✅ Message sent successfully! Thank you for reaching out.');
      contactForm.reset();
    } else {
      const json = await res.json();
      alert(json.error || '❌ Error sending message.');
    }
  } catch (err) {
    alert('❌ Network error.');
  }
});

// === Fade-in on scroll using IntersectionObserver ===
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();
