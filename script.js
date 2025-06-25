function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDelay = Math.random() * 2 + 's';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 1000);
