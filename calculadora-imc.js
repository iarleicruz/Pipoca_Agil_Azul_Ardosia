
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


  


document.getElementById('imcForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores
    let genero = document.getElementById('genero').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

  
    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Exibe o resultado
      let resultadoTexto = `${imc.toFixed(2)}`;

   // Limpar os valores
 
   genero = document.getElementById('genero').selectedIndex = 'Selecione Gênero';
   peso = document.getElementById('peso').value = '';
   altura = document.getElementById('altura').value = '';
   document.getElementById('resultado').value = '';
   
      
    // Classificação e valores do IMC 
 
    if (imc < 18.5) {
        let imcClassificacao = document.querySelector('.imc p:nth-child(2)');
        let classificacao = document.querySelector('.classificacao p:nth-child(2)');
        let imcImagem = document.querySelector('.imcImagem img');
        imcClassificacao = document.querySelector('.imc p:nth-child(2)').style.color = 'green';
        classificacao = document.querySelector('.classificacao p:nth-child(2)').style.color = 'green';
        imcClassificacao = document.querySelector('.imc p:nth-child(3)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(3)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(4)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(4)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(5)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(5)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(6)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(6)').style.color = 'black';
        resultado.style.color = 'green';  
        imcImagem.src = './docs/imagens/homemPesoBaixo-1.png'
    } else if (imc >= 18.5 && imc < 24.9) {
        let imcClassificacao = document.querySelector('.imc p:nth-child(3)');
        let classificacao = document.querySelector('.classificacao p:nth-child(3)');
        let imcImagem = document.querySelector('.imcImagem img');
        imcClassificacao = document.querySelector('.imc p:nth-child(2)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(2)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(3)').style.color = 'green';
        classificacao = document.querySelector('.classificacao p:nth-child(3)').style.color = 'green';
        imcClassificacao = document.querySelector('.imc p:nth-child(4)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(4)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(5)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(5)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(6)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(6)').style.color = 'black';
        resultado.style.color = "green";
        imcImagem.src = './docs/imagens/homemPesoNormal-1.png'
    } else if (imc >= 25 && imc < 29.9) {
        let imcClassificacao = document.querySelector('.imc p:nth-child(4)');
        let classificacao = document.querySelector('.classificacao p:nth-child(4)');
        let imcImagem = document.querySelector('.imcImagem img');
        imcClassificacao = document.querySelector('.imc p:nth-child(2)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(2)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(3)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(3)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(4)').style.color = 'red';
        classificacao = document.querySelector('.classificacao p:nth-child(4)').style.color = 'red';
        imcClassificacao = document.querySelector('.imc p:nth-child(5)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(5)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(6)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(6)').style.color = 'black';
        resultado.style.color = "red";
        imcImagem.src = './docs/imagens/homemPesoSobrePeso-1.png'
     } else if (imc >= 30 && imc < 34.9) {
        let imcClassificacao = document.querySelector('.imc p:nth-child(5)');
        let classificacao = document.querySelector('.classificacao p:nth-child(5)');
        let imcImagem = document.querySelector('.imcImagem img');
        imcClassificacao = document.querySelector('.imc p:nth-child(2)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(2)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(3)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(3)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(4)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(4)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(5)').style.color = 'red';
        classificacao = document.querySelector('.classificacao p:nth-child(5)').style.color = 'red';
        imcClassificacao = document.querySelector('.imc p:nth-child(6)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(6)').style.color = 'black';
        resultado.style.color = "red";
        imcImagem.src = './docs/imagens/homemPesoObeso-1.png'
     } else{
        let imcClassificacao = document.querySelector('.imc p:nth-child(5)');
        let classificacao = document.querySelector('.classificacao p:nth-child(5)');
        let imcImagem = document.querySelector('.imcImagem img');
        imcClassificacao = document.querySelector('.imc p:nth-child(2)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(2)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(3)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(3)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(4)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(4)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(5)').style.color = 'black';
        classificacao = document.querySelector('.classificacao p:nth-child(5)').style.color = 'black';
        imcClassificacao = document.querySelector('.imc p:nth-child(6)').style.color = 'red';
        classificacao = document.querySelector('.classificacao p:nth-child(6)').style.color = 'red';
        resultado.style.color = "red";
        imcImagem.src = './docs/imagens/homemPesoObesoG1.png'
     }


    // Exibe o resultado na página
       
    document.getElementById('resultado').innerText = resultadoTexto;
    console.log(imc)
  
  

 
  
});


// Pesquina Saber Sobre o que

function pesquisaNoGoogleSaberSobre(){
  const termoPesquisa = document.querySelector('.header-2--barra-pesquisa input').value
  const urlPesquisa = `https://www.google.com/search?q=${termoPesquisa}`

   window.open(`${urlPesquisa}`, "_blank")

}

document.querySelector('.header-2--barra-pesquisa button').addEventListener('click', pesquisaNoGoogleSaberSobre)




// Pesquina Contatos Uteis

function pesquisaNoGoogleContatosUteis(){
  const termoPesquisa = document.querySelector('.header-3--barra-pesquisa input').value
  const urlPesquisa = `https://www.google.com/search?q=${termoPesquisa}`
   window.open(`${urlPesquisa}`, "_blank")
}
document.querySelector('.header-3--barra-pesquisa button').addEventListener('click', pesquisaNoGoogleContatosUteis)




// Ir para o site com acesso a determinado parámetro  

function pesquisarEAbrirConteudo1(){
  // const termoPesquisa = "conteudo"
  const urlPesquisa = "https://www.heartfailurematters.org/pt-br/o-que-e-a-insuficiencia-cardiaca/"
   window.open(`${urlPesquisa}`, "_blank")
}
document.querySelector('.conteudo-1 button').addEventListener('click', pesquisarEAbrirConteudo1)



// Ir para o site com acesso a determinado parámetro  

function pesquisarEAbrirConteudo2(){
  // const termoPesquisa = "conteudo"
  const urlPesquisa = "https://bvsms.saude.gov.br/saude-do-coracao/"
   window.open(`${urlPesquisa}`, "_blank")
}
document.querySelector('.conteudo-2 button').addEventListener('click', pesquisarEAbrirConteudo2)


// Ir para o site com acesso a determinado parámetro  

function pesquisarEAbrirConteudo3(){
  // const termoPesquisa = "conteudo"
  const urlPesquisa = "https://www.paho.org/pt/topicos/doencas-cardiovasculares#main-content"
   window.open(`${urlPesquisa}`, "_blank")
}
document.querySelector('.conteudo-3 button').addEventListener('click', pesquisarEAbrirConteudo3)




// Ir para o site com acesso a determinado parámetro  
function pesquisarEAbrirConteudo4(){
  // const termoPesquisa = "conteudo"
  const urlPesquisa = "http://www.cardiometro.com.br/video_3.asp#conteudo"
   window.open(`${urlPesquisa}`, "_blank")
}
document.querySelector('.conteudo-4 button').addEventListener('click', pesquisarEAbrirConteudo4)


// Ir para o site com acesso a determinado parámetro  

function pesquisarEAbrirConteudo5(){
  // const termoPesquisa = "conteudo"
  const urlPesquisa = "https://www.coracao.org.br/fatores-de-risco"
   window.open(`${urlPesquisa}`, "_blank")
}
document.querySelector('.conteudo-5 button').addEventListener('click', pesquisarEAbrirConteudo5)