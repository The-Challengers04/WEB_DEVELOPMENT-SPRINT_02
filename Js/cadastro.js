document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('cadastroForm');
  var spanConfirmarSenha = document.getElementById('span_confirmarSenha')
  var spanCadastroConfirmado = document.getElementById('span_cadastroConfirmado')
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var senha = document.getElementById('senha').value;
    var confirmar_senha = document.getElementById('confirmar_senha').value;
  
    if (senha == confirmar_senha) {
      var cadastro = {
        nome: nome,
        email: email,
        celular: celular,
        senha: senha,
        confirmar_senha: confirmar_senha
      };
  
      // Verifica se já existem dados no localStorage
      var cadastros = localStorage.getItem('Users');
      if (cadastros) {
        cadastros = JSON.parse(cadastros);
      } else {
        cadastros = [];
      }
  
      cadastros.push(cadastro);
      localStorage.setItem('Users', JSON.stringify(cadastros));
  
      // Limpa o formulário após o envio
      form.reset();
      spanConfirmarSenha.style.display = 'none';
      spanCadastroConfirmado.style.display = 'block';
      setTimeout(function () {
        window.location.href = "../pages/login.html";
    }, 1000 );
    }
    else {
      spanConfirmarSenha.style.display = 'block';
    }
  });
});
  
  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }