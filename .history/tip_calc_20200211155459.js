const const percent = parseInt(inputTip.value)

const tip = bill * percent / 100
const total = bill + tip

displayTip.innerHTML = tip