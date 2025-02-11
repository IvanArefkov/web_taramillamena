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

// Select all elements you want to animate
const elements = document.querySelectorAll('.hidden-element');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If element is in view, add the "visible" class to trigger animation
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, {
  threshold: 0.25  // Trigger when 50% of the element is in view
});

// Start observing each element
elements.forEach(element => observer.observe(element));

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
      // Prevent fullscreen on touch events (mobile swipes)
      video.addEventListener("touchstart", function (event) {
          event.preventDefault();
          event.stopPropagation();
      });

      // Prevent full-screen activation on play
      video.setAttribute("playsinline", "");
  });
});

