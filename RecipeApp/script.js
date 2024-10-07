const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipecontainer = document.querySelector('.recipe-container');

const fetchRecipes = async (query) => {

    recipecontainer.innerHTML=" <h3>etching recipes......</h3>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipecontainer.innerHTML="";

    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p> Belongs to <span> ${meal.strCategory}</span> Category </p>
        `;

        const button =document.createElement('button');
        button.textContent="view Recipe";
        recipeDiv.appendChild(button)
        
        recipecontainer.appendChild(recipeDiv);  // Append the recipeDiv to the container
    });
};

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();  // Get the input value
    fetchRecipes(searchInput);
});
