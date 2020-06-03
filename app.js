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
            const {name, abilities } = sucesso.data
            console.log(abilities)

            //Passando as habilidades
            for(var i = 0; i < abilities.length; i++ ){
            // console.log(abilities[i].ability.name)
            let habilidades = abilities[i].ability.name
            console.log(habilidades)
            let hab = document.getElementById('hab'+[i])
            hab.innerHTML = habilidades
        }

        
            
})//Fim do then
        .catch(erro => console.log(erro))
}


	// 	//Criar o botão de exclusão
	// 	let btn = document.createElement('button')
	// 	btn.className = 'btn btn-danger'
	// 	btn.innerHTML = '<i class="fa fa-times"  ></i>'
	// 	btn.id = `id_despesa_${d.id}`
	// 	btn.onclick = function(){
	// 		let id = this.id.replace('id_despesa_','')
	// 		//alert(id)
	// 		bd.remover(id)
	// 		window.location.reload()
	// 	}
	// 	linha.insertCell(4).append(btn)
	// 	console.log(d)
	// })