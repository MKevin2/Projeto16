// Carrossel
let indice = 0;
function moverSlide(direcao) {
    const slides = document.querySelectorAll(".carrossel-slide");
    const totalSlides = slides.length;
    indice += direcao;
    if (indice < 0) {
        indice = totalSlides - 1; // Direciona para slide anterior
    } else if (indice >= totalSlides) {
        indice = 0; // Direciona para o próximo slide 
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

// Transição automática a cada 5 segundos
setInterval(transicaoAutomatica, 5000);

function calcularTempo() {
    // Data inicial: 16 de Janeiro de 2023
    const dataInicial = new Date('2023-01-16T00:00:00');
    
    // Variável recupera a data atual
    const agora = new Date();
    
    // O uso do objeto Intl.DateTimeFormat é para fazer o cálculo preciso
    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();

    // Ajuste de valores caso o dia ou mês sejam negativos
    if (dias < 0) {
        meses -= 1;
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    // Obtenção das horas, minutos e segundos atuais
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Passa os valores recebidos para a página
    document.getElementById('anos').innerHTML = anos + '<div class="titulo">Anos</div>';
    document.getElementById('meses').innerHTML = meses + '<div class="titulo">Meses</div>';
    document.getElementById('dias').innerHTML = dias + '<div class="titulo">Dias</div>';
    document.getElementById('horas').innerHTML = horas + '<div class="titulo">Horas</div>';
    document.getElementById('minutos').innerHTML = minutos + '<div class="titulo">Minutos</div>';
    document.getElementById('segundos').innerHTML = segundos + '<div class="titulo">Segundos</div>';
}

// Atualização a cada 1 segundo
setInterval(calcularTempo, 1000);
