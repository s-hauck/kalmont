console.log('JavaScript is running.');
var menu = document.querySelector('#menu');
menu.classList.add('hidden');
menu.setAttribute('aria-hidden', 'true');
menu.setAttribute('aria-labelledby', 'menu-toggle');
var menuFirstItem = document.querySelector('#menu a:first-of-type');
var header = document.querySelector('header');
var menuToggle = document.createElement('button');
menuToggle.classList.add('button');
menuToggle.setAttribute('id', 'menu-toggle');
menuToggle.innerHTML = 'Menu';
menuToggle.setAttribute('aria-label', 'Menu');
menuToggle.setAttribute('aria-controls', 'menu');
menuToggle.setAttribute('aria-expanded', 'false');
header.insertBefore(menuToggle, menu);
menuToggle.addEventListener('click', function () {
  console.log('menuToggle has been clicked.');
  if (menu.classList.contains('hidden')) {
    console.log('Menu is hidden, showing the menu.');
    menu.classList.remove('hidden');
    menu.setAttribute('aria-hidden', 'false');
    menu.setAttribute('aria-expanded', 'true');
    menuFirstItem.focus();
  } else {
    console.log('Menu is shown, hiding the menu.');
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('aria-expanded', 'false');
  }
});
