// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

// Убираем возможность фокуса на элементах SVG и path, потому что он там не нужен.
// По уму это должно быть прописано в HTML или при импорте SVG с помощью вебпака, но мне лень. Поэтому пока так.
document.querySelectorAll('svg, path').forEach((el) => {
  el.setAttribute('focusable', 'false');
  el.setAttribute('tabindex', "-1");
})
document.documentElement.blur();
