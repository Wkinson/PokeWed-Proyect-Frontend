const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Flatam.ign.com%2Fpokemon-tv%2F64560%2Fnews%2Fpokemon-este-es-el-pasado-triste-de-pikachu&psig=AOvVaw34TAve0KeZDHdy2fT1uXHY&ust=1668633004175000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODFw76MsfsCFQAAAAAdAAAAABAE")
        }
        else {
            return res.json();
        }
    })

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        console.log(pokeImg);
    }
    
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById('abilities');
    const abilitiesName = abilities.map((item) => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;

}


