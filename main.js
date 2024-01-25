let Food = function(pName, pCalories){
    this.name = pName;
    this.calories = parseInt(pCalories);
}
let foodArray = [];
foodArray.push(new Food('Apple', 95));
foodArray.push(new Food('Orange', 110));

let output = document.getElementById("totalDisplay").innerHTML


document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("subButton").addEventListener('click', function(event){
        //placeholder
        return null;
    })
});