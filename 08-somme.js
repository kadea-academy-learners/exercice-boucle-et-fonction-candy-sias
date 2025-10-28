/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
  // Exercice non implémenté : retourner la somme de 1 à n
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation

  // Vérifier que n est un nombre valide et positif
  if (typeof n !== "number" || isNaN(n) || n < 1) return 0;

  let total = 0;

  // Additionner tous les entiers de 1 à n
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
somme(4); // 1 + 2 + 3 + 4 = 10
somme(0); // 0 (car n est invalide)
somme(-3); // 0


// Ne pas modifier la ligne ci-dessous
module.exports = { somme }
