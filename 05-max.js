/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
  // Exercice non implémenté : retourner le plus grand ou un message si égaux
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return null;
  }
  // Vérifier l’égalité
  if (a === b) {
    return "Les deux nombres sont égaux";
  }
  // Retourner le plus grand
  if (a > b) {
    return a;
  } else {
    return b;
  }

  // Ou en plus court : return a > b ? a : b
}
console.log(max(5, 9));
console.log(max(10, 3));
console.log(max(4, 4));
console.log(max("4", 2));   // null

// Ne pas modifier la ligne ci-dessous
module.exports = { max }
