// Get the necessary elements
const resultsContainer = document.querySelector('.results-container');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0; // Start at the first image

// Function to update the position of the carousel
function updateCarousel() {
    // Calculate the new position based on the current index
    const offset = -(currentIndex * 100) + '%';
    resultsContainer.style.transform = `translateX(${offset})`;
}

// Add event listeners for the arrows
leftArrow.addEventListener('click', () => {
    // Move to the previous image
    currentIndex = (currentIndex === 0) ? 3 : currentIndex - 1; // Wrap around to the last image
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    // Move to the next image
    currentIndex = (currentIndex === 3) ? 0 : currentIndex + 1; // Wrap around to the first image
    updateCarousel();
});
