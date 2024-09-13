let btn = document.querySelectorAll(".button");
let body = document.querySelector("body")
let nav = document.querySelector("#nav")
btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.id === "grey") {
            // console.log(e.target.id);
            body.style.backgroundColor = e.target.id
      
        } else if (e.target.id === "white") {
            // console.log(e.target.id);
            body.style.backgroundColor = e.target.id
  
        } else if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
            
        } else if(e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
           
        }
        
        
    })
    
})

