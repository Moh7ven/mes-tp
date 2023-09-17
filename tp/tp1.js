//Fonction pour la soustraction
const soustraction = (nb1, nb2)=>{
    return nb1 - nb2;
 }

 //Fonction la multiplication
 const multiplication = (nb3, nb4)=> {
    return nb3 * nb4;
 }

//Fonction de convertion de température fahrenheit en celcus
const tempConvert = (farenh) => {
   return parseInt((farenh-32)/1.8);
}
 export { soustraction, multiplication, tempConvert };
 