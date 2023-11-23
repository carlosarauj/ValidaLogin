let form = document.querySelector('#form')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let trabalho = document.querySelector('#trabalho')
let mensagem = document.querySelector('#mensagem')

form.addEventListener('submit', (eve) => {
    eve.preventDefault()
    //verifica se o campo nome está vazio
    if (nome.value == ''){
        alert('Preencha o campo de nome') 
        return
    }

    //verifica se o campo email está vazio
    if (email.value == '' || !emailValido(email.value)){
        alert('Preencha o campo de email') 
        return
    }

    if(!senhaValida(senha.value, 8)){
        alert('A senha deve ter pelo menos 8 digitos') 
        return
    }

    if (trabalho.value == ''){
        alert('Selecione a sua situação') 
        return
    }

    if (mensagem.value == ''){
        alert('Escreva sua mensagem') 
        return
    }

    //se todo os campos estiverem preenchidos, envie
    form.submit()
})

//func pra validar email
function emailValido(email){
    //cria um regex pra verificar email
    let emailRegex = new RegExp(
    //padrao de email: usuario01@gmail.com
    /^[a-zA-Z0-9._-]+[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if(emailRegex.test(email)){
        return true
    } else {
        return false
    }
}

function senhaValida(senha, minDigitos){
    if(senha.length >= minDigitos){
        return true
    } else {
        return false
    }

}


/*
⠀⠀   ⢀⡴⠁⠀ ⣿⡏⠀⠱⣄
⠀⠀⢀⣴⡟⠁⠀⠀⠀⣿⡇⠀⠀⠀⠙⣷⣄
⠀⠀⠙⢿⣷⣄⠀⠀⠀⣿⡇⠀⠀⢀⣴⣿⠋
⠀⠀⠀⠀⠙⢿⣷⣄⠀⢻⡇⢀⣴⣿⠋
⠀⠀⠀⠀⠀⠀⠈⠻⣷⣾⣷⡿⠋
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣄
⠀⠀⠀⠀⠀⢀⣶⣿⠟⢹⣏⠻⢿⣷⣄
⠀⠀⠀⢀⣼⣿⠟⠁⠀⢸⣿⠀⠈⠙⢿⣷⣄
⠀⠀⣴⣿⡟⠁⠀⠀⠀⢸⣿⠀⠀⠀⠀⣹⣿⡷
⠀⠀⠈⠻⣿⣦⡀⠀⠀⢸⣿⠀⠀⢀⣼⣿⠏
⠀⠀⠀⠀⠈⠻⣿⣦⡀⢸⣿⠀⣴⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣾⣿⣾⡿⠃⠀
⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠻⡿⠋
"My honored brethen
We come together
To unite as one
Against those that are damned
We show no mercy
For we have none
Our enemies shall fall
As we uprise
To claim our fate
Now and forever
We'll be together
Love and hate"
*/