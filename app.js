// let pokemon; 
let guardaDados = 'squirtle';

//INICIO DA FUNÇÃO
pokemon = () => {
    guardaDados = document.getElementById('search').value
    let h2 = document.getElementById('nick')
    console.log(guardaDados)
    console.log(h2)
    h2.innerHTML = guardaDados
    axios.get(`https://pokeapi.co/api/v2/pokemon/${guardaDados}`)
        .then(sucesso => {
            const {name, abilities, sprites } = sucesso.data
            
            //Passando as habilidades
            for(var i = 0; i < abilities.length; i++ ){
                // console.log(abilities[i].ability.name)
                let habilidades = abilities[i].ability.name
                // console.log(habilidades)
                let hab = document.getElementById('hab'+[i])
                hab.innerHTML = habilidades
            }
            
            console.log(sprites.front_default)//pegando caminho da imagem
            
            //alterando a imagem do pokemon
            let imagemDoPokemon = sprites.front_default
            let caminhoDaImagem = document.getElementById('imagem')
            console.log(caminhoDaImagem)
            caminhoDaImagem.setAttribute('src', imagemDoPokemon)
            
})
//Fim do then
        .catch(erro => console.log(erro))
}


