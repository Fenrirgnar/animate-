'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let macAnimation;
let phoneAnimation;

btnMacbook.addEventListener('click', () => {
 if(!macAnimation) {
    macAnimation = images[1].animate(
        [{transform: 'translateY(0px) translateX(0px) rotate(0deg)', filter: 'opacity(100%)'},
        {transform: 'translateY(100px) translateX(100px) rotate(90deg)', filter: 'opacity(60%)'},
        {transform: 'translateY(150px) translateX(150px) rotate(180deg)', filter: 'opacity(10%)'},
        {transform: 'translateY(-100px) translateX(-100px) rotate(270deg)', filter: 'opacity(60%)'},
        {transform: 'translateY(0px) translateX(0px) rotate(360deg)', filter: 'opacity(100%)'}
    ],
        {
            duration: 3000,
            interation: Infinity
        }
    );
} else if (macAnimation.playState === 'paused') {
    macAnimation.play();
} else {
    macAnimation.pause();
}
});

btnPhone.addEventListener('click', () => {
    if(!phoneAnimation) {
       phoneAnimation = images[0].animate(
           [{transform: 'translateY(0px) translateX(0px) rotate(0deg)', filter: 'opacity(100%)'},
           {transform: 'translateY(100px) translateX(100px) rotate(90deg)', filter: 'opacity(60%)'},
           {transform: 'translateY(150px) translateX(150px) rotate(180deg)', filter: 'opacity(10%)'},
           {transform: 'translateY(-100px) translateX(-100px) rotate(270deg)', filter: 'opacity(60%)'},
           {transform: 'translateY(0px) translateX(0px) rotate(360deg)', filter: 'opacity(100%)'}
       ],
           {
               duration: 3000,
               interation: Infinity
           }
       );
   } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
   } else {
        phoneAnimation.pause();
   }
   });
