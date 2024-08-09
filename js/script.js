const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

const header = document.querySelector('header');
let prevScrollpos = window.scrollY;
let isHeaderHidden = false;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
     

    header.classList.remove('hidden');
    isHeaderHidden = false;
  } else {
    
    if (currentScrollPos > 50 && !isHeaderHidden) {
      header.classList.add('hidden');
      isHeaderHidden = true;
    }
  }
  prevScrollpos = currentScrollPos;
});

header.addEventListener('mouseenter', function() {
  header.classList.remove('hidden');
});

header.addEventListener('mouseleave', function() {
  if (window.scrollY > 50) {
    header.classList.add('hidden');
  }
});