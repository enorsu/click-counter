
const clickDisplay = document.getElementById("clicks")

const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const resetBtn = document.getElementById("reset-btn");

addBtn.addEventListener("click", addClick);
removeBtn.addEventListener("click", removeClick);
resetBtn.addEventListener("click", resetClicks);

var clicks = 0;


function update() {
    clickDisplay.innerHTML = " " + clicks + " ";
}

function addClick() {
    clicks++;
    update();
}

function resetClicks() {
    clicks = 0;
    update();
}

function removeClick() {
    clicks--;
    update();
}