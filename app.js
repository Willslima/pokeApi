function pegaDados(){
    let guardaDados = document.getElementById('search').value
    let h2 = document.getElementById('nick')
    console.log(guardaDados) 
    console.log(h2)
    h2.innerHTML = guardaDados

}




axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(sucesso => console.log(sucesso)
    )
    
    .catch(erro => console.log(erro))