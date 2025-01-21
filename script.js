// scripts.js

// Get all video containers
const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
  const video = container.querySelector('video');
  const muteButton = container.querySelector('.mute-button');

  // Add event listener to the mute button
  muteButton.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = 'Sound: On';
    } else {
      video.muted = true;
      muteButton.textContent = 'Sound: Off';
    }
  });
});
