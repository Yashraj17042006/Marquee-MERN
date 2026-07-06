let rocks =1;
let paper = 0;
let scissors=2;
let userChoice=prompt("Enter your choice: 0 for paper, 1 for rock, 2 for scissors");
let user2Choice=prompt("Enter your choice: 0 for paper, 1 for rock, 2 for scissors");

if(userChoice==user2Choice){
    alert("It's a tie!");
}
else if(userChoice==rocks && user2Choice==paper){
    alert("You win!");
}
else if(userChoice==paper && user2Choice==rocks){
    alert("You lose!");
}
else if(userChoice==scissors && user2Choice==rocks){
    alert("You win!");
}
else if(userChoice==rocks && user2Choice==scissors){
    alert("You lose!");
}
else if(userChoice==paper && user2Choice==scissors){
    alert("You lose!");
}   
else if(userChoice==scissors && user2Choice==paper){
    alert("You win!");

    
}