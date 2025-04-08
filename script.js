// Carousel Logic
let currentIndex = 0; // Keeps track of the current image index

function showImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    // Ensure the index is within bounds
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    // Move the carousel to the correct image
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}