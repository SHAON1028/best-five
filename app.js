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

function addToTopfive(element, id) {


    const productName = element.parentNode.children[0].innerText
    const dis = document.getElementById(id)
    dis.style.background = 'gray'
    dis.innerText = 'selected'
    dis.setAttribute('disabled', '');
    array.push(productName)
    const l = array.length


    if (l <= 5) {
        document.getElementById('total-player').innerText = l
        display(array)
    } else {
        alert('Maximum 5 selected')
    }
}




