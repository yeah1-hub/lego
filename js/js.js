
/* ===== 햄버거 / 모바일 메뉴 ===== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
   header.classList.toggle('is-mobile-open');
});



const menuLinks = document.querySelectorAll('.menu > li > [data-menu]');
const allSubmenus = document.querySelectorAll('.menu .submenu');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      const submenu = link.nextElementSibling; 
      const parentLi = link.closest('li');
      if (submenu && submenu.classList.contains('submenu')) {
        // 1. 다른 서브메뉴/부모 li는 모두 닫기
        allSubmenus.forEach(sm => {
          if (sm !== submenu) {
            sm.classList.remove('active');
            const li = sm.closest('li');
            if (li) li.classList.remove('active');
          }
        });

        // 2. 클릭한 서브메뉴 & 부모 li에 active 토글
        submenu.classList.toggle('active');
        if (parentLi) {
          parentLi.classList.toggle('active');
        }
      }
    }
    
  });
});


/* ===== 로그인 모달 ===== */
const headerLoginBtn = document.querySelector('header .main-btn1');
const loginModal = document.querySelector('.login-modal');
const modalCloseBtn = document.querySelector('.modal-close');

headerLoginBtn.addEventListener('click', () => {
  loginModal.classList.add('active');
});

modalCloseBtn.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

loginModal.addEventListener('click', e => {
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
  }
});

/* ===== 데스크톱 헤더 드롭다운 ===== */
const headerMenuLinks = header.querySelectorAll('[data-menu]');

headerMenuLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      header.classList.add('is-open');
    }
  });

  link.addEventListener('focus', () => {
    if (window.innerWidth > 768) {
      header.classList.add('is-open');
    }
  });
});

header.addEventListener('mouseleave', () => {
  if (window.innerWidth > 768) {
    header.classList.remove('is-open');
  }
});




/* ===== 데스크톱 스크롤 헤더 ===== */
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});


/* ===== Swiper ===== */
new Swiper(".best-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  watchOverflow: true,
  breakpoints: {
    480: { slidesPerView: 2.5 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 8 }
  }
});

new Swiper('.product-swiper', {
  slidesPerView: 1,
  spaceBetween: 26,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2.2 },
    1024: { slidesPerView: 5 },
  },
});

/* ===== AOS ===== */
AOS.init({
  duration: 1400,
  easing: 'ease-out-cubic',
  once: true
});
