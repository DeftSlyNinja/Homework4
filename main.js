// create food object
let Food = function(pName, pCalories){
    //adding in attributes
    this.name = pName; 
    this.calories = parseInt(pCalories);
}

//create array for food object
let foodArray = [];
//seeded initial object in array.
foodArray.push(new Food('Apple', 95));
foodArray.push(new Food('Orange', 110));


let output = document.getElementById("totalDisplay").innerHTML

//fuction for populating array 
function PopulateArray() {
    //collect the user inputs
    let newFood = document.getElementById("foodInput").value;
    let newCal = document.getElementById("caloriesInput").value;
    
    //validate the input is a number
    if(!isNaN(newCal)){
        //create new food object
        let newFoodobj = new Food(newFood,newCal);
        
        //push new food object into array
        foodArray.push(newFoodobj);
        
        //display the calories on HTML
        let CalDisplay= document.getElementById("Caloriesdisplay");
        CalDisplay.innerHTML= "Calories added: " + newCal;
        
        //displaying total calories
        let totalCal = TotalCal();
        let totalCalDis = document.getElementById("TotalCal");
        totalCalDis.innerHTML= "Total Calories: " + totalCal;

    }
    else{
        alert("Please enter a number for calories.")
    }
    //looping the array and displaying the contents.  
    for (let i=0;i<foodArray.length;i++){
        console.log(`Food: ${foodArray[i].name}, Calories:${foodArray[i].calories}`);
    }
}


//funtion for totaling up the calories and return the total
function TotalCal(){
    //declare total calories var
    let Total = 0;

    //loop through the array to get the calories
    for (let i=0; i< foodArray.length; i++){
        //add the calories in the array
        Total += foodArray[i].calories;
    }
    //return the total calories
    return Total; 
}

//create a function for displaying food 
function displayFoodInHTML() {
    // Clear the existing list
    document.getElementById('div3').innerHTML = '';

    // Create a new list element
    let listElement = document.createElement('ul');

    // Create list items for each Food object in the array
    foodArray.forEach(food => {
        let listItem = document.createElement('li');
        listItem.textContent = `Food:${food.name} | Calories: ${food.calories}`;
        listElement.appendChild(listItem);
    });

    // Append the list to the container in the HTML body
    document.getElementById('div3').appendChild(listElement);
}


document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("subButton").addEventListener('click', function(event){
        //placeholder
        return null;
    })
});