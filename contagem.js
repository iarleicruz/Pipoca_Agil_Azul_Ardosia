let visitantes = []

function contagem(){
    for(let cont = 0; cont < visitantes.length; cont++){
        visitantes += cont
        console.log(visitantes)
    }
}
console.log(contagem())