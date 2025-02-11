// Select all video elements
const videos = document.querySelectorAll('.video-player');

// Create an IntersectionObserver to monitor the videos
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const video = entry.target;

        // Check if the video is in view (intersection ratio greater than 0)
        if (entry.isIntersecting) {
            // Reset the video and play it when it comes into view
            video.currentTime = 0; // Reset the video to the start
            video.muted = false; // Unmute the video when it plays
            video.play(); // Start playing the video from the beginning
        } else {
            // Pause the video when it is out of view
            video.pause();
        }
    });
}, {
    threshold: 0.5  // The video will start playing when 50% of it is visible
});

// Observe each video element
videos.forEach(video => {
    observer.observe(video);
});
