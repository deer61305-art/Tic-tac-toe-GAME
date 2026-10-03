let smths = document.querySelectorAll(".smth");
let Result = document.querySelector(".Result");
let RestartBtn = document.querySelector(".RestartBtn");

let Symbol = "X";
let over = false;

let blackBoardStructure = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

  

smths.forEach(function(smth){

  smth.onclick = function(){
       if(smth.innerHTML !== "" || over === true){
          return
       } 

       smth.innerHTML = Symbol;

       WINNER()

       if(Symbol === "X"){
          Symbol = "O"
       }else{
         Symbol = "X"
       }
  }
})

function WINNER(){
 
     for(let i = 0; i < blackBoardStructure.length; i++){
        let a = blackBoardStructure[i][0];
        let b = blackBoardStructure[i][1];
        let c = blackBoardStructure[i][2];

        if( smths[a].innerHTML !== "" &&
            smths[a].innerHTML === smths[b].innerHTML &&
            smths[b].innerHTML === smths[c].innerHTML
        ){
            smths[a].style.color = "green"
            smths[b].style.color = "green"
            smths[c].style.color = "green"
            Result.innerHTML = smths[a].innerHTML + "-" + " " + "YOU WON! CONGRATS!!!!!"
            over = true;
            return
        }
     }

     let savsea = true;

     for(let i = 0; i < smths.length; i++){
        if(smths[i].innerHTML === ""){
              savsea = false
        }
     }

     if(savsea === true){
           Result.innerHTML = "Draw!";
           over = true
     } 
}
RestartBtn.onclick = function(){
    for(let i = 0; i < smths.length; i++){
         smths[i].innerHTML = ""
         smths[i].style.color = "black"
    }
    Symbol = "X";
    over = false;
    Result.innerHTML = "";
}