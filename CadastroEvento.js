let nomeEvento = "Digite o nome do seu evento";
console.log(nomeEvento);
let data = "29/08/2021";
if (data == "28/08/2021") {
    console.log("O cadastro não realizado, pois a data é inválida.");
}
let participantes = ["Arthur", "Carlos", "Ronaldo"];
console.log("Lista de participantes.");

let numeroDeParticipantes = participantes.length;
console.log(nomeEvento);
if (participantes.length < 100) {  
console.log("Digite o nome do participante");

console.log("Digite sua idade");
let idade = 18;
if (idade >=18) {
   console.log("Digite seu CPF");
}
else {
   console.log("Voce não possui idade suficiente para participar do evento");

} 
}

    else {
    console.log("Limite de participante excedido!")
       
   }
  
  console.log("Estes serão nossos DJs:")  

let listadeDJs = ["DJ Cesar", "DJ Luiza", "DJ Natasha"];
let quantidadedeDJs = listadeDJs.length;
for (let indice=0; indice < quantidadedeDJs; indice++) {
    const DJsDoEvento = listadeDJs[indice];
    console.log(DJsDoEvento);
}