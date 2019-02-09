let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissor_div = document.getElementById('scissor');

// Get Random Comp Choices
function getCompChoice(params) {
    const choices = ['rock', 'paper', 'scissor'];
    randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
// console.log(getCompChoice());
function win(userChoice,compChoice) {
    // console.log('User wins');
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('green-glow')
    },500)
    result_p.innerHTML = ` User Win!!!`;
    // console.log('User wins',userScore);
    

}
function lose(userChoice,compChoice) {
    computerScore++;
    compScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `Computer Win`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('red-glow')
    },500)

    // console.log('User loses',computerScore);

}
function draw(userChoice,compChoice) {
    console.log('It\'s a draw');
    result_p.innerHTML = `It's a draw`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('grey-glow')
    },500)

}


function game(userChoice) {
    const compChoice = getCompChoice()
    console.log('User choice =>', userChoice);
    console.log('Computer choice =>', compChoice);
    switch (userChoice + compChoice) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(userChoice,compChoice)
            break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(userChoice,compChoice)
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw(userChoice,compChoice)
            break;


    }

}

// Events
function main() {
    rock_div.addEventListener('click', () => {
        game('rock')
    })
    paper_div.addEventListener('click', () => {
        game('paper');
    })
    scissor_div.addEventListener('click', () => {
        game('scissor');
    })
}
main()




