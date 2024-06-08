const amountToPaid = document.querySelector('#price')
const numerOfPeople = document.querySelector('#people')
const percentageTip = document.querySelector('#tip')

const buttonCount = document.querySelector('.bill-splitter__bottom__button-count')

const errorInfo = document.querySelector('.bill-splitter__bottom__error')

const costInfo = document.querySelector('.bill-splitter__bottom__cost-info')
const amountToContribute = document.querySelector('.bill-splitter__bottom__cost-info__amount')


const checkFillIn = () => {
    if (amountToPaid.value !== '' && numerOfPeople.value !== '' && percentageTip.value > 0 && amountToPaid.value > 0 && numerOfPeople.value > 0) {
        countAmount(amountToPaid.value, numerOfPeople.value, percentageTip.value)
        costInfo.style.display = 'block'
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = "Please fill in everything or give correct value"
        costInfo.style.display = 'none'
    }
}

const countAmount = (amountToPaid, numerOfPeople, percentageTip) => {
    amountToContribute.textContent = ((Number(amountToPaid) + (Number(amountToPaid) * Number(percentageTip))) / Number(numerOfPeople)).toFixed(2)
}

buttonCount.addEventListener('click', checkFillIn)



