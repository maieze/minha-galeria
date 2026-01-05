document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.slide img').forEach(img => {
        img.addEventListener('click', () => {
            window.location.href = img.src;
            
        });
    });

});

