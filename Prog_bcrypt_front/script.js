let res_grav = document.getElementById('res_grav')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click',()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome:nome,
        email:email,
        senha:senha
    }
    fetch('http://localhost:3000/cadastrar',{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(dados)
    })
    .then(res_grav => res_grav.json())
    .then(dados =>{
            res_grav.innerHTML = 'Nome: ' + dados.nome + ' ,' + '<br>'
            res_grav.innerHTML +=  'email: ' + dados.email + ' ,'+ '<br>'
            res_grav.innerHTML += 'senha: ' + dados.senha + '<br>' + '<br>'
            res_grav.innerHTML += 'cadastro realizao com sucesso ' + '<br>'
    })
    .cath((err)=>{
        console.error('não foi possível cadastrar o usuário', err)
    })

})