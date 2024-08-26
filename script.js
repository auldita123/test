// script.js
document.addEventListener('DOMContentLoaded', () => {
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const animateBtn = document.getElementById('animateBtn');
    const greeting = document.getElementById('greeting');

    changeStyleBtn.addEventListener('click', () => {
        // Toggle class to change style
        greeting.classList.toggle('new-style');
    });

    animateBtn.addEventListener('click', () => {
        // Toggle animation class
        greeting.classList.toggle('animated');
    });
});
