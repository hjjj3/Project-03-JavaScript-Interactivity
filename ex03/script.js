let count = 0;

const counterValueDisplay = document.getElementById("counterValue");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");

function updateDisplay() {
    counterValueDisplay.textContent = count;
    counterValueDisplay.classList.remove("positive", "negative", "neutral");
    
    if (count > 0) {
        counterValueDisplay.classList.add("positive");
    } else if (count < 0) {
        counterValueDisplay.classList.add("negative");
    } else {
        counterValueDisplay.classList.add("neutral");
    }
}
incrementBtn.addEventListener("click", function() {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", function() {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});