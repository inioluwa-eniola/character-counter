const input = document.getElementById("input");
const count = document.getElementById("count");


window.addEventListener("input", () => {
    displayInputValue(input.value)
});


function displayInputValue (str) {
    count.textContent = str.length
}

