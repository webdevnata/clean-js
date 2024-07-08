const ball = document.querySelector('.magic8ball__wrapper__ball-img__img');
const input = document.querySelector('.magic8ball__wrapper__question-area__input');
const answer = document.querySelector('.magic8ball__wrapper__question-area__answer');
const error = document.querySelector('.magic8ball__wrapper__question-area__error');

const answers = ['Yes!', 'No!', 'Don\'t be silly...', 'You don\'t want to know answer...', 'Perhaps', 'Maybe yes maybe no', 'Quess']

function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const animation = () => {
    ball.classList.add('shake-animation')
    setTimeout(() => {
        ball.classList.remove('shake-animation')
    }, "1000")
}

const checkingQuestion = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        answer.innerHTML = `<span>Answer:</span> ${getRandomElement(answers)}`
        error.textContent = ''

    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'There must be a question mark at the end "?" '
        answer.textContent = ''
    } else {
        error.textContent = 'You have to put some question'
        answer.textContent = ''
    }
}

const giveAnswer = () => {
    animation()
    checkingQuestion()
    input.value = ''
}


ball.addEventListener('click', giveAnswer)