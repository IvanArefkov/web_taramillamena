// scripts.js

const muteButtons = document.querySelectorAll('.mute-button');

muteButtons.forEach(muteButton => {
  const video = muteButton.previousElementSibling; // Select the video directly before the button

  let startX, startY, isSwipe = false;

  // Detect when the user touches the button
  muteButton.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    isSwipe = false;
  });

  // Detect if the user is swiping
  muteButton.addEventListener('touchmove', (event) => {
    let moveX = event.touches[0].clientX;
    let moveY = event.touches[0].clientY;
  
    // If movement is more than a few pixels, mark it as a swipe
    if (Math.abs(moveX - startX) > 10 || Math.abs(moveY - startY) > 10) {
      isSwipe = true;
      event.preventDefault(); // Stop hover effect while swiping
    }
  });
  

  muteButton.addEventListener('touchend', (event) => {
    // If it was a swipe, do nothing
    if (isSwipe) return;
  
    // If it was a tap, toggle mute
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = 'Sound: On';
    } else {
      video.muted = true;
      muteButton.textContent = 'Sound: Off';
    }
  });
  

  // Prevent button from being highlighted (removes focus)
  muteButton.addEventListener('mousedown', (event) => {
    event.preventDefault();
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

function startVideos() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
      video.muted = true;  // Required for autoplay
      video.play().catch(error => console.log("Autoplay blocked:", error));
  });

  // Remove event listener after first interaction
  document.removeEventListener("touchstart", startVideos);
  document.removeEventListener("scroll", startVideos);
}

document.addEventListener("touchstart", startVideos, { once: true });
document.addEventListener("scroll", startVideos, { once: true });

