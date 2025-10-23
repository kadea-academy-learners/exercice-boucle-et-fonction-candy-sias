/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  // Placeholder neutre : retourne null pour indiquer non-implémentation

  // Vérifier le nombre d'arguments
  if (arguments.length !== 3) return null;

  // Vérifier les types et valeurs
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") return null;
  if (isNaN(a) || isNaN(b) || isNaN(c)) return null;

  // Cas : les trois nombres sont égaux
  if (a === b && b === c) {
    return "Les trois nombres sont égaux";
  }

  // Sinon, retourner le plus grand des trois
  return Math.max(a, b, c);
  // if (a > b && a > c) return a;
  // else if (b > c) return b;
  // else return c;

}

// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };
