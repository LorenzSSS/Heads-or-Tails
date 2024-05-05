let coin = document.querySelector('.coin');
let thwors = document.querySelector('.qThrows');
let head = document.querySelector('.qHead');
let tail = document.querySelector('.qTails');
let qThrows = 0;
let qTails = 0;
let qHead = 0;
let result;

coin.addEventListener('click', function() {
    (Math.floor(Math.random()*2)) ? console.log(result = 1) : console.log(result = 0);

    (result) ? coin.src='./img/head.png' : coin.src='./img/tails.png';

    (result) ? head.innerText =++ qHead : tail.innerText =++ qTails

    thwors.innerText =++ qThrows;
});



