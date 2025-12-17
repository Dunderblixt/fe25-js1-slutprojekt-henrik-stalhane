
import { animate} from 'https://esm.sh/animejs';


const rubrik = document.querySelector('.Rubrik');
animate(rubrik, {
    color: [
      { to: '#FF5733', ease: 'linear', duration: 1000 },
      { to: '#33FF57', ease: 'linear', duration: 1000 },
        { to: '#cacea4ff', ease: 'linear', duration: 1000 },
        { to: '#d31c7dff', ease: 'linear', duration: 1000 }
    ],
      loop: true
  });