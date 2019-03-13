const headerTL = new TimelineMax({paused: true});
const aboutTL = new TimelineMax({});
const featureTL = new TimelineMax({});
const toursTL = new TimelineMax({});
const storiesTL = new TimelineMax({});
const bookTL = new TimelineMax({});
const footerTL = new TimelineMax({});

const ctrlScroll = new ScrollMagic.Controller();

const defaultScene = {
  duration: '65%',
};

const aboutScene = new ScrollMagic.Scene({
  triggerElement: '#about',
  ...defaultScene,
});

const featuresScene = new ScrollMagic.Scene({
  triggerElement: '#features',
  ...defaultScene,
});

const toursScene = new ScrollMagic.Scene({
  triggerElement: '#tours',
  ...defaultScene,
});

const storiesScene = new ScrollMagic.Scene({
  triggerElement: '#stories',
  ...defaultScene,
});

const bookScene = new ScrollMagic.Scene({
  triggerElement: '#book',
  ...defaultScene,
});

const footerScene = new ScrollMagic.Scene({
  triggerElement: '#footer',
});

const animation = () => {
  headerTL
    .from('.header__logo', 1, {autoAlpha: 0, clearProps: 'all'})
    .from(
      '.header__text-box .heading',
      1,
      {autoAlpha: 0, y: '25%', clearProps: 'all'},
      0.3,
    )
    .from(
      '.header__text-box .heading__sub',
      0.5,
      {autoAlpha: 0, y: '50%', clearProps: 'all'},
      0.5,
    )
    .from(
      '.header__text-box .btn',
      0.5,
      {autoAlpha: 0, scale: 0.05, clearProps: 'all'},
      1,
    );

  aboutTL
    .from(
      '#about .heading-2',
      1,
      {autoAlpha: 0, x: -100, ease: Power2.easeOut, clearProps: 'all'},
      1,
    )
    .staggerFrom(
      '#about .heading-3',
      1,
      {autoAlpha: 0, x: -50, clearProps: 'all'},
      0.4,
    )
    .staggerFrom(
      '#about .paragraph',
      1,
      {autoAlpha: 0, x: -50, clearProps: 'all'},
      0.5,
    )
    .staggerFrom(
      '#about .composition__photo',
      0.5,
      {autoAlpha: 0, scale: 0.1, ease: Power2.easeOut, clearProps: 'all'},
      0.4,
    )
    .from('#about .btn-text', 0.8, {
      autoAlpha: 0,
      scale: 0.05,
      clearProps: 'all',
    });

  featureTL.staggerFrom(
    '#features .feature-box',
    0.5,
    {autoAlpha: 0, scale: 0.5, clearProps: 'all'},
    0.2,
  );

  toursTL
    .from(
      '#tours .heading-2',
      1,
      {autoAlpha: 0, x: -100, ease: Back.easeInOut, clearProps: 'all'},
      1,
    )
    .staggerFrom(
      '#tours .card',
      0.5,
      {autoAlpha: 0, rotationY: -90, clearProps: 'all'},
      0.2,
    )
    .from(
      '#tours .btn--green',
      0.5,
      {autoAlpha: 0, scale: 0.05, clearProps: 'all'},
      1.5,
    );

  storiesTL
    .from(
      '#stories .heading-2',
      1,
      {autoAlpha: 0, x: -100, ease: Power2.easeOut, clearProps: 'all'},
      1,
    )
    .staggerFrom(
      '#stories .story',
      0.5,
      {autoAlpha: 0, left: -100, clearProps: 'all'},
      0.2,
    );

  bookTL.from('#book .book', 0.5, {
    autoAlpha: 0,
    rotationX: -90,
    clearProps: 'all',
  });

  footerTL.from('#footer .footer__logo', 0.5, {
    autoAlpha: 0,
    scale: 0.5,
    clearProps: 'all',
  });

  aboutScene.setTween(aboutTL).addTo(ctrlScroll);

  featuresScene.setTween(featureTL).addTo(ctrlScroll);

  toursScene.setTween(toursTL).addTo(ctrlScroll);

  storiesScene.setTween(storiesTL).addTo(ctrlScroll);

  bookScene.setTween(bookTL).addTo(ctrlScroll);

  footerScene.setTween(footerTL).addTo(ctrlScroll);

  setTimeout(() => headerTL.play(), 100);
};

export default animation;
