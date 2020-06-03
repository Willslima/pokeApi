// let pokemon; 
let guardaDados = 'squirtle';
let reload = () => window.location.reload()
//INICIO DA FUNÇÃO
pokemon = () => {
    
    guardaDados = document.getElementById('search').value
    let h2 = document.getElementById('nick')
    console.log(guardaDados)
    console.log(h2)
    h2.innerHTML = guardaDados
    axios.get(`https://pokeapi.co/api/v2/pokemon/${guardaDados}`)
        .then(sucesso => {
            const { name, abilities, sprites } = sucesso.data

            //criando habilidades de acordo com a quantidade 
            for (var i = 0; i < abilities.length; i++) {
                let habilidade = abilities[i].ability.name
                let div = document.getElementById('habilidades')
                let criaHabilidades = document.createElement('p')
                criaHabilidades.textContent = habilidade
                div.appendChild(criaHabilidades)
            }

            //pegando caminho da imagem
            console.log(sprites.front_default)

            //alterando a imagem do pokemon
            let imagemDoPokemon = sprites.front_default
            let caminhoDaImagem = document.getElementById('imagem')
            console.log(caminhoDaImagem)
            caminhoDaImagem.setAttribute('src', imagemDoPokemon)

            //pegando o caminho das habilidades
            for (var i = 0; i < abilities.length; i++) {
                let urlDaDescricao = abilities[i].ability.url
                console.log(urlDaDescricao)//caminho OK

                //chamando as URL'S 
                axios.get(urlDaDescricao)
                    .then(sucesso => {
                       let Descricao = sucesso.data.effect_entries[0].effect
                       console.log(Descricao)

                       let descricaoIndex = document.getElementById('descricao-ability')
                       let criaDescricao = document.createElement('p')
                       criaDescricao.setAttribute('class', 'texto')
                       criaDescricao.textContent = Descricao
                    //    criaDescricao.appendChild(descricaoIndex)
                    descricaoIndex.appendChild(criaDescricao)
                       console.log(criaDescricao)
                    })

                    .catch(erro => erro)

            }
        })
        //Fim do then
        .catch(erro => console.log(erro))
}


