
const r_btn = document.querySelector('#rock');
const p_btn = document.querySelector('#paper');
const s_btn = document.querySelector('#scissors');
const re_btn = document.querySelector('#reset');
r_btn.addEventListener('click', function (e) {
    play_round(e.target.id);
  });
p_btn.addEventListener('click', function (e) {
    play_round(e.target.id);
  });
s_btn.addEventListener('click', function (e) {
    play_round(e.target.id);
  });
re_btn.addEventListener('click', function (e) {
    play_round(e.target.id);
  });
  

function computer(){
    var random = Math.random();
    if(random < 0.33){
        return "rock";
    }
    else if(random < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}
    
function logic(player_move, computer_move, c_score, p_score){
    if(player_move == computer_move){
        winner.textContent = "It's a tie!";
    }
    else if(player_move == "rock"){
        if(computer_move == "paper"){
            winner.textContent = "You lose!";
            c_score++;
        }
        else{
            winner.textContent = "You win!";
            p_score++;
        }
    }
    else if(player_move == "paper"){
        if(computer_move == "scissors"){
            winner.textContent = "You lose!";
            c_score++;
        }
        else{
            winner.textContent = "You win!";
            p_score++;
        }
    }
    else if(player_move == "scissors"){
        if(computer_move == "rock"){
            winner.textContent = "You lose!";
            c_score++;
        }
        else{
            winner.textContent = "You win!";
            p_score++;
        }
    }
    c_score_t.textContent = c_score;
    p_score_t.textContent = p_score;
}


function play_round(player_move){
    winner = document.querySelector('#winner');
    c_score_t = document.getElementById("c_value");
    p_score_t = document.getElementById("p_value");
    c_score = parseInt(c_score_t.textContent);
    p_score = parseInt(p_score_t.textContent);
    if (player_move == "reset"){
        c_score = 0;
        p_score = 0;
        r_btn.disabled = false;
        p_btn.disabled = false;
        s_btn.disabled = false;
        winner.textContent = "Game Start!";
    }
    while (c_score == 5 || p_score == 5){
        winner.textContent = "Game Over!";
        r_btn.disabled = true;
        p_btn.disabled = true;
        s_btn.disabled = true;
        return;
    }
    computer_move = computer();
    
    logic(player_move, computer_move, c_score, p_score);
}
