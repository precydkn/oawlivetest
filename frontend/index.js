/*---Resizing elements according to browser screen size---*/
function scaleMainWrapper() {
  const baseWidth = 1920;
  const baseHeight = 1080;
  // const baseWidth = 3964;
  // const baseHeight = 2230;
  const wrapper = document.querySelector('.main-wrapper');

  const scale = Math.min(
    window.innerWidth / baseWidth,
    window.innerHeight / baseHeight
  );

  wrapper.style.setProperty('--base-scale', scale);
}

// run once and on resize
scaleMainWrapper();
window.addEventListener('resize', scaleMainWrapper);
/*---*/


/*---Gamecard Animations---*/
const root = document.getElementById('root');
const accCard = document.querySelector('.gamecard-acc img');
const oawCard = document.querySelector('.gamecard-oaw img');

// default image urls
const accDefault = 'https://i.postimg.cc/vHqhqQvh/gamecard-acc.png';
const oawDefault = 'https://i.postimg.cc/jdgcgshM/gamecard-oaw.png';
const bgDefault = 'url("https://i.postimg.cc/fbhw6hzJ/bg-home-2.png")';

// hover versions
const accFront = 'https://i.postimg.cc/fT2C2wv5/gamecard-f-acc.png';
const accDimmed = 'https://i.postimg.cc/BQYpYqCc/gamecard-dimmed-acc.png';
const oawFront = 'https://i.postimg.cc/02WnW8Ct/gamecard-f-oaw.png';
const oawDimmed = 'https://i.postimg.cc/9F8b8WBY/gamecard-dimmed-oaw.png';

// bg variants
const bgGamecardHover = 'url("https://i.postimg.cc/C1jVTwH1/bg-home-dimmed.png")';

// reset all imgs + bg
function resetImages() {
    accCard.src = accDefault;
    oawCard.src = oawDefault;
    root.style.setProperty('--bg-url', bgDefault);
}

// hover on acc gamecard
accCard.addEventListener('mouseenter', () => {
    accCard.src = accFront;
    oawCard.src = oawDimmed;
    root.style.setProperty('--bg-url', bgGamecardHover);
});

// hover on oaw gamecard
oawCard.addEventListener('mouseenter', () => {
    oawCard.src = oawFront;
    accCard.src = accDimmed;
    root.style.setProperty('--bg-url', bgGamecardHover);
});

// add func that reset all imgs to default on mouseleave
accCard.addEventListener('mouseleave', resetImages);
oawCard.addEventListener('mouseleave', resetImages);
/*---*/

/*---Clicking gamecards functions + animations---*/
const gameboy = document.querySelector('.main-wrapper');
const oawGC = document.querySelector('.gamecard-oaw');
const accGC = document.querySelector('.gamecard-acc');
// const oawScreen = document.querySelector('.screen-oaw');
// const accScreen = document.querySelector('.screen-acc');
// const tb = document.querySelector('.screen p'); for debugging

/*// handle zoom in/out animation
function zoomGameboyIn() {
  gameboy.classList.add('zoomed');
}

function zoomGameboyOut() {
  gameboy.classList.remove('zoomed');
}*/

oawGC.addEventListener('click', () => {
  // tb.innerHTML = 'oaw card clicked!'; for debugging
  // zoomGameboyIn();
  // oawScreen.style.display = 'block';
  setTimeout(function () {
    window.location.href = "frontend/pages/start.html";
  }, 2000);
});

accGC.addEventListener('click', () => {
  // tb.innerHTML = 'acc card clicked!'; for debugging
  // zoomGameboyIn();
  // accScreen.style.display = 'block';
  setTimeout(function () {
    window.location.href = "frontend/pages/user start.html";
  }, 2000);
});