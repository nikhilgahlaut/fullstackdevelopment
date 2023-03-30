const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * colors.length);

    const color = colors[randomIndex];
    document.body.style.backgroundColor = color;
});