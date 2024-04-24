document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.querySelector('.profile img');

    profilePicture.addEventListener('click', function() {
        alert('Hello! This is me.');
    });
});