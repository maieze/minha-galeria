document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.imagens figure img').forEach(img => {
        img.addEventListener('click', () => {
            window.location.href = img.src;
        });
    });
});

