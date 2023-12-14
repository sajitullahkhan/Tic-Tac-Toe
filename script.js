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
const boxes = document.querySelectorAll('.box');
boxes.forEach ((btn) =>{
    btn.addEventListener("click", ()=>{
        numClick++
        if(numClick == 9){
            playerTurn.innerText = "Draw";
        }else if(turn){
            playerTurn.innerText = `O's turn`;
            btn.innerHTML = "X";
            turn = false;
        }else{
            playerTurn.innerText = `X's turn`;
            btn.innerHTML = "O";
            turn = true;
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
                disableAllBtn();
                playerTurn.innerText = `Winner ${val_1}`;
                playerTurn.style.color = "green";
                resetBtn.innerText = "Play Again";
                numClick = 0;
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
});