/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function factorielle(n) {
  // Exercice non implémenté : calculer la factorielle de n
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  
  // Vérifier que n est un nombre valide et non négatif
  if (typeof n !== "number" || isNaN(n) || n < 0) return 0;

  // Cas particulier : 0! = 1
  if (n === 0) return 1;

  let resultat = 1;

  // Multiplier tous les entiers de 1 à n
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }

  return resultat;
}
factorielle(5); // 1*2*3*4*5 = 120
factorielle(0); // 1
factorielle(-2); // 0


// Ne pas modifier la ligne ci-dessous
module.exports = { factorielle }
