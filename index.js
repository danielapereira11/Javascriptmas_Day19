const btn = document.getElementById("btn");
const imageEl = document.querySelector("#foodHolder");
let foodishDessertUrl = "https://foodish-api.herokuapp.com/api/images/dessert";

function findYum(response) {
  let randomDessert = response.data.image;
  imageEl.innerHTML += `<img src="${randomDessert}" alt="random dessert image">`;
}

function gettingFoodishApi() {
  imageEl.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    axios.get(foodishDessertUrl).then(findYum);
  }
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
