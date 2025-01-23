document.addEventListener('DOMContentLoaded', () => {
    /** View More - Profile Description Toggle */

    const viewMore = () => {
        const fullDescription = document.getElementById('description');
        const viewMoreBtn = document.getElementById('see-more-btn');

        const maxChars = 150;

        // Store the original full text
        const fullText = fullDescription.textContent;

        // Truncate text if longer than maxChars
        if(fullText.length > maxChars) {
            const truncantedText = fullText.slice(0, maxChars) + '...';
            //  Store full text
            fullDescription.dataset.fullDescription = fullText;
            // Store truncated text
            fullDescription.dataset.truncantedText = truncantedText;
            // Initially truncated
            fullDescription.dataset.isTruncated = "true";
            // Show truncated text
            fullDescription.textContent = truncantedText;
        }

        // Add click event listener
        viewMoreBtn.addEventListener('click', () => {
            const isTruncated = fullDescription.dataset.isTruncated === "true";

            if(isTruncated) {
                fullDescription.textContent = fullDescription.dataset.fullDescription;
                fullDescription.classList.add('expanded');
                viewMoreBtn.textContent = "See Less";
            } 
            else {
                // Show truncated text
                fullDescription.textContent = fullDescription.dataset.truncantedText;
                fullDescription.classList.remove('expanded');
                viewMoreBtn.textContent = "See More";
            }

            // Toggle state
            fullDescription.dataset.isTruncated = !isTruncated;
        })
    }
 
    /** Return to Home Button */
    const returnToHome = () => {
        const returnBtn = document.getElementById('return-btn');

        returnBtn.addEventListener('click', () => {
            window.location.href = "home.html";
        })
    }

    /** CTA - Videos */
    // If user clicks "Videos" button, it displays only the videos user has posted.
    // Data will be fetched from backend accordingly

    const ctaVideo = () => {
        // ID name might be confusing, however, it is due to CTA in profile page uses the same javascript as CTA in home page
        // See main.js for more info
        const photoBtn = document.getElementById('btn-explore');
        const videoBtn = document.getElementById('btn-discover');
        const postVideos = document.querySelectorAll('.user-post.videos');
        const postPhotos = document.querySelectorAll('.user-post.photos');

        const toggleView = (showExplore) => {
            postPhotos.forEach(post => post.style.display = showExplore ? 'grid' : 'none');
            postVideos.forEach(post => post.style.display = showExplore ? 'none' : 'grid');
        }

        photoBtn.addEventListener('click', () => toggleView(true));
        videoBtn.addEventListener('click', () => toggleView(false));
    }

    /** Account Menu Modal Toggle */
    const accountMenuToggle = () => {
        const profileMenuBtn = document.getElementById('profile-menu-btn');
        const accountMenuModal = document.getElementById('modal');

        profileMenuBtn.addEventListener('click', () => {
            accountMenuModal.style.display = "block";
        })
    }

    /* Viewing Post */
    const viewingPost = () => {
        const modal = document.getElementById('full-post');
        const imageModal = document.getElementById('image-modal');
        const posts = document.querySelectorAll('.card-item');
        const closeBtn = document.getElementById('close');

        posts.forEach(post => {
            post.addEventListener('click', function () {
                imageModal.style.display = "flex"; 
                modal.src = this.src; // Set the modal image source to the clicked image source
                console.log('clicked');
            });
        });

        // Close modal when clicking outside the image
        closeBtn.addEventListener('click', () => {
            imageModal.style.display = "none"; // Hide the modal overlay
            modal.src = ""; // Clear the modal image source
        });

        // Optional: Close modal when clicking outside the image
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) { // Ensure the click is on the overlay, not the image
                imageModal.style.display = "none"; // Hide the modal overlay
                modal.src = ""; // Clear the modal image source
            }
        });
    }
 
    /** Initialize Functions */
    viewMore();
    returnToHome();
    ctaVideo();
    viewingPost();
});