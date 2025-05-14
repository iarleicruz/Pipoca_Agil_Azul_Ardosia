
// Navegar com a tecla ENTER

window.addEventListener(
  'keydown',
  function (e) {
   if ((e.keyCode != 13) && (e.keyCode != 9)) return
   e.preventDefault()
   e.keyCode=0

    const focusableElements = Array.from(
    document.querySelectorAll(
     'a, button, select, input, textarea, [tabindex]:not([tabindex="-1"])'
    )
   ).filter(el => !el.disabled && el.offsetParent !== null)

   const currentIndex = focusableElements.indexOf(document.activeElement)
   const nextIndex = (currentIndex + 1) % focusableElements.length

   focusableElements[nextIndex].focus()

  })

// Calcular IMC

const FaixaIMC = Object.freeze({
  ABAIXO_DO_PESO: 1,
  PESO_NORMAL: 2,
  SOBREPESO: 3,
  OBESIDADE: 4,
  OBESIDADE_GRAVE: 5
});

// Função para o campo de peso (permite apenas números inteiros e adiciona "kg")
function bloquearPeso(input) {
  input.addEventListener("input", function () {
    // Remove tudo que não for número
    let valor = this.value.replace(/[^0-9]/g, "");

    valor = valor.slice(0, 3);

    // Remove zero inicial indevido
    if (valor.length > 1 && valor.charAt(0) === "0") {
      valor = valor.slice(1);
    }

    let valorFormatado = valor;
    if (valor.length >= 2) {
      valorFormatado += " kg";
    }

    this.value = valorFormatado;
  });

  input.addEventListener("keydown", function (e) {
    // Bloqueia espaços, pontos e vírgulas
    if ([" ", ".", ","].includes(e.key)) e.preventDefault();
  });
}

// Função para o campo de altura (adiciona "metros" após 1 número depois da vírgula)
function bloquearCaracteresInvalidos(input) {
  input.addEventListener("input", function () {
    let valor = this.value.replace(/[^0-9]/g, "");

    if (valor.length === 0) {
      this.value = "";
      return;
    }

    let parteInteira = valor.substring(0, 1);
    let parteDecimal = valor.substring(1, 3); 

    let resultado = parteInteira;

    if (parteDecimal.length > 0) {
      resultado += "," + parteDecimal;
    }

    if (parteDecimal.length >= 1) {
      resultado += " m";
    }

    this.value = resultado;
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === " ") e.preventDefault();
  });
}

const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");

bloquearPeso(pesoInput);
bloquearCaracteresInvalidos(alturaInput);

document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const genero = document.getElementById("genero").value;
  const resultado = document.getElementById("resultado");

  const peso = parseFloat(pesoInput.value.replace(" kg", "").replace(",", "."));
  const altura = parseFloat(alturaInput.value.replace(" metros", "").replace(",", "."));

  if (!peso || !altura || altura === 0) {
    alert("Dados inválidos:\n O peso deve estar entre 30kg e 200kg.\n A altura deve estar entre 1 e 2.5 metros.");
    return;
  }

  const pesoInvalido = peso < 30 || peso > 200;
  const alturaInvalida = altura < 1 || altura > 2.5;

  if (pesoInvalido && alturaInvalida) {
    alert("Dados inválidos:\n O peso deve estar entre 30kg e 200kg.\n A altura deve estar entre 1 e 2.5 metros.");
    return;
  } else if (pesoInvalido) {
    alert("O peso deve estar entre 30kg e 200kg.");
    return;
  } else if (alturaInvalida) {
    alert("A altura deve estar entre 1 e 2.5 metros.");
    return;
  }

  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(2).replace(".", ",");

  resultado.innerText = imcFormatado;
  resultado.style.color = imc >= 25 ? "red" : "green";

  resetarCores();

  if (genero === "masculino") {
    atualizarClassificacao(imc, "H");
  } else if (genero === "feminino") {
    atualizarClassificacao(imc, "M");
  } else {
    resultado.innerText = "Selecione o gênero.";
    resultado.style.color = "black";
  }
});

function resetarCores() {
  const imcP = document.querySelectorAll(".imc p");
  const classificacaoP = document.querySelectorAll(".classificacao p");
  imcP.forEach(p => p.style.color = "black");
  classificacaoP.forEach(p => p.style.color = "black");
}

function atualizarClassificacao(imc, prefixoImagem) {
  const imagem = document.querySelector(".imcImagem img");

  let faixa;
  if (imc < 18.5) faixa = FaixaIMC.ABAIXO_DO_PESO;
  else if (imc < 25) faixa = FaixaIMC.PESO_NORMAL;
  else if (imc < 30) faixa = FaixaIMC.SOBREPESO;
  else if (imc < 35) faixa = FaixaIMC.OBESIDADE;
  else faixa = FaixaIMC.OBESIDADE_GRAVE;

  const imcP = document.querySelector(`.imc p:nth-child(${faixa + 1})`);
  const classificacaoP = document.querySelector(`.classificacao p:nth-child(${faixa + 1})`);

  if (faixa === FaixaIMC.PESO_NORMAL || faixa === FaixaIMC.ABAIXO_DO_PESO) {
    imcP.style.color = "green";
    classificacaoP.style.color = "green";
  } else {
    imcP.style.color = "red";
    classificacaoP.style.color = "red";
  }

  imagem.src = `./docs/imagens/${prefixoImagem}${faixa}.png`;
}


// Pesquina Saber Sobre o que

function pesquisaNoGoogleSaberSobre(){
  const termoPesquisa = document.querySelector('.header-2--barra-pesquisa input').value;
  if( termoPesquisa !== ''){
   const urlPesquisa = `https://www.google.com/search?q=${termoPesquisa}`;
   window.open(`${urlPesquisa}`, "_blank");
 }
  
}
document.querySelector('.header-2--barra-pesquisa button').addEventListener('click', pesquisaNoGoogleSaberSobre);




// Pesquina Contatos Uteis

function pesquisaNoGoogleContatosUteis(){
  const termoPesquisa = document.querySelector('.header-3--barra-pesquisa input').value;
  
 if( termoPesquisa !== ''){
   const urlPesquisa = `https://www.google.com/search?q=${termoPesquisa}`;
   window.open(`${urlPesquisa}`, "_blank");
 }
  
}
document.querySelector('.header-3--barra-pesquisa button').addEventListener('click', pesquisaNoGoogleContatosUteis);





