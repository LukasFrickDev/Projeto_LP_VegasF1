AOS.init();

const dataEvento = new Date('21 Nov, 2024 23:00:00');
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const intervaloEvento = timeStampEvento - timeStampAgora;

    const diaMs = 1000 * 60 * 60 * 24 ;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000 * 60;

    const diaAteEvento = Math.floor(intervaloEvento / diaMs);
    const horaAteEvento = Math.floor(intervaloEvento % (diaMs) / horaMs);
    const minutosAteEvento = Math.floor( intervaloEvento % (horaMs) / minutoMs);
    const segundosAteEvento = Math.floor(intervaloEvento % (minutoMs) / 1000);

    const idContador = document.getElementById('contador');
    const contador = `${diaAteEvento}d ${horaAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`

    idContador.innerHTML = contador;

    if (intervaloEvento < 0 ) {
        clearInterval(contaTempo);
        idContador.innerHTML = 'o Evento já iniciou';
        idContador.style.textTransform = 'uppercase';
    }


}, 1000)