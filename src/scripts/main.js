'use strict';

const navLink = document.querySelectorAll('.nav__link-js');
const checkbox = document.querySelector('.navigation__toggler');
const windowInnerWidth = window.innerWidth;

if (windowInnerWidth < 1030) {
  navLink.forEach(el => {
    el.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
    });
  });
}
