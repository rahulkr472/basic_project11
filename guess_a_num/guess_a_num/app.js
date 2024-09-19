let input = document.querySelector("#input")
let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let previousguess = document.querySelector("#array");
let startgame = document.querySelector(".start");
let remaining = document.querySelector("#number")

// let gamenum = (Math.floor(Math.random() * 101 ));
//  msg.innerHTML = `your number is not equal to ${gamenum}`

let guess = [];
let numguess = 1;

btn.addEventListener("click", () =>{

    let gamenum = (Math.floor(Math.random() * 11 ));

    let innervalue = input.value;

    if(innervalue >= 10){
        msg.innerHTML = "Ops: number is greater than 10! "

    } else if (innervalue === ""){
        console.log("enter no.");
        
    } else if(innervalue != gamenum) {
        msg.innerHTML = `your number is ${innervalue} not equal to gamenum ${gamenum}`
        guess.push(innervalue)
        previousguess.innerHTML = guess
        numguess++;
        remaining.innerHTML = `${11 - numguess}`
          msg.style.display = "block"
    } else {
          msg.innerHTML = `You Win! your number is ${innervalue}  equal to gamenum ${gamenum}`
          startgame.style.display = "block";
          guess.length = 0;
          numguess = 1;
            remaining.innerHTML = `${11 - numguess}`
         
    }
    displayguess();
  remainingguess();
  start()
 
} 
)

const remainingguess = () => {
if(guess.length === 10){
     msg.innerHTML = `your limit is over!`
    btn.disabled = true;
    startgame.style.display = "block";
    btn.style.display = "none"

} else {
    startgame.style.display = "none"
   
}
}

const displayguess = () => {
input.value = ""
}



const start = () => {
startgame.addEventListener("click", () => {
    btn.disabled = false;
    guess.length = 0;
   msg.style.display = "none"
    numguess = 1;
        remaining.innerHTML = `${11 - numguess}`
        btn.style.display = "block"
    
})
}

