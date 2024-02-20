const TIMEOUT = 30;
const refs = {
  loadText: document.querySelector('.loading-text'),
  bg: document.querySelector('.bg'),
};

let load = 0;

let int = setInterval(blurring, TIMEOUT);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  refs.loadText.innerHTML = `${load}%`;
  refs.loadText.style.opacity = scale(load, 0, 100, 1, 0);
  refs.bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

blurring();
