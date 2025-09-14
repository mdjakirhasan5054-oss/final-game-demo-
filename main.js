
// Central user balance
let userBalance = 0;

function addPoints(points) {
    userBalance += points;
    updateBalanceDisplay();
}

function updateBalanceDisplay() {
    document.getElementById('balance').innerText = "Balance: USDT" + userBalance;
}

// Initialize balance on page load
window.onload = function() {
    updateBalanceDisplay();
}
