function calcularTiempo(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let ampm = hora >= 12 ? "pm" : "am";


    hora = hora < 10 ? "0" + hora : hora;
    hora = hora >= 12 ? "0" + hora - 12: hora; 
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;


    let pantallaReloj = hora + ":" + minuto + ":" + segundo + "-" + ampm;
    let relojDigital = document.querySelector(".relojDigi");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);