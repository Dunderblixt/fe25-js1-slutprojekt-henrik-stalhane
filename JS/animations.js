
import { animate, stagger, splitText } from 'https://esm.sh/animejs';

const { chars } = splitText('h3', { words: false, chars: true });

animate(h3, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  loopDelay: 1000,
  loop: true
});
// make the h1 bounce
const h1 = document.querySelector('h1');
animate(h1, {
  // Property keyframes
  scale: [
    { to: 1.2, ease: 'easeInOutSine', duration: 500 },
    { to: 1, ease: 'easeInOutSine', duration: 500 }
  ],
    loop: true
});
