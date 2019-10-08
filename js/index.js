// Your code goes here

const body = document.querySelector('body');
const header = document.querySelector('header');
const navBar = document.querySelector('.nav-container');
const logo = document.querySelector('.logo-heading');
const navLink = document.querySelectorAll('.nav-link');
const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('img');
const footer = document.querySelector('footer');
const footerText = document.querySelector('footer p');

// Body
body.addEventListener('click', event => {
  body.style.background = 'gray';
});

// Header
header.addEventListener('mousedown', event => {
  header.style.background = 'black';
  event.stopPropagation();
});

header.addEventListener('mouseup', event => {
  header.style.background = '#FFFFFF';
  event.stopPropagation();
});

header.addEventListener('click', event => {
  event.stopPropagation();
});

// Logo
logo.addEventListener('click', event => {
  logo.style.color = 'red';
  event.stopPropagation();
});

logo.addEventListener('dblclick', event => {
  logo.style.color = 'black';
  event.stopPropagation();
});

// Nav
navLink.forEach(nav => {
  nav.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
  });
  nav.addEventListener('mouseover', event => {
    nav.style.transform = 'scale(1.5)';
    nav.style.transition = 'transform 0.5s';
  });
  nav.addEventListener('mouseout', event => {
    nav.style.transform = 'scale(1.0)';
    nav.style.transition = 'transform 0.5s';
  });
  nav.addEventListener('drag', event => {
    body.style.background = 'pink';
  });
  nav.addEventListener('dragend', event => {
    body.style.background = 'white';
    header.style.background = '#FFFFFF';
  });
});

// Buttons
buttons.forEach(btn => {
  btn.addEventListener('click', event => {
    btn.style.background = 'purple';
    if (
      buttons[0].style.background === 'purple' &&
      buttons[1].style.background === 'purple' &&
      buttons[2].style.background === 'purple'
    ) {
      const hiddenMsg = setInterval(() => {
        alert('ALL BUTTONS PURPLE!!!');
        buttons.forEach(btn => {
          btn.style.background = '#17A2B8';
        });
        clearInterval(hiddenMsg);
      }, 500);
    }
    event.stopPropagation();
  });
});

// Images
images.forEach(img => {
  img.addEventListener('mouseenter', event => {
    img.style.transform = 'scale(1.5)';
    img.style.transition = 'transform 0.5s';
  });
  img.addEventListener('mouseleave', event => {
    img.style.transform = 'scale(1.0)';
    img.style.transition = 'transform 0.5s';
  });
});

// Footer
footerText.addEventListener('click', event => {
  event.stopPropagation();
});

footerText.addEventListener('copy', event => {
  footer.style.background = 'blue';
  event.stopPropagation();
});
