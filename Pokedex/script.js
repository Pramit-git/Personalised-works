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

        const weight = data.weight;
        const weightelement = document.getElementById("weight")
        weightelement.textContent = `Weight: ${weight}`;

        const height = data.height;
        const heightelement = document.getElementById("height")
        heightelement.textContent = `Height: ${height}`;

    }
    catch (error) {
        console.log(error);
    }
}

const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Fun", "Cool", "Awesome","Life"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
