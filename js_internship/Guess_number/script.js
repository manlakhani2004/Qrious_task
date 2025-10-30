

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heightScore = 0;

function DisplayMessage(message) {
    document.querySelector('.message').textContent = message;
}


//on click again btn
document.querySelector('.again').addEventListener('click',()=>{
    score =20;
    secrectNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score;
     document.querySelector('.guess').value = '';
})

//on click check btn
document.querySelector('.check').addEventListener('click', () => {
    let guessNumber = document.querySelector('.guess').value;

    if (!guessNumber) {
        DisplayMessage('No Number!');
        
    } else if (guessNumber == secrectNumber) {

        DisplayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').textContent = secrectNumber;
        if(score > heightScore)
        {
            heightScore = score;
            document.querySelector('.highscore').textContent = heightScore;
        }


    } else if (guessNumber !== secrectNumber) {
        if (score > 1) {
            DisplayMessage(guessNumber>secrectNumber ? 'Too High':'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            DisplayMessage('You Loss Game');
            document.querySelector('score').textContent = 0;
        }
    }
})