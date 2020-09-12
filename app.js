/*
rock-paper-scissor game!
drawbacks: each player plays against the opponents hand from the previous round!
*/

var scores, roundScores, activePlayer, winner;

winner = 1;
scores = [0,0]; //the random option for each player
roundScore = 0;
activePlayer = 0; //0 will be player 1, and 1 will be player 2?
//defining the active player
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

//hides the middle paw before the game starts
document.querySelector('.shoot').style.display = 'none';

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


//event handling- shoot button
var q = document.querySelector('.btn-shoot');
if(q && activePlayer < 2){
    q.addEventListener('click', function() {

    try{  
        //initializing player names
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
       
         //we need a random shoot for each player
         var randomimg = Math.floor(Math.random() * 3) + 1; //dice = shoot
         var replaceCode = '<img src="'+randomimg+'.png" class="player-score" id="score-'+activePlayer+'"></img>';       
         document.querySelector('#score-' + activePlayer).outerHTML = replaceCode; 
         
         //wait for next player(or not) and update score
        if (randomimg === 1) {x = 'paper'} 
        else if(randomimg === 2) {x = 'rock'}
        else {x = 'scissors'};
        document.querySelector('#currentStatus-' + activePlayer).innerHTML = x;

         //initialize middle image
         var shootDOM =  document.querySelector('.shoot')
         shootDOM.style.display = 'block';

        //determine the winner? 
        var status0 = document.getElementById('currentStatus-0').textContent
        var status1 = document.getElementById('currentStatus-1').textContent
        if(status0 === 'paper' && status1 == 'rock'){winner = 1
            scores[0] ++; 
            document.getElementById('name-0').textContent = 'Winner!!';}

        else if (status0 === 'paper' && status1 == 'scissors') {winner = 3
            scores[1] ++;
            document.getElementById('name-1').textContent = 'Winner!!';}

        else if (status0 === 'rock' && status1 == 'scissors') {winner = 2
            scores[0] ++;
            document.getElementById('name-0').textContent = 'Winner!!';}

        else if (status0 === 'rock' && status1 == 'paper') {winner = 1
            scores[1] ++;
            document.getElementById('name-1').textContent = 'Winner!!';}

        else if (status0 === 'scissors' && status1 == 'paper') {winner = 3
            scores[0] ++;
            document.getElementById('name-0').textContent = 'Winner!!';}

        else if (status0 === 'scissors' && status1 == 'rock') {winner = 2
            scores[1] ++;
            document.getElementById('name-0').textContent = 'Winner!!';}

        else {document.querySelector('.shoot').style.display = 'none';}

        //display winner in the middle
        shootDOM.src = winner+'.png';
       
        //updating scores
        document.querySelector('#current-0').innerHTML = scores[0];
        document.querySelector('#current-1').innerHTML = scores[1];

        activePlayer++

        //defining the active player
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');

        }
        catch{}
    });
}
var p = document.querySelector('.btn-hold');
if(p) {
   p.addEventListener('click', function() {
        activePlayer = 0;
        //hides the middle paw before the game starts
        document.querySelector('.shoot').style.display = 'none';
        document.getElementById('currentStatus-0').textContent = 'new round';
        document.getElementById('currentStatus-1').textContent = 'new round';

         //defining the active player
         document.querySelector('.player-0-panel').classList.add('active');
         document.querySelector('.player-1-panel').classList.remove('active');

         //initializing player names
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
   });
}












