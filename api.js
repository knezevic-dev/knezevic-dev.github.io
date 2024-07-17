async function fetchData(){
    const pokemonName = document.getElementById("nameOfPokemon").value.toLowerCase();
    const fetchingAPI = 
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        //i needed just the one fetched API
    try{
        const responses = await Promise.all(fetchingAPI);
        if (!responses.every(response => response.ok)) {
            throw new Error("Responses are not okay!");
        }
        const data = await Promise.all(responses.map(response => response.json()));

        const pokemonData = data[0];
        const pokemonImage = pokemonData.sprites?.front_default;
        if (pokemonImage) {
            const imageElement = document.getElementById("pokemonImage");
            imageElement.src = pokemonImage;
            imageElement.style.display = "block";
        } else {
            console.error("Image not found");
        }
        console.log(data);
    }
    catch(error){
        console.error("Failed to fetch!")
    };
};
fetchData();