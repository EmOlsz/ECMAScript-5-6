const checkBoxes = Array.from(document.querySelectorAll('.inbox input'));
let lastChecked;

function checkThem(e) {
    let checkCondition = false;
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
            checkCondition = !checkCondition;
        }
        if (checkCondition) {
            checkbox.checked = true;
        }
    });
    }
    lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', checkThem));