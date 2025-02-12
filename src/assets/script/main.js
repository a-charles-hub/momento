/**
 * 1. CTA Toggle
 * 2. Post Menu Modal
 * 3. Post Menu Modal - Item hover
 * 4. Add Post Modal
 * 5. Viewing Video Post
 * 5. Home Button - Scroll to Top
 * 6. Comments Modal
 * 7. Comment Post Metrics
 */

document.addEventListener('DOMContentLoaded', () => {
    /** Toggle between Explore and Discover */
    const ctaToggle = () => {
        const btnExplore = document.getElementById('btn-explore');
        const btnDiscover = document.getElementById('btn-discover');
        const postsExplore = document.querySelectorAll('.posts.explore');
        const postsDiscover = document.querySelectorAll('.posts.discover');
        const bottomNavbar = document.getElementById('bottom-navbar');

        const toggleView = (showExplore) => {
            postsExplore.forEach(post => post.style.display = showExplore ? 'block' : 'none');
            postsDiscover.forEach(post => post.style.display = showExplore ? 'none' : 'block');
            btnExplore.classList.toggle('btn-active', showExplore);
            btnExplore.classList.toggle('btn-inactive', !showExplore);
            btnDiscover.classList.toggle('btn-active', !showExplore);
            btnDiscover.classList.toggle('btn-inactive', showExplore);
            bottomNavbar.classList.toggle('sticky', showExplore);
            bottomNavbar.classList.toggle('fixed', !showExplore);
        };

        btnExplore.addEventListener('click', () => toggleView(true));
        btnDiscover.addEventListener('click', () => toggleView(false));
    };


    /** Home Button - Scroll to Top */
    const scrollToTop = () => {
        const homeBtn = document.getElementById('home-btn');

        homeBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }

    /** Viewing User Profile */
    // Check if user is logged in
    // Pass profile ID and admin ID

    const viewProfile = () => {
        const userProfile = document.getElementById('user-profile-btn');
        const profile = document.querySelectorAll('.profile');

        // Check if profile ID is the same as admin ID
        // if no, view admin profile
        profile.forEach(profile => {
            profile.addEventListener('click', () => {
                console.log('Profile viewed');
            })
        })

        userProfile.addEventListener('click', () => {
            console.log('Admin profile viewed');

            window.location.href = "profile.html";
        })
    }

    /** Open and Close Add Post Modal */
    const addPost = () => {
        const addPostBtn = document.getElementById('btn-add-post');
        const addPostModal = document.getElementById('add-post-modal');
        const cancelPost = document.getElementById('add-post-cancel');

        addPostBtn.addEventListener('click', () => addPostModal.style.display = 'flex');
        cancelPost.addEventListener('click', () => addPostModal.style.display = 'none');
    };

    /** Viewing Video */
    const viewMediaPost = () => {
        const video = document.querySelectorAll('.video');
    
        if (video) {
            // Add click event listener for playing and pausing video
            video.forEach(video => 
                video.addEventListener('click', () => {
                    if (video.paused) {
                        video.play();
                        console.log('Video played');
                        

                    } else {
                        video.pause();
                        console.log('Video paused');
                    }  
                })
            )

            // Add touchstart and touchend for mobile devices
            video.forEach(video => 
                video.addEventListener('touchstart', () => {
                    if (video.paused) {
                        video.play();
                        console.log('Video played');
                        
                    } else {
                        video.pause();
                        console.log('Video paused');
                    }  
                })
            )
        } else {
            console.log('Video element not found');
        }
    }

    /** Open and Close Post Menu Modal & Account Menu Modal*/
    const menuModal = () => {
        // Post menu
        const modal = document.getElementById('modal');
        const modalMenu = document.querySelectorAll('.post-menu');
        const cancelBtn = document.getElementById('cancel');
        

        // Account menu
        const profileMenuBtn = document.getElementById('profile-menu-btn');
        const accountMenuModal = document.getElementById('modal');
        const logouBtn = document.getElementById('logout');

        if(modalMenu) {
            modalMenu.forEach(item => item.addEventListener('click', () => modal.style.display = 'flex'));
        }

        if(profileMenuBtn) {
            profileMenuBtn.addEventListener('click', () => {
                accountMenuModal.style.display = "flex";
            })
        }
        
        if(cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                modal.style.display = 'none'
            });
        }
        
        if(logouBtn) {
            logouBtn.addEventListener('click', ()=> {
                console.log('Account logged out');
            })
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
            if (e.target === accountMenuModal) accountMenuModal.style.display = 'none';
        });
    };

    /** Highlight Selected Modal Item */
    const modalHover = () => {
        const modalItems = document.querySelectorAll('.modal-item');
        modalItems.forEach(item =>
            item.addEventListener('click', () => {
                modalItems.forEach(i => i.classList.remove('default'));
                item.classList.add('default');
            })
        );
    };

    const hideBottomNavbar = () => {
        const bottomNavbar = document.getElementById('bottom-navbar');
        
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY) {
                console.log('Scrolling down');
                bottomNavbar.classList.add('bottom-hidden');
            } else {
                console.log('Scrolling up');
                bottomNavbar.classList.remove('bottom-hidden');
            }

            lastScrollY = window.scrollY;

        })
    }


    /** Initialize Functions */
    ctaToggle();
    addPost();
    scrollToTop();
    viewProfile();
    viewMediaPost();
    menuModal();
    modalHover();
    hideBottomNavbar();
});


