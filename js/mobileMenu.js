function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu__button');
  let links = menu.find('.burger__link');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu__active');

    if (menu.hasClass('burger-menu__active')) {
      $('html').css('overflow-y', 'hidden');
    } else {
      $('html').css('overflow-y', 'visible');
    }
  }
}

burgerMenu('.burger-menu');