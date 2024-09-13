let height = document.querySelector("#height");
let weight = document.querySelector("#weight")
let button = document.querySelector("#btn")
let result = document.querySelector("#result")
let review = document.querySelector("#review")

button.addEventListener("click", () => {
let Height = height.value;
let Weight = weight.value;

    let bmi =  (Weight / ((Height*Height)/10000) ).toFixed(1)
    result.innerHTML = bmi

guide(bmi);
})

const guide = (bmi) => {

if (bmi == 0){
 review.innerHTML = "Enter your weight "
} else if(bmi < 18.6){
    // console.log("yyour are under weight");
    review.innerHTML = "Under Weight "
} else if(bmi >= 18.6 && bmi <= 24.9) {
// console.log("normal");
review.innerHTML = "Normal Weight"
} else {
    review.innerHTML = "Over Weight"
}
}