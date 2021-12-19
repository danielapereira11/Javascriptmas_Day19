const btn = document.getElementById("btn");
const imageEl = document.querySelector("#foodHolder");
let foodishDesertUrl = "https://foodish-api.herokuapp.com/api/images/dessert";

function findYum(response) {
  imageEl.innerHTML = `<img src="${response.data.image}" alt="random dessert image" width="500" height="500">`;
}

function gettingFoodishApi() {
  axios.get(foodishDesertUrl).then(findYum);
}

btn.addEventListener("click", gettingFoodishApi);

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/
