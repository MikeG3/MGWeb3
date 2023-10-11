// JavaScript to handle background image transition
const background = document.querySelector('.background-image');
const fixedBackground = document.querySelector('.fixed-background');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate when to reveal the fixed background image
    if (scrollPosition >= windowHeight / 2) {
        fixedBackground.style.opacity = '1';
        fixedBackground.style.visibility = 'visible';
    } else {
        fixedBackground.style.opacity = '0';
        fixedBackground.style.visibility = 'hidden';
    }
});
