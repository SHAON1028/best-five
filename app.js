const array = []

function display(arr) {
    const ulList = document.getElementById('selected-player')
    ulList.innerText = ''
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        const li = document.createElement("li");
        const t = document.createTextNode(element);
        li.appendChild(t);
        ulList.appendChild(li);
    }
}

function calulateTotal() {
    const l = array.length
    const valueOfPerPlayer = getValue('player-cost')
    const totalPlayerVslue = l * valueOfPerPlayer
    return totalPlayerVslue
}
//input value
function getValue(elementId) {
    const costField = document.getElementById(elementId)
    const costString = costField.value
    const cost = parseInt(costString)
    return cost
}

function setTotalExpenses(elementId, expense) {

    const totalCost = document.getElementById(elementId)
    totalCost.innerText = expense

}

function addToTopfive(element, id) {



    // array.push(productName)
    const l = array.length


    if (l < 5) {
        const productName = element.parentNode.children[0].innerText
        const dis = document.getElementById(id)
        dis.style.background = 'gray'
        dis.innerText = 'selected'
        dis.setAttribute('disabled', '');
        array.push(productName)
        document.getElementById('total-player').innerText = l + 1
        display(array)


    } else {
        alert('Maximum 5 selected')
    }
}

document.getElementById('calulate-btn').addEventListener('click', function () {
    const playersvalue = calulateTotal()
    setTotalExpenses('player-expenses', playersvalue)

})


document.getElementById('final-total-btn').addEventListener('click', function () {
    const getTotalPlayerCost = document.getElementById('player-expenses')
    const totalPlayerCostString = getTotalPlayerCost.innerText
    const totalPlayerCost = parseInt(totalPlayerCostString)

    const managerCost = getValue('manager-field')
    const coachCost = getValue('coach-field')

    const finalTotalCost = totalPlayerCost + managerCost + coachCost

    setTotalExpenses('final-total', finalTotalCost)

})