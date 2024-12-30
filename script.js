// Carrossel
let indice = 0;

function moverSlide(direcao) {
    const slides = document.querySelectorAll(".carrossel-slide");
    const totalSlides = slides.length;

    indice += direcao;

    if (indice < 0) {
        indice = totalSlides - 1; // Vai para o último slide
    } else if (indice >= totalSlides) {
        indice = 0; // Vai para o primeiro slide
    }

    atualizarCarrossel();
}

function atualizarCarrossel() {
    const container = document.querySelector(".carrossel-container");
    const larguraSlide = document.querySelector(".carrossel-slide").clientWidth;

    container.style.transform = `translateX(-${indice * larguraSlide}px)`;
}

// Função para a transição automática dos slides
function transicaoAutomatica() {
    moverSlide(1);
}

// Transição automática a cada 8 segundos
setInterval(transicaoAutomatica, 5000);

// Cálculo de Tempo
function calcularTempo() {
    // Data inicial: 16 de Janeiro de 2023
    const dataInicial = new Date('2023-01-16T00:00:00');
    
    // Data e hora atual
    const agora = new Date();
    
    // Calcula a diferença em milissegundos
    const diferenca = agora - dataInicial;
    
    // Converte para segundos
    const totalSegundos = Math.floor(diferenca / 1000);
    
    // Calcula anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(totalSegundos / (365.25 * 24 * 60 * 60));
    const meses = Math.floor((totalSegundos % (365.25 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const dias = Math.floor((totalSegundos % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    const segundos = totalSegundos % 60;

    // Atualiza os valores no HTML
    document.getElementById('anos').innerHTML = anos + '<div class="titulo">Anos</div>';
    document.getElementById('meses').innerHTML = meses + '<div class="titulo">Meses</div>';
    document.getElementById('dias').innerHTML = dias + '<div class="titulo">Dias</div>';
    document.getElementById('horas').innerHTML = horas + '<div class="titulo">Horas</div>';
    document.getElementById('minutos').innerHTML = minutos + '<div class="titulo">Minutos</div>';
    document.getElementById('segundos').innerHTML = segundos + '<div class="titulo">Segundos</div>';
}

// Chama a função a cada segundo
setInterval(calcularTempo, 1000);