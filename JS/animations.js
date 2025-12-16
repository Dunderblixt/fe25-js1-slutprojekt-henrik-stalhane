
import { animate} from 'https://esm.sh/animejs';

const h1 = document.querySelector('h1');
animate(h1, {
  scale: [
    { to: 1.2, ease: 'easeInOutSine', duration: 500 },
    { to: 1, ease: 'easeInOutSine', duration: 500 }
  ],
    loop: true
});
const rubrik = document.querySelector('.Rubrik');
animate(rubrik, {
    color: [
      { to: '#FF5733', ease: 'linear', duration: 1000 },
      { to: '#33FF57', ease: 'linear', duration: 1000 },
        { to: '#3357FF', ease: 'linear', duration: 1000 },
        { to: '#FF33A1', ease: 'linear', duration: 1000 }
    ],
      loop: true
  });