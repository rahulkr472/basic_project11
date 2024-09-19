let input = document.querySelector("#input");
let btn = document.querySelector("button");
let list = document.querySelector("#list")
let tolist = document.querySelector(".to-do-list")

let array = [];



btn.addEventListener("click", () => {
  
    let inputvalue = input.value;

    // console.log(inputvalues);
    array.push(inputvalue)
   
todo();

 });

 
   
let todo = () => {
   
    let element = " ";   

    for(i = 0; i < array.length; i++){
        let X = array[i];
        let html = `<p> ${X} <button id="btn" onclick="array.splice(${i}, 1); todo();"> delete </button> </p>`
        element += html
        
      
        
    }
    
    tolist.innerHTML = element
}


