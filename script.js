// variables
const buttonUp = document.querySelector(".buttons__up");
const buttonDown = document.querySelector(".buttons__down");
const computerImage = document.querySelector(".computer__image-top");

const portal = document.querySelector(".voice-conroller__image-portal");
const girl = document.querySelector(".voice-conroller__image-top");
const girlMove = new TimelineMax({repeat:-1});

// functions
const floatAnimation = () => {
    girlMove
   .to(".voice-conroller__image > .voice-conroller__image-top", 3, { y:'0', x:'0', ease:Power1.easeInOut})
   .to(".voice-conroller__image > .voice-conroller__image-top", 2, { y:'+=15', x:'-=20', ease:Power1.easeInOut})
   .to(".voice-conroller__image > .voice-conroller__image-top", 3, { y:'-=15', x:'+=20', ease:Power1.easeInOut})
   .to(".voice-conroller__image > .voice-conroller__image-top", 3, { y:'+=20', x:'-=10', ease:Power1.easeInOut})
   .to(".voice-conroller__image > .voice-conroller__image-top", 3, { y:'-=15', x:'+=15', ease:Power1.easeInOut})
   .to(".voice-conroller__image > .voice-conroller__image-top", 3, { y:'+=15', x:'-=5', ease:Power1.easeInOut})
 TweenLite.to(girlMove, 27, {ease:Power1.easeInOut})
}

// code
// computer
let position = 0;

buttonUp.onclick = () => {
    position -= 30;

    if (position !== 0) {
        buttonUp.disabled = false;
        buttonDown.disabled = false;
    } else {
        buttonUp.disabled = true;
    }

    gsap.to(computerImage, {duration: 1, y: position});
};

buttonDown.onclick = () => {
    position += 30;

    if (position !== 60) {
        buttonUp.disabled = false;
        buttonDown.disabled = false;
    } else {
        buttonDown.disabled = true;
    }

    gsap.to(computerImage, {duration: 1, y: position});
};

// voice-controller 
TweenLite.to(portal, 2, {scale:1.5});
setTimeout(() => {
    TweenLite.to(portal, 2, {scale:1});  
}, 2500);

gsap.fromTo(girl, {y: 800}, {delay: 1, duration: 1, y: 0});
setTimeout(() => {
    setInterval(()=> floatAnimation(), 0);  
}, 2000);

