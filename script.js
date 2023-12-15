const WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turn = true;
let numClick = 0;
let ox = "X";
const boxes = document.querySelectorAll('.box');
boxes.forEach ((btn) =>{
    btn.addEventListener("click", ()=>{
        numClick++
        if(numClick > 8){
            playerTurn.innerText = "Draw";
            btn.innerHTML = ox;
        }
        else if(turn){
            playerTurn.innerText = `${ox}'s turn`;
            btn.innerHTML = ox;
            turn = false;
            ox = "O";
        }else{
            playerTurn.innerText = `${ox}'s turn`;
            btn.innerHTML = ox;
            turn = true;
            ox = "X";
        }
        btn.disabled = true;
        checkWinner();
    });
    
});

const disableAllBtn = () => {
    for(let btn of boxes){
        btn.disabled = true;
    };
};

const playerTurn = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset-btn');
const checkWinner = () => {
    for(let pattern of WinPatterns) {
        let val_1 = boxes[pattern[0]].innerText;
        let val_2 = boxes[pattern[1]].innerText;
        let val_3 = boxes[pattern[2]].innerText;
        
        if(val_1 != "" && val_2 != "" && val_3 != ""){
            if(val_1 === val_2 && val_2 === val_3){
                playerTurn.innerText = `Winner ${val_1}`;
                playerTurn.style.color = "green";
                resetBtn.innerText = "Play Again";
                numClick = 0;
                disableAllBtn();
            }else{
                playerTurn.style.color = "black";
            }
        }
    };
};

resetBtn.addEventListener('click', ()=>{
    boxes.forEach((btn) => {
        btn.innerHTML = "";
        btn.disabled = false;
    });
    playerTurn.innerText = "";
    resetBtn.innerText = "Reset";
    numClick = 0;
    ox = "X";
    playerTurn.style.color = "black";
});