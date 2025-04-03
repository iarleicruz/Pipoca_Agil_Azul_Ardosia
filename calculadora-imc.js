
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
        resultado.style.color = "red";
        imcImagem.src = './docs/imagens/homemPesoObeso-1.png'
     }


    // Exibe o resultado na página
       
    document.getElementById('resultado').innerText = resultadoTexto;
    console.log(imc)
  
  

 
  
});
