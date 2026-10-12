let count = 0;
const counterDisplay = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
function updateDisplay() {
    counterDisplay.textContent = count;
    if (count > 0) {
        counterDisplay.className = "counter-value positive";
    } else if (count < 0) {
        counterDisplay.className = "counter-value negative";
    } else {
        counterDisplay.className = "counter-value";
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