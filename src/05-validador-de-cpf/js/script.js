function validar() {
    let cpf = document.getElementById("cpf").value;
  
    if (validarCPF(cpf)) {
      alert("CPF Válido!");
    } else {
      alert("CPF Inválido!");
    }
  }
  
  function validarCPF(cpf) {
    let numeros, digitos, soma, i, resultado, digitosIguais;
  
    digitosIguais = 1;
  
    if (cpf.length < 11) {
      return false;
    }
  
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitosIguais = 0;
        break;
      }
  
    if (!digitosIguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;
  
      for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
      if (resultado != digitos.charAt(0)) {
        return false;
      }
  
      numeros = cpf.substring(0, 10);
      soma = 0;
  
      for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
      if (resultado != digitos.charAt(1)) {
        return false;
      }
  
      return true;
    } else {
      return false;
    }
  }
  
  function limparCampo() {
    window.location.reload();
  }  