// Question 1
var minus = (a, b) => a - b;
  
// Question 2
/*
const callUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(callUrl)
    .then((response) => response.json())
    .then(data => {
        let results = data.results;

            results.forEach((element) => {
                console.log(element.name);
            })

    .catch(error => window.location.href = "error.html");
 */

// Question 3
  let sentence = "These cats are outrageous.";
  const replaceCatsWithGiraffes = sentence.replace("cats", "giraffes");
  
  console.log(replaceCatsWithGiraffes);
  
// Question 4

// Question 5
  const container = document.querySelector(".container");
  const button = document.querySelector(".btn");
  
  container.removeChild(button);
  
// Question 6
  const animal = document.querySelector(".animals");
  const createList = document.createElement("li");
  const elephant = document.querySelector(".elephants");
  createList.className = "parrots";
  createList.innerText = "Parrots";
  
  animal.appendChild(createList);
  elephant.before(createList);

  // Question 7
const UrlCall = "https://api.rawg.io/api/games/3801";

fetch(UrlCall)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".rating").innerText = data.rating;
})

    .catch(error => console.log(error))