const headerTL = new TimelineMax({paused: true});
const aboutTL = new TimelineMax({});
const featureTL = new TimelineMax({});
const toursTL = new TimelineMax({});
const storiesTL = new TimelineMax({});
const bookTL = new TimelineMax({});
const footerTL = new TimelineMax({});

const ctrlScroll = new ScrollMagic.Controller();

const aboutScene = new ScrollMagic.Scene({
    triggerElement: '#about',
    duration: '65%',
});

const animation = () => {

    headerTL
        .from('.header__logo', 1, {autoAlpha: 0, clearProps:"all"})
        .from('.header__text-box .heading', 1, {autoAlpha: 0, y: '25%', clearProps:"all"}, .3)
        .from('.header__text-box .heading__sub', 0.5, {autoAlpha: 0, y: '50%', clearProps:"all"}, .5)
        .from('.header__text-box .btn', .05, {autoAlpha: 0, scale: .05, clearProps:"all"}, 1);

    aboutTL
        .from('#about .heading-2', 1, {autoAlpha: 0, x: -100, ease: Power2.easeOut, clearProps:"all"}, 1)
        .staggerFrom('#about .heading-3', 1, {autoAlpha: 0, x: -50, clearProps:"all"}, 0.4)
        .staggerFrom('#about .paragraph', 1, {autoAlpha: 0, x: -50, clearProps:"all"}, 0.5)
        .staggerFrom('#about .composition__photo', .5, {autoAlpha: 0, scale: .1, ease: Power2.easeOut, clearProps:"all"}, 0.4)
        .from('#about .btn-text', .8, {autoAlpha: 0, scale: .05, clearProps:"all"});

    aboutScene
        .setTween(aboutTL)
        // .addIndicators({})
        .addTo(ctrlScroll);
        
    setTimeout(()=> headerTL.play(), 100);
}

export default animation;