// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
//     .then(response => response.json())
//     .then(data => console.log(data.meals[0].strMealThumb))
//     .catch(error => console.error(error));

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
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}