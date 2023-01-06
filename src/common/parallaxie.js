export default function parallaxie(selector) {
  let elementBg = document.querySelector(selector);
  if (elementBg) {
    let position = elementBg.getBoundingClientRect().top * 0.75;

    elementBg.style.backgroundSize = 'cover';
    elementBg.style.backgroundRepeat = 'no-repeat';
    elementBg.style.backgroundAttachment = 'fixed';
    elementBg.style.backgroundPosition = `center ${position}px`;

    window.addEventListener('scroll', () => {
      let element = document.querySelector(selector);

      position = element.getBoundingClientRect().top * 0.75;
      element.style.backgroundPosition = `center ${position}px`;
    });
  }
}