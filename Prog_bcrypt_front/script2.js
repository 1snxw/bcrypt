let login = document.getElementById('login')
let res_log = document.getElementById('res_log')

login.addEventListener('click',()=>{

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome:nome,
        email:email,
        senha:senha
    }

    fetch('http://localhost:3000/logar',{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(dados)
    })
    .then(res_log => res_log.json())
    .then(valor =>{
            res_log.innerHTML = 'Login realizado com sucesso, <br> aguarde para ser redirecionado para a págna principal' + valor
    })
    .catch((err)=>{
        console.error('não logar no site', err)
    })
})