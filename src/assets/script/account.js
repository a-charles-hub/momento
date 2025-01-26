document.addEventListener('DOMContentLoaded', () => {
    /** Return to Home Button */
    const returnToHome = () => {
        const returnBtn = document.getElementById('return-btn');

        returnBtn.addEventListener('click', () => {
            window.location.href = "profile.html";
        })
    }

    /** Initialize */
    returnToHome();
});


