const list = document.querySelector('ul');
const firstEl = document.querySelector('a');
positionBubble(firstEl);

list.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'A') {
    positionBubble(target);
  }
})

function positionBubble(el) {
  const bubble = document.querySelector('.bubble');
  const { width, left } = el.getBoundingClientRect();
  bubble.style.cssText = `width: ${width}px; left: ${left}px`;
}