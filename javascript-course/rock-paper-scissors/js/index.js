let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0, losses: 0, ties: 0
}; 

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

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.setItem('score', JSON.stringify(score));
  document.body.querySelector('.js-score').innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
  document.body.querySelector('.js-result').innerHTML = ``;
  document.body.querySelector('.js-moves').innerHTML = ``;
}

// const exists = document.querySelector('.js-score').classList.contains('hello');
// console.log(exists)
