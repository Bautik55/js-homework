let counterValue = 0;

function updateCounterDisplay() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = counterValue;
}

function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
}

function multiplyCounter() {
    const multiplierInput = document.getElementById("multiplier");
    const multiplier = parseInt(multiplierInput.value, 10);

    if (Number.isInteger(multiplier)) {
        counterValue *= multiplier;
        updateCounterDisplay();
    } else {
        showAlert("Введите число для умножения.");
    }
}

function showAlert(message) {
    const alertTextElement = document.getElementById("alertText");
    alertTextElement.textContent = message;

    const customAlert = document.getElementById("customAlert");
    customAlert.classList.remove("hidden");
}

function closeCustomAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.classList.add("hidden");
}

function showCustomAlert() {
    const multiplierInput = document.getElementById("multiplier");
    const multiplier = parseInt(multiplierInput.value, 10);

    if (Number.isInteger(multiplier)) {
        const result = counterValue * multiplier;
        showAlert(`Результат умножения: ${result}`);
    } else {
        showAlert("Введите число для умножения.");
    }
}

updateCounterDisplay();
