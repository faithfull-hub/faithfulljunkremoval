const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 30 ? 'rgba(3,3,3,.92)' : 'rgba(3,3,3,.78)';
});

const form = document.querySelector('#quote');
form?.addEventListener('submit', () => {
  const btn = form.querySelector('button[type="submit"]');
  if (btn) btn.textContent = 'Sending...';
});
