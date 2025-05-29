let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let mesgCont  = document.querySelector(".mesg-container ");
let mesg = document.querySelector("#mesg")

let turn0 = true;

const winningPatterns = [
  [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8,]
];

const resetGame = () => {
  turn0 = true;
  enabledBoxs();
  mesgCont.classList.add("hide");
}

boxs.forEach((box) => {
  box.addEventListener("click",() => {
    if(turn0){
      box.innerText = "0";
      turn0 = false;
    }else{
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWin();
  });
});

const disabledBoxs = () => {
  for(let box of boxs){
    box.disabled = true;
  }
};

const enabledBoxs = () => {
  for(let box of boxs){
    box.disabled = false;
    box.innerText = "";
  }
};

const showWin = (winner) => {
    mesg.innerText = `Congrats you won 7 Crore. Winner is ${winner}`;
    mesgCont.classList.remove("hide");
    disabledBoxs();
};

const checkWin = () => {
  for( let pattern of winningPatterns){
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;

    if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
       if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWin(pos1Val);
       }
    }
  }
};

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);