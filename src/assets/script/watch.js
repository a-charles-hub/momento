document.addEventListener('DOMContentLoaded', () => {
    /** Play Video */
    const playVideo = () => {
        // Select all video elements
        const videos = document.querySelectorAll('.video-player');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, {
            threshold: 0.5
        });

        videos.forEach(video => {
            observer.observe(video);
        });

        // Optional: Allow users to toggle sound manually
        videos.forEach(video => {
            video.addEventListener('click', () => {
                video.muted = !video.muted;
            });
        });
    }

    /** Return to Home */
    const bottomNavigation = () => {
        const home = document.getElementById('home-btn');
        const arrowBack = document.getElementById('arrow-btn');
        const userProfile = document.getElementById('user-profile-btn');

        home.addEventListener('click', () => {
            window.location.href = "home.html";
        })

        arrowBack.addEventListener('click', () => {
            window.location.href = "profile.html";
        })

        userProfile.addEventListener('click', () => {
            window.location.href = "profile.html";
        })
    }

    /** Initialize Functions */
    playVideo();
    bottomNavigation();
});
