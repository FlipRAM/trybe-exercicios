const currentHour = 5;
let message = "";

if (currentHour >= 22) {
    message = "nao deveriamos comer nada, e hora de dormir";
    console.log(message);
}

if (currentHour >= 18 && currentHour < 22) {
    message = "rango da noite, vamos jantar";
    console.log(message);
}

if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro cafe da tarde?";
    console.log(message);
}

if (currentHour >= 11 && currentHour < 14) {
    message = "hora do almoco";
    console.log(message);
}

if (currentHour >= 4 && currentHour < 11) {
    message = "hmmm, cheiro de café recém passado";
    console.log(message);
}

let weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("oba, mais um dia de aprendizado na trybe");
}

else {
    console.log("finalmente, descanso merecido UwU");
}

let trafficLight = "vermelho";

switch (trafficLight) {
    case "vermelho":
        console.log("pare");
        break;
    
    case "amarelo":
        console.log("atenção");
        break;
    
    case "verde":
        console.log("siga!");
        break;

    default:
        console.log("Valor nao identificado");
}