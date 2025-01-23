document.addEventListener('DOMContentLoaded', () => {


    /** Comments Modal */
    const commentsModal = () => {
        const comments = document.querySelectorAll('.fa-comments');
        const close = document.getElementById('close-comments');
        const commentModal = document.getElementById('comments-modal');
    
        comments.forEach(comment => {
            comment.addEventListener('click', () => {
                commentModal.classList.add('show');
            });
        });
    
        close.addEventListener('click', () => {
            commentModal.classList.remove('show');
        });
    
        // Close the modal if the user clicks outside of it
        document.addEventListener('click', (event) => {

            // Check if the modal currently has the class show, which indicates that mocal is visible
            // Check if user is clicking outside the modal
            // Check if clicked element (event.target) matches the CSS selector .fa-comments.
            // This ensures that the modal doesn't close when the user clicks on the comment icon (which is intended to open the modal).

            if (commentModal.classList.contains('show') && !commentModal.contains(event.target) && !event.target.matches('.fa-comments')) {
                commentModal.classList.remove('show');
            }
        });
    };

        /** Comment Post Metrics */
    // Comments and reply counter will be updated realtime

    const commentPostMetrics = () => {
        const reacts = document.querySelectorAll('.react');
        const replyToComment = document.querySelectorAll('.comment');
        const sendComment = document.getElementById('send-comment');
        const sendCommentInput = document.getElementById('comment-input');

        reacts.forEach(react => {
            react.addEventListener('click', () => {
                console.log('react cliked');
            })
        })

        replyToComment.forEach(reply => {
            reply.addEventListener('click', () => {
                console.log('reply to comment added');
            })
        })

        sendComment.addEventListener('click', () => {
            const usercomment = sendCommentInput.value;

            console.log(usercomment);
            sendCommentInput.value = ""; // Clear the input field
        })
    }
    

    /** Initialize Functions */
    commentsModal();
    commentPostMetrics();
})