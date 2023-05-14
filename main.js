const fechaActual =document.getElementById('fechaActual')
const tiempoRestante =document.getElementById('tiempoRestante')

const texto =document.getElementById('parrafo')
const parrafo =document.getElementById('segundoParrafo')

function mostrarFecha(){
    const now = new Date();
    
    const weekday = now.toLocaleDateString('es-ch',{weekday: 'long'});
    const day =now.getDate();

    const month =now.toLocaleDateString('es-ch',{ month: 'long'});
   
    const seconds =now.getSeconds();
    const mins=now.getMinutes();
    const hour = now.getHours();
    const year = now.getFullYear();

    // texto.textContent = "Hoy es " + weekday + ' '+ day + " de " + month + " de " + year + " y son las " + hour + " y " + mins + "minutos con " + seconds + "segundos";
    
    alert("Hoy es " + weekday + ' '+ day + " de " + month + " de " + year + " y son las " + hour + " y " + mins + "minutos con " + seconds + "segundos")
}
mostrarFecha();

function tiempofaltante(id){
 const fecha = new Date('2023', '12', '01','12','00','00' ) 
 const hoy = new Date()
 let dias =0
 let horas=0
let minutos = 0
let segundos=0

if (fecha>hoy){
    let diferencia = (fecha.getTime()-hoy.getTime())/1000
    dias=Math.floor(diferencia/86400)
        diferencia=diferencia-(86400*dias)
        horas=Math.floor(diferencia/3600)
        diferencia=diferencia-(3600*horas)
        minutos=Math.floor(diferencia/60)
        diferencia=diferencia-(60*minutos)
        segundos=Math.floor(diferencia)

        segundoParrafo.textContent='Para que se acabe el año faltan: ' + dias + ' Dias, ' + horas + ' Horas, ' + minutos + ' Minutos y ' + segundos + ' Segundos.'

        if (dias>0 || horas>0 || minutos>0 || segundos>0){
            setTimeout("tiempofaltante(\"" + id + "\")",1000)
        }
    }
    else{
        segundoParrafo.textContent='Para que se acabe el año faltan:' + dias + ' Dias, ' + horas + ' HHoras, ' + minutos + ' Min, ' + segundos + ' Seg'
    }
}

tiempofaltante ();



