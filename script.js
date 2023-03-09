const videoContainer = document.getElementById('video-container');
const frog = document.getElementById('frog');
const timeWatched = document.getElementById('time-watched');

let secondsWatched = 0;

setInterval(() => {
  secondsWatched++;
  const minutes = Math.floor(secondsWatched / 60);
  const seconds = secondsWatched % 60;
  timeWatched.textContent = `Time Watched: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}, 1000);

frog.play();

videoContainer.addEventListener('click', () => {
  // Do nothing since the gif is always playing
});
