function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm')
  .addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! (this is a demo)');
  });
