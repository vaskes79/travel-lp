const navigation = () => {
    const nav = document.querySelector('.navigation__btn');
    const navMenu = document.querySelector('.navigation');


    nav.addEventListener('click', () => {
        navMenu.classList.toggle('navigation--active');
    })
}

export default navigation;
