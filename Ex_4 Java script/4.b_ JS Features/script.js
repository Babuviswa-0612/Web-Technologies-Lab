// Dynamic Time Display
function updateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.innerHTML = `Current Time: ${currentTime}`;
}

setInterval(updateTime, 1000); // Update time every second

// Image Hover Effect - Show Text on Hover
const image = document.querySelector('.image');
const hoverText = document.querySelector('.hover-text');

image.addEventListener('mouseenter', () => {
    hoverText.style.display = 'flex'; // Show text when hovering over image
});

image.addEventListener('mouseleave', () => {
    hoverText.style.display = 'none'; // Hide text when not hovering
});

// Change Background Color on Click
const changeBackgroundSection = document.getElementById('changeBackground');

changeBackgroundSection.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor(); // Change background color to random color
});

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
