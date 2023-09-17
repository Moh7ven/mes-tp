import prompt from "prompt-sync";
import { soustraction, multiplication, tempConvert } from "./tp/tp1.js";

//demande de taper le premier nombre
let nombre1 = prompt()("taper le premier: ");

//demande de taper le second nombre
let nombre2 = prompt()("taper le second: ");

//demande de taper le troisième nombre
let nombre3 = prompt()("Entrez températeur en fahrenheit ");

//l'appel de fonction multiplication
let produit = multiplication(nombre1, nombre2);

//l'appel de fonction soustraction
let difference = soustraction(nombre1, nombre2);

//l'appel de fonction tempConvert
let temperature = tempConvert(nombre3);

//imprimer les resultats dans le terminal
console.log("le produit : ", produit);
console.log("la difference: ", difference);
console.log("La température en Celcus est:", temperature);