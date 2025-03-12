const button = document.getElementById("button")
const greeting = document.querySelector(".greeting")

const strings = ["Hello, world!", "Hello, FEFU!"]

let current_index = 0;

greeting.textContent = strings[current_index];

button.addEventListener("click", function() {
    current_index = (current_index + 1) % strings.length;
    greeting.textContent = strings[current_index]
})