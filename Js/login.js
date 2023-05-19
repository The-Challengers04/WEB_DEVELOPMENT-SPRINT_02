// OBTENDO ELEMENTOS HTML
const form = document.querySelector(".formLogin");
const emailInput = document.querySelector("#email");
const labEmail = document.querySelector("label[for='email']");
const senhaInput = document.querySelector("#password");
const labSenha = document.querySelector("label[for='password']");
emailInput.div = form.children[2]; // Criando um novo atributo do elemento para armazenar a sua div
senhaInput.div = form.children[3];  // Criando um novo atributo do elemento para armazenar a sua div
const eye = document.querySelector("#eye");
const btnEntrar = document.querySelector("#btnEntrar");

// DEFININDO CONSTANTES
const defaultColor = "#383838b4"; // A cor padrão dos elementos quando iniciam 
const validColor = "#06c426"; // A cor que os elementos apresentam quando o input esta validado corretamente
const invalidColor = "#b61414"; // A cor que os elementos apresentam quando o input esta invalido

// CRIANDO MODELO DE MENSAGEM DE ERRO
const errorMessageType = "span";
const errorMessageSize = "12px";
const errorMessageColor = invalidColor;

/*
OBJETO SALVO NO LOCAL STORAGE
let Users = [{
    nomeCompleto:"",
    celular:0,
    email:"",
    senha:""

}];
*/

//Evitando que o formulário se submeta sem validação
form.addEventListener('submit', e => {
    e.preventDefault();
})

// Função para lançar uma mensagem de erro no HTML
function throwErrorMessage(element, message)
{
    if(element.lastChild.classList == "error")
    {
        element.lastChild.textContent = message;
    }
    else
    {
        let errorMessage = document.createElement(errorMessageType);
        errorMessage.style.color = errorMessageColor;
        errorMessage.classList = "error"
        errorMessage.style.fontSize = errorMessageSize;
        errorMessage.textContent = message;
        element.appendChild(errorMessage);
    }
}

//Função para mudar a cor de um elemento
function changeInputElementColor(element,label, color)
{
    element.style.borderColor = color;
    element.style.color = color;
    label.style.color = color;
}

// Função para retornar o elemento ao estado original
function resetElement(element,label){
    changeInputElementColor(element,label,defaultColor);
    if(element.div.lastChild.classList == "error")
        element.div.lastChild.remove();
}


function checkCredenciais(){ // Método para a validação do Email e Senha inseridos
    let email = emailInput.value;
    let senha = senhaInput.value;
    let emailRegistrado = false;

    let users = JSON.parse(window.localStorage.getItem("Users")) // Recupera os usuários salvos no localStorage
    
    if(users == null) // Não existe registro no local Storage
        console.log("Não há usuários cadastrados no sistema");
    else
    {
        try{
            for(let i = 0; i < users.length; i++) // Andando pelo array de usuários 
            {
                if(email.toLowerCase() == users[i].email.toLowerCase()) // Verifica se o email é válido
                {
                    emailRegistrado = true;
                    if(senha.toLowerCase() == users[i].senha.toLowerCase())//Usuário validado
                        throw true; 
                    
                }
            }
            throw false;
        }catch(status){
            /*
            true = Acesso liberado
            false = Acesso negado
            */

            if(status) // Autenticação Autorizada
            {
                changeInputElementColor(emailInput,labEmail, validColor);
                changeInputElementColor(senhaInput,labSenha, validColor);
                //Mensagem de aprovação
                setInterval(()=>{
                    window.location.href = "../index.html";
                },1000)
            }
            else // Credencias não Autorizadas
            {
                if(emailRegistrado)
                {
                    changeInputElementColor(emailInput,labEmail, validColor);
                }
                else
                {
                    changeInputElementColor(emailInput,labEmail, invalidColor);
                    throwErrorMessage(emailInput.div,"Email Inválido");
                }

                changeInputElementColor(senhaInput,labSenha, invalidColor);
                throwErrorMessage(senhaInput.div,"Senha Inválida");
            }
        }
    }
}

emailInput.addEventListener("keydown",()=>{resetElement(emailInput,labEmail);});

senhaInput.addEventListener("keydown",()=>{resetElement(senhaInput,labSenha);});

eye.addEventListener("click", () => {
    if(eye.className == "fa fa-eye") // Revelar Senha
    {
        senhaInput.type = "password";
        eye.className = "fa fa-eye-slash";
    }
    else // Ocultar Senha
    {
        senhaInput.type = "text";
        eye.className = "fa fa-eye";
    }
})

btnEntrar.addEventListener("click",checkCredenciais)
