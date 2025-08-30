fetchData();
async function fetchData() {
    try {
        const pokemonname = document.getElementById("pokename").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
        if (!response.ok) {
            console.log("Entered pokemon is not present")
        }
        const data = await response.json();
        console.log(data);


        const pokemonsprites = data.sprites.front_default;
        const imgelement = document.getElementById("pokemonsprite")
        imgelement.src = pokemonsprites;
        imgelement.style.display = "block";


        const name = data.name.toUpperCase();
        const types = data.types.map(t => t.type.name.toUpperCase());

        const typeelement = document.getElementById("type")
        typeelement.textContent = types;

        const namelement = document.getElementById("name")
        namelement.textContent = name;

        const shinysprite = document.getElementById("pokemonspriteshiny")
        const shiny = data.sprites.front_shiny;
        shinysprite.src = shiny;
        shinysprite.style.display = "block";

    }
    catch (error) {
        console.log(error);
    }
}