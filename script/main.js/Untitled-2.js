// script/main.js

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.animation = `fadeIn 1s forwards`;
        }, (index + 1) * 500);
    });

    setTimeout(() => {
        footer.style.animation = `fadeIn 1s forwards`;
    }, (sections.length + 1) * 500);
});
