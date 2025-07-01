function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}
const emojis = ['❤️','💋','💕','💖','💗','💓'];
function spawnEmoji() {
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  const isMobile = window.innerWidth <= 600;
  const left = randomBetween(0, 100); // %
  const size = isMobile ? randomBetween(3.5, 6) : randomBetween(2.2, 4.2); // rem
  emoji.style.left = left + 'vw';
  emoji.style.bottom = '0';
  emoji.style.fontSize = size + 'rem';
  document.getElementById('emojiAnim').appendChild(emoji);
  setTimeout(() => emoji.remove(), 2200);
}
function startEmojis() {
  setInterval(() => {
    const isMobile = window.innerWidth <= 600;
    const count = isMobile ? randomBetween(4, 7) : 2+Math.random()*2;
    for(let i=0;i<count;i++) spawnEmoji();
  }, 500);
}
window.onload = () => {
  setTimeout(startEmojis, 500);
}; 