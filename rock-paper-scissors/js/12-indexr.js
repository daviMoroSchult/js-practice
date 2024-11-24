let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0, losses: 0, ties: 0
}; 

const sure = document.querySelector('.sure')
const sureYes = document.querySelector('.sure-yes')
const sureNo = document.querySelector('.sure-no')


document.body.addEventListener('keydown', (event) => {
  console.log(event.key)
if (event.key === 'r') {
  rock();
} else if (event.key === 'p') {
  paper();
} else if (event.key === 's') {
  scissors();
} else if (event.key ==='a') {  
  autoPlay();
} else if (event.key ===' ') {  
  sure.style.display = 'block'
}
});

sureYes.addEventListener('click',() => {
  resetScore();
  sure.style.display = 'none'
});

sureNo.addEventListener('click',() => {
  sure.style.display = 'none'
});

function win(score) {
  score.wins++;
  localStorage.setItem('score', JSON.stringify(score));
  document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
  document.body.querySelector('.js-result').innerHTML = `You win`;
}

function lose(score) {
  score.losses++;
  localStorage.setItem('score', JSON.stringify(score));
  document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
  document.body.querySelector('.js-result').innerHTML = `You lose`;
}

function tie(score) {
  score.ties++;
  localStorage.setItem('score', JSON.stringify(score));
  document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
  document.body.querySelector('.js-result').innerHTML = `You tied.`;
}

const paperButton = document.querySelector('.js-paper-button');
const scissorsButton = document.querySelector('.js-scissors-button');
const rockButton = document.querySelector('.js-rock-button');

function rock() {
  const randomNumber1 = Math.random();

  if (randomNumber1 <= 1/3) {
    tie(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/rock-emoji.png" alt="">. The computer chose <img src="../img/rock-emoji.png" alt="">.`;
  } else if (randomNumber1 > 1/3 && randomNumber1 <= 2/3) {
    lose(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/rock-emoji.png" alt="">. The computer chose <img src="../img/paper-emoji.png" alt="">.`;
    
  } else {
    win(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/rock-emoji.png" alt="">. The computer chose <img src="../img/scissors-emoji.png" alt="">.`;
    
  }
}

rockButton.addEventListener('click', () => {
  rock();
});

function paper() {
  const randomNumber2 = Math.random();

if (randomNumber2 <= 1/3) {
  win(score);
  document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/paper-emoji.png" alt="">. The computer chose <img src="../img/rock-emoji.png" alt="">.`;

} else if (randomNumber2 > 1/3 && randomNumber2 <= 2/3) {
  tie(score);
  document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/paper-emoji.png" alt="">. The computer chose <img src="../img/paper-emoji.png" alt="">.`;
} else {
  lose(score);
  document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/paper-emoji.png" alt="">. The computer chose <img src="../img/scissors-emoji.png" alt="">.`;
}
}

paperButton.addEventListener('click', () => {
  paper();
});

function scissors () {
  const randomNumber3 = Math.random();

if (randomNumber3 <= 1/3) {
  lose(score);
  document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/scissors-emoji.png" alt="">. The computer chose <img src="../img/rock-emoji.png" alt="">.`;
} else if (randomNumber3 > 1/3 && randomNumber3 <= 2/3) {
  win(score);
  document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/scissors-emoji.png" alt="">. The computer chose <img src="../img/paper-emoji.png" alt="">.`;
} else {
  tie(score);
  document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/scissors-emoji.png" alt="">. The computer chose <img src="../img/scissors-emoji.png" alt="">.`;
}
}

scissorsButton.addEventListener('click', () => {
  scissors();
});


function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.setItem('score', JSON.stringify(score));
  document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
  document.body.querySelector('.js-result').innerHTML = ``;
  document.body.querySelector('.js-moves').innerHTML = ``;
}

document.querySelector('.reset').addEventListener('click', () => {
  sure.style.display = 'block'
});

function autoPlayCode() {
  function win(score) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
    document.body.querySelector('.js-result').innerHTML = `You win`;
  }
  
  function lose(score) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
    document.body.querySelector('.js-result').innerHTML = `You lose`;
  }
  
  function tie(score) {
    score.ties++;
    localStorage.setItem('score', JSON.stringify(score));
    document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
    document.body.querySelector('.js-result').innerHTML = `You tied.`;
  }

  let choice = Math.random();

  if (choice <= 1/3) {
    rock();
  } else if (choice > 1/3 && choice <= 2/3) {
    paper();
  } else {
    scissors();
  } 

  function rock() {
    const randomNumber1 = Math.random();
  
    if (randomNumber1 <= 1/3) {
      tie(score);
      document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/rock-emoji.png" alt="">. The computer chose <img src="../img/rock-emoji.png" alt="">.`;
    } else if (randomNumber1 > 1/3 && randomNumber1 <= 2/3) {
      lose(score);
      document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/rock-emoji.png" alt="">. The computer chose <img src="../img/paper-emoji.png" alt="">.`;
      
    } else {
      win(score);
      document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/rock-emoji.png" alt="">. The computer chose <img src="../img/scissors-emoji.png" alt="">.`;
      
    }
  }
  
  function paper() {
    const randomNumber2 = Math.random();
  
  if (randomNumber2 <= 1/3) {
    win(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/paper-emoji.png" alt="">. The computer chose <img src="../img/rock-emoji.png" alt="">.`;
  
  } else if (randomNumber2 > 1/3 && randomNumber2 <= 2/3) {
    tie(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/paper-emoji.png" alt="">. The computer chose <img src="../img/paper-emoji.png" alt="">.`;
  } else {
    lose(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/paper-emoji.png" alt="">. The computer chose <img src="../img/scissors-emoji.png" alt="">.`;
  }
  }
  
  function scissors () {
    const randomNumber3 = Math.random();
  
  if (randomNumber3 <= 1/3) {
    lose(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/scissors-emoji.png" alt="">. The computer chose <img src="../img/rock-emoji.png" alt="">.`;
  } else if (randomNumber3 > 1/3 && randomNumber3 <= 2/3) {
    win(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/scissors-emoji.png" alt="">. The computer chose <img src="../img/paper-emoji.png" alt="">.`;
  } else {
    tie(score);
    document.body.querySelector('.js-moves').innerHTML = `You chose <img src="../img/scissors-emoji.png" alt="">. The computer chose <img src="../img/scissors-emoji.png" alt="">.`;
  }
  }
}

document.querySelector('.auto-play').addEventListener('click', () => {
  autoPlay();
});




let isAutoPlayOn = false;
let intervalId;
let autoPlayBtn = document.querySelector('.auto-play');

// const autoPlay = () =>
// {

// }
function autoPlay() {
  if (isAutoPlayOn) {
    clearInterval(intervalId);
    isAutoPlayOn = false;
    autoPlayBtn.innerHTML = "Auto Play";
  } else {
    intervalId = setInterval(() => {
      autoPlayCode();
    }, 1000);
    isAutoPlayOn = true;
    autoPlayBtn.innerHTML = "Stop Auto Play";
  }
}

// Assume autoPlayCode() is defined elsewhere

// To start autoplay


// To stop autoplay, call autoPlay() again


// const exists = document.querySelector('.js-score').classList.contains('hello');
// console.log(exists)


