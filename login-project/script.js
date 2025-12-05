// script.js
const openLogin = document.getElementById('openLogin');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

function showModal(){
  loginModal.style.display = 'flex';
  loginModal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden'; // stop page scroll
}

function hideModal(){
  loginModal.style.display = 'none';
  loginModal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

openLogin && openLogin.addEventListener('click', showModal);
closeLogin && closeLogin.addEventListener('click', hideModal);

// close when clicking backdrop
loginModal && loginModal.addEventListener('click', (e)=>{
  if(e.target === loginModal) hideModal();
});

// basic form submission (demo)
const form = document.getElementById('loginForm');
form && form.addEventListener('submit', e => {
  e.preventDefault();
  // show a tiny success visual (replace with real auth later)
  alert('Logged in (demo). Replace with real authentication.');
  hideModal();
});
