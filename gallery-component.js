document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", function() {
            mainImage.src = this.src;
        });
    });

    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("previous");

    let currentImageIndex = 0;

    nextButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
        mainImage.src = thumbnails[currentImageIndex].src;
    });

    prevButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
        mainImage.src = thumbnails[currentImageIndex].src;
    });
});
