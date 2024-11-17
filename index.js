function goToRecipe() {
    window.location.href = './recipe.html';
}

// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

async function fetchImage(){

    try{
        const foodName = document.getElementById("foodName").value;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const foodImage = data.meals[0].strMealThumb;
        const imgElement = document.getElementById("foodImage");

        imgElement.src = foodImage;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

async function fetchInstructions(){

    try{
        const foodName = document.getElementById("foodName").value;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const foodInstructions = data.meals[0].strInstructions;
        console.log(data.meals[0].strInstructions);
        const paragraph = document.getElementById("foodInstructions");

        paragraph.src = foodInstructions;
        paragraph.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}