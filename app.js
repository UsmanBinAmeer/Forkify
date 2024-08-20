
const imageDisplay = document.querySelector(".imageDisplay");
const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");

async function checkForRecipes(item) {
    const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=" + item);
    var data = await response.json();

    // Clear previous content
    imageDisplay.innerHTML = "";

    data.data.recipes.forEach(recipe => {
        // Create new elements for each recipe
        const recipeContainer = document.createElement("div");
        recipeContainer.classList.add("recipe");

        const imgElement = document.createElement("img");
        const titleElement = document.createElement("h3");

        // Set the attributes and content
        imgElement.src = recipe.image_url;
        imgElement.alt = "Recipe Image";
        titleElement.textContent = recipe.title;

        // Append the new elements to the recipe container
        recipeContainer.appendChild(imgElement);
        recipeContainer.appendChild(titleElement);

        // Append the recipe container to the imageDisplay container
        imageDisplay.appendChild(recipeContainer);
    });
}

searchBtn.addEventListener("click", () => {
    checkForRecipes(searchBar.value);
});

const title = document.querySelector(".title");
const publisher = document.querySelector(".Publisher");

async function checkForRecipes(item) {
    const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=" + item);
    var data = await response.json();

// test
console.log(data.data)

    // Clear previous content
    imageDisplay.innerHTML = "";
    title.innerHTML = "";
    // publisher.innerHTML = "";

    for (let i = 0; i < 15; i++) {
        // Create new elements for each recipe
        const imgElement = document.createElement("img");
        const titleElement = document.createElement("h3");
        // const publisherElement = document.createElement("p");

        // Set the attributes and content
        imgElement.src = data.data.recipes[i].image_url;
        imgElement.alt = "Recipe Image";
        titleElement.textContent = data.data.recipes[i].title;
        // publisherElement.textContent = data.data.recipes[i].publisher;

        // Append the new elements to the imageDisplay container
        imageDisplay.appendChild(imgElement);
        title.appendChild(titleElement);
        // publisher.appendChild(publisherElement);
    }
}

searchBtn.addEventListener("click", () => {
    checkForRecipes(searchBar.value);
});
