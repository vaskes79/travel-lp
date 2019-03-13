const navigation = () => {
  const nav = document.querySelector('.navigation__btn');
  const navMenu = document.querySelector('.navigation');

  nav.addEventListener('click', () => {
    navMenu.classList.toggle('navigation--active');
  });

  navMenu.addEventListener('click', e => {
    let targetClass = e.target.className;

    if (targetClass === 'navigation__link') {
      navMenu.classList.toggle('navigation--active');
    }
  });

  window.addEventListener('keydown', e => {
    const {keyCode, key} = e;
    if ((keyCode === 27) & navMenu.classList.contains('navigation--active')) {
      navMenu.classList.toggle('navigation--active');
    }
  });

  window.addEventListener('keydown', e => {
    const {keyCode, key} = e;
    if (keyCode === 77 ) {
      navMenu.classList.toggle('navigation--active');
    }
  });

};

export default navigation;
