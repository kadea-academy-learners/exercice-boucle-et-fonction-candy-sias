/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // identifiez les voyelles
  const voyelles = "a e i o u y";
  // creez un compteur (pour compter le nombre des voyelles)
  let compt = 0;
  // parcourir chaque caractere de la phrase
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === "a") {
      compt ++;
    } else if (phrase[i] === "e") {
      compt ++;
    } else if(phrase[i] === "i") {
      compt ++;
    } else if(phrase[i] === "o") {
      compt ++;
    } else if(phrase[i] === "u") {
      compt ++;
    } else if(phrase[i] === "y") {
      compt ++;
    }
  }
  return compt;
}
nombreDeVoyelles("Bonjour"); // 3 (o, o, u)
nombreDeVoyelles("Candy");   // 2 (a, y)
nombreDeVoyelles("1234");    // 0


// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
