function calcularTempo() {
    // Data inicial: 16 de Janeiro de 2023
    const dataInicial = new Date('2023-01-26T00:00:00');
    
    // Data e hora atual
    const agora = new Date();
    
    // Calcular a diferença total em milissegundos
    const diferencaMilissegundos = agora - dataInicial;

    // Calcular a diferença em dias (total de milissegundos dividido pelo número de milissegundos em um dia)
    const diasTotais = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    // Calcular os anos, meses e dias
    const anos = Math.floor(diasTotais / 365.25);  // Considera os anos bissextos
    const meses = Math.floor((diasTotais % 365.25) / 30);  // Aproximação para meses
    const dias = diasTotais % 30;  // Aproximação para o restante dos dias no mês

    // Cálculo de horas, minutos e segundos
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

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
