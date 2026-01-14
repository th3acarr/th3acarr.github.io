const lightning = document.querySelector('.lightning');

setInterval(() => {
  lightning.style.opacity = Math.random() > 0.5 ? '1' : '0';

  setTimeout(() => {
    lightning.style.opacity = '0';
  }, 120);
}, 2800);

const upperLid = document.getElementById("upper-lid");

function blink() {
  upperLid.style.transition = "transform 0.08s ease-in";
  upperLid.style.transform = "translateY(10px)";

  setTimeout(() => {
    upperLid.style.transition = "transform 0.16s ease-out";
    upperLid.style.transform = "translateY(0)";
  }, 90);
}

function randomBlink() {
  blink();

  if (Math.random() < 0.25) {
    setTimeout(blink, 220);
  }

  const nextBlink = Math.random() * 4500 + 2500;
  setTimeout(randomBlink, nextBlink);
}

randomBlink();
