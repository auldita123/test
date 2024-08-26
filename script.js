// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeStyleBtn');
    const greeting = document.getElementById('greeting');

    button.addEventListener('click', () => {
        // Toggle a class on the h1 element
        greeting.classList.toggle('button-clicked');
    });
});