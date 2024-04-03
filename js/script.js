function expandir(container) {
    if (container.classList.contains("expandido")) {
        // Se o container estiver expandido, recolha-o
        container.classList.remove("expandido");
    } else {
        // Se o container não estiver expandido, expanda-o e recolha os outros containers
        container.classList.add("expandido");
        var outrosContainers = document.querySelectorAll(".container1, .container2, .container3");
        outrosContainers.forEach(function(element) {
            if (element !== container && element.classList.contains("expandido")) {
                element.classList.remove("expandido");
            }
        });
    }
}

function moverCarro(direita) {
    var carro = document.querySelector('.carro');
    var faixa = document.querySelector('.faixa');
    if (direita) {
        carro.style.left = "80%"

    } else {
        carro.style.left = '30%';
    }
}


function gerarExplosao() {
    var carro = document.querySelector('.carro');
    carro.src = './img/explosao1.gif'; // Substituir pelo caminho da imagem de explosão
    carro.classList.add('explosao');
    carro.style.left = carro.offsetLeft + 'px';
    carro.style.top = carro.offsetTop + 'px';

    // Alterando o plano de fundo da pista quando clicar 
    var faixa = document.querySelector('.faixa')
    faixa.style.backgroundImage = "url('./img/bg_footer.avif')";

    //Texto da formula 1
    var formula1 = document.querySelector('.formula1')
    formula1.style.opacity = 100;

    // Logo da formula 1, era pra ser da Unipar mais não encontrei png branca 
    var logounipar = document.querySelector('.logounipar')
    logounipar.style.opacity = 100;

    /* Alterando o plano de fundo quando clicar na pista 
    var corpo = document.querySelector('.corpo');
    corpo.style.background = "linear-gradient(#fff, #aca5a5)";*/

    
    
    carro.style.opacity = 0;
    
    // Remover o evento de mover o carro
    carro.parentNode.onmouseover = null;
    carro.parentNode.onmouseout = null;
}