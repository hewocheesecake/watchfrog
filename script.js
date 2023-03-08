// Select the elements from the DOM
const videoContainer = document.getElementById('video-container');
const frog = document.getElementById('frog');
const timeWatched = document.getElementById('time-watched');

// Set initial time to zero
let secondsWatched = 0;

// Update time watched every second
setInterval(() => {
  secondsWatched++;
  const minutes = Math.floor(secondsWatched / 60);
  const seconds = secondsWatched % 60;
  timeWatched.textContent = `Time Watched: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}, 1000);

// Play the gif when the page loads
frog.play();

// Add click listener to the video container
videoContainer.addEventListener('click', () => {
  // Do nothing since the gif is always playing
});
