function pinGenarator() {
    const pinValue = Math.round(Math.random() * 10000)
    const pinstring = pinValue + '';
    if (pinstring.length == 4) {
        return pinValue;
    }
    else {
        pinGenarator()
    }

}

function clicked() {
    const pinValue = pinGenarator();
    document.getElementById('pin-input').value = pinValue;
}


document.getElementById('calc-numbers').addEventListener('click', function (event) {
    const allNumber = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(allNumber)) {
        if (allNumber == 'C') {
            calcInput.value = '';
        }
    }

    else {
        const calcInputValue = calcInput.value;
        const calcInputValuelatest = calcInputValue + allNumber;
        calcInput.value = calcInputValuelatest;
    }

})

function pinVerify() {
    const pinInput = document.getElementById('pin-input').value;
    const calcInput = document.getElementById('calc-input').value;

    const successMassage = document.getElementById('success');
    const errorMassage = document.getElementById('fail');

    if (pinInput == calcInput) {

        successMassage.style.display = 'block';
        errorMassage.style.display = 'none'
    }
    else {

        errorMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }
}



