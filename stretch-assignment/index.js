const blocks = document.querySelector('.blocks');
const block = document.querySelectorAll('.block');
const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');

blockRed.addEventListener('click', e => {
  blocks.prepend(blockRed);
});
blockBlue.addEventListener('click', e => {
  blocks.prepend(blockBlue);
});
blockGreen.addEventListener('click', e => {
  blocks.prepend(blockGreen);
});
blockPink.addEventListener('click', e => {
  blocks.prepend(blockPink);
});
blockGray.addEventListener('click', e => {
  blocks.prepend(blockGray);
});
