// Array of random colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#33FFF3",
    "#FF9333", "#33FFFC", "#FF5B33", "#FFC733", "#33FF86",
    "#D833FF", "#FF6F33", "#FF3333", "#33D8FF", "#FFB833"
];

// Function to change background color
document.getElementById('colorButton').addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
