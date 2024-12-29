document.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.premium');

    item.addEventListener('click', () => {
        window.location.href = 'podcasts.html';
    });
});

