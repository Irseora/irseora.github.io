document.addEventListener('DOMContentLoaded', function() {
    const starCount = 45;  // Number of stars to create

    function createStar() {
        const star = document.createElement('div');
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        document.getElementById("stars").appendChild(star);
    }

    function generateStars() {
        for (let i = 0; i < starCount; i++)
            createStar();
    }

    // ------------------------------------------------------------

    generateStars();
});