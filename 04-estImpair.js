/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Exercice non implémenté : vérifier si n est impair
  // Placeholder neutre : retourne null pour indiquer non-implémentation

  // Vérifier que l’entrée est bien un nombre
 if (typeof n !== 'number' || isNaN(n)) {
    return null;
  }
  // Vérifier que c’est un entier
  if (!Number.isInteger(n)) {
    return null;
}
// Retourner true si impair, false si pair
  if (n % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

estImpair(3);
estImpair("3");
estImpair(0);
estImpair(-4);
estImpair(2.5);

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
