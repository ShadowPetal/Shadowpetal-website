// Wait until the entire window (including images) is loaded
window.addEventListener('load', () => {

    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content'); // ADDED this line

    // Wait 2 seconds (2000 milliseconds) before starting the animation
    setTimeout(() => {
        // Start the logo-dissolve animation
        splashScreen.classList.add('hidden');

        // Simultaneously, trigger the color-fade-in on the main content
        mainContent.classList.add('colors-active'); // ADDED this line

    }, 2000); 

});