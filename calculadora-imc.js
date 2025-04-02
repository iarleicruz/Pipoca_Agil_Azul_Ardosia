
document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores
    const genero = document.getElementById('genero').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Exibe o resultado
    let resultadoTexto = `Seu IMC é: ${imc.toFixed(2)}`;

    // Classificação do IMC
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade Grau 2';
    } else {
        classificacao = 'Obesidade Grau 3';
    }

    // Adiciona a classificação ao resultado
    resultadoTexto += ` - Classificação: ${classificacao}`;

    // Exibe o resultado na página
    document.getElementById('resultado').innerText = resultadoTexto;
});
