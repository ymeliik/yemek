function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}
const emojis = ['❤️','💋','💕','💖','💗','💓'];
function spawnEmoji() {
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  const left = randomBetween(10, 85); // %
  const size = randomBetween(2.2, 4.2); // rem
  emoji.style.left = left + 'vw';
  emoji.style.bottom = '-3rem';
  emoji.style.fontSize = size + 'rem';
  document.getElementById('emojiAnim').appendChild(emoji);
  setTimeout(() => emoji.remove(), 2200);
}
function startEmojis() {
  setInterval(() => {
    for(let i=0;i<2+Math.random()*2;i++) spawnEmoji();
  }, 500);
}
window.onload = () => {
  setTimeout(startEmojis, 500);
}; 