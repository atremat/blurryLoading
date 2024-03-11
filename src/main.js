import defaultImage from './img/valley.jpg'; //default image
import { getRandomImage } from './js/randomImageAPI'; //random image api

const refs = {
  loadText: document.querySelector('.loading-text'),
  bg: document.querySelector('.bg'),
  changeBtn: document.querySelector('.change-image-button'),
};

const TIMEOUT = 30;
let load;
let int;

async function changeImage() {
  refs.changeBtn.classList.add('hidden');

  load = 0;
  int = setInterval(blurring, TIMEOUT);

  try {
    const response = await getRandomImage();
    if (!response.statusText == 'OK') {
      refs.bg.style.backgroundImage = `url(${defaultImage})`;
    } else {
      refs.bg.style.backgroundImage = `url(${response.data})`;
    }
  } catch (e) {
    refs.bg.style.backgroundImage = `url(${defaultImage})`;
  }

  refs.bg.style.backgroundSize = 'cover';
  refs.bg.style.backgroundPosition = 'center';

  blurring();
}

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
    refs.changeBtn.classList.remove('hidden');
  }
  refs.loadText.innerHTML = `${load}%`;
  refs.loadText.style.opacity = scale(load, 0, 100, 1, 0);
  refs.bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

changeImage();

refs.changeBtn.addEventListener('click', changeImage);
