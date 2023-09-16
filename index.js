import prompt from "prompt-sync";
import { soustraction, multiplication } from "./tp/tp1.js";

//demande de tapper le premier nombre
let nombre1 = prompt()("taper le premier: ");
//demande de tapper le second nombre
let nombre2 = prompt()("taper le second: ");
//l'appel de fonction multiplication
let produit = multiplication(nombre1, nombre2);
//l'appel de fonction soustraction
let difference = soustraction(nombre1, nombre2);

//imprimer les resultats dans le terminal
console.log("le produit : ", produit);
console.log("la difference: ", difference);