# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 -Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
typeof null renvoie 'object' à cause d'un bug historique de JS de 1995. Pour ne pas casser le web, il a été gardé.
NB: c'est un cas spécial à connaître, mais null n'est PAS un objet.
...

**Mon test dans la console :**
console.log(typeof null);

```node F1-carte-apprenant.js
// colle ici le test que tu as exécuté et le résultat obtenu

```console.logconsole.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);
console.log(typeof prenom, typeof age, typeof commune, typeof estMajeur, typeof adresse, typeof voiture);


je suis syntiche, j'ai 20 ans ,et j'habite à ngaliema avec ma famille.
string, number, string, boolean, undefined, null
**Source :** OUI.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof
**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
NaN = Not a Number, c'est quand le calcul est impossible comme Number('abc').
Même NaN === NaN donne false, car 2 erreurs ne sont pas égales entre elles.
C'est une règle bizarre mais c'est comme ça en JS depuis le début.
Donc on ne teste jamais avec ===, ça ne marche pas.
On utilise Number.isNaN() qui lui renvoie bien true.

...

**Mon test dans la console :**const saisie = '2500';
console.log(saisie + 500); // 2500500
console.log(Number(saisie) + 500); // 3000

console.log(Number('')); // 0
console.log(Number('abc')); // NaN
console.log(Number(' 42 ')); // 42
console.log(Number(true)); // 1

console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

node F2-convertisseur.js
// colle ici le test que tu as exécuté et le résultat obtenu
```2500500
3000
0
NaN
42
1
false
true

**Source :** META ASSISTANT et Mdn NaN et Number.isNaN().

**IA utilisée ? (prompt + vérification sur MDN) :** non
 **Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
-7 % 2 renvoie -1 car le reste de la division de -7 par 2 est -1. Il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair, car les nombres négatifs impairs donnent un reste de -1, pas 1.
...

**Mon test dans la console :**console.log(-7 % 2); // -1
console.log(7 % 2);  // 1
console.log(-7 % 2 !== 0); // true
console.log(7 % 2 !== 0);  // true

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```Ticket 17 : impair, tu gagnes un stylo.


## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
-7 % 2 renvoie -1 car le reste de la division de -7 par 2 est -1. Il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair, car les nombres négatifs impairs donnent un reste de -1, pas 1.
...

**Mon test dans la console :**console.log(-7 % 2); // -1
console.log(7 % 2);  // 1
console.log(-7 % 2 !== 0); // true
console.log(7 % 2 !== 0);  // true

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```Ticket 17 : impair, tu gagnes un stylo.

**Source :** MDN Web Docs - Reste (%)
**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
-7 % 2 renvoie -1 car le reste de la division de -7 par 2 est -1. Il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair, car les nombres négatifs impairs donnent un reste de -1, pas 1.
...

**Mon test dans la console :**console.log(-7 % 2); // -1
console.log(7 % 2);  // 1
console.log(-7 % 2 !== 0); // true
console.log(7 % 2 !== 0);  // true

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```Ticket 17 : impair, tu gagnes un stylo.
**source :[MDN - Opérateur modulo](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder)


**IA utilisée ? (prompt + vérification sur MDN) :** oui

## F4 — Le contrôleur du bus

*

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Oui, on peut enchaîner plusieurs ternaires avec la syntaxe cond1 ? val1 : cond2 ? val2 : val3. Mais c'est déconseillé car ça rend le code illisible et difficile à déboguer. Mieux vaut utiliser if/else pour la clérté.

**Mon test dans la console :**
const age= 16;
const statut= age >=18 ? "majeur" : "mineur";
let tarif;
if (age < 5){
    tarif= "gratuit"
} else if(age < 18){
    tarif= "500 fc";
} else {
    tarif = "1000 fc";
}
...
```js*Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

// colle ici le test que tu as exécuté et le résultat obtenu
const age= 16;
const statut= age >=18 ? "majeur" : "mineur";
let tarif;
if (age < 5){
    tarif= "gratuit"
} else if(age < 18){
    tarif= "500 fc";
} else {
    tarif = "1000 fc";
}
Statut : mineur — Tarif : 500 FC




**IA utilisée ? (prompt + vérification sur MDN) :**  MDN Web Docs - Opérateur conditionnel (ternaire)

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
 - On peut les enlever si la fonction a exactement 1 paramètre :

const x = a => a * 2; // OK
const y = (a, b) => a + b; // (a,b) obligé
const z = () => 5; // () obligé

2. return et accolades : MDN Web Docs - Fonctions fléchées (Arrow functions)
    - On peut les enlever si la fonction a une seule expression :

const somme = (a,b) => a + b; // OK
const carre = x => x * x; // OK

    - Si on garde les accolades, return est obligatoire :

const somme = (a,b) => { return a + b; }

...

**Mon test dans la console :**
const saluer = (prenom) =>`Mbote ${prenom}  !`;
 const carre = (n) => n*n;
 console.log(`${saluer('Lys')} puis ${carre(7)}`);


```js
// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(`${saluer('Lys')} puis ${carre(7)}`);

Mbote Lys ! puis 49.

**Source :** MDN Web Docs - Fonctions fléchées (Arrow functions)

**IA utilisée ? (prompt + vérification sur MDN) :** non  

## F6 — Le compte à rebours

***Question :* À quoi sert le mot-clé continue ? Quelle différence avec break ?
continue sert à sauter le tour actuel de la boucle et à passer directement au tour suivant.
break arrête complètement la boucle, il n'y a plus de tour après.
Avec continue, la boucle continue de tourner. Avec break, elle s'arrête.

...

**Mon test dans la console :**
console.log( "Decollage !")

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```for (let i =10; i >=1 ; i--)
    console.log(i)
    10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage !

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
FizzBuzz est célèbre parce que c'est un exercice simple qui révèle beaucoup sur :
- La logique de base du candidat
- Sa capacité à écrire du code propre
- Sa compréhension des boucles et conditions


...

**Mon test dans la console :**
for (let i = 1; i <= 30; i++) 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("MalewaWewa");for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("MalewaWewa");
  } else if (i % 3 === 0) {
    console.log("Malewa");
  } else if (i % 5 === 0) {
    console.log("Wewa");
  } else {
    console.log(i);
  }
}
  }

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(i);
1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa

**Source :** : MDN Web Docs - Fonctions fléchées  

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
*(75000).toLocaleString('fr-FR'); // "75 000"


- 'fr-FR' force le format avec des espaces comme séparateur de milliers.
- Par défaut, toLocaleString() utilise les paramètres du navigateur.


...

**Mon test dans la console :**
console.log(retirer(100000, 25000)); 
console.log(retirer(100000, 12000)); 
console.log(retirer(1000000, 600000)); 
console.log(retirer(20000, 50000));
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const retirer = (solde, montant) => {
  if (montant < 0 || montant % 5000 !== 0) {
    return `Montant invalide : multiples de 5 000 FC uniquement`;
  }
  if (montant > 500000) {
    return `Plafond dépassé : 500 000 FC maximum`;
  }
  if (montant > solde) {
    return `Solde insuffisant`;
  }
  const nouveauSolde = solde - montant;
  return `Retrait accepté. Nouveau solde : ${nouveauSolde.toLocaleString('fr-CG')} FC`;
};
retirer(100000, 25000)   -> Retrait accepté. Nouveau solde : 75000 FC
retirer(100000, 12000)   -> Montant invalide : multiples de 5 000 FC uniquement
retirer(1000000, 600000) -> Plafond dépassé : 500 000 FC maximum
retirer(20000, 50000)    -> Solde insuffisant


**Source :** MDN Web Docs - Reste (%).

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Les valeurs falsy en JS sont :
1. false
2. 0 (et -0, +0)
3. "" (chaîne vide)
4. null
5. undefined
6. NaN


...

**Mon test dans la console :**
console.log(estRempli(''));
console.log(estRempli('Esther'));
console.log(estRempli(0));
console.log(estRempli(42));
console.log(estRempli(null));
console.log(estRempli(undefined));
console.log(estRempli(NaN));
console.log(estRempli(' '));
console.log(estRempli('0'));
console.log(estRempli(false));



```js
// colle ici le test que tu as exécuté et le résultat obtenu
const estRempli = (valeur) => valeur ? 'rempli' : 'vide';
```

**Source :** MDN Web Docs - Falsy

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
- a ?? b : renvoie b seulement si a est null ou undefined.
- a || b : renvoie b si a est falsy (0, "", false, etc.).
...

**Mon test dans la console :**
estConnecte && console.log('Bienvenue !');
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```onst afficherScoreBug = (score) => {
  const scoreFinal = score || "aucun";
  return `Score : ${scoreFinal}`;
};

console.log(afficherScoreBug(15));
console.log(afficherScoreBug(0));
console.log(afficherScoreBug(undefined));

const afficherScore = (score) => {
  const scoreFinal = score ?? "aucun";
  return `Score : ${scoreFinal}`;
};

console.log(afficherScore(15));
console.log(afficherScore(0));
console.log(afficherScore(undefined));

const estConnecte = true;
estConnecte && console.log('Bienvenue !');
avant correction : 15, aucun, aucun ; après correction : 15, 0, aucun.


**Source :** MDN Web Docs - Opérateur de coalescence des nuls

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Oublie var ! C'est un vieux piège du JS qui permet d'utiliser une variable avant de l'avoir déclarée (le hoisting) et qui pollue tout le code en ignorant les blocs {} (portée de fonction). Aujourd'hui, on utilise let et const pour un code propre, logique et sans mauvaises surprises
...

**Mon test dans la console :**
console.log(afficher());
console.log('Pas d\'accès à secret ici (portée limitée à afficher)');

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.


**Source :** MDN Web Docs - var

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
L'ASI (Insertion automatique de point-virgule), c'est ce petit réflexe qu'a JavaScript de rajouter des points-virgules tout seul là où tu as oublié d'en mettre. Le souci, c'est qu'il peut se rater et en glisser au mauvais endroit, ce qui déclenche des bugs bizarres et difficiles à pister. Bref, autant le faire soi-même pour éviter les mauvaises surprises !
...

**Mon test dans la console :**
const saluer = (prenom) => `Mbote ${prenom}`;
console.log(saluer('Ney')); // Mbote Ney
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/return

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Les principaux opérateurs d'affectation composée en JavaScript sont +=, -=, *=, /= et %=. Ils permettent de combiner une opération mathématique et une réaffectation en un seul geste.
let x = 5;
x += 2; // x vaut 7 (équivalent à x = x + 2)
x -= 1; // x vaut 6
x *= 3; // x vaut 18
x /= 2; // x vaut 9
x %= 4; // x vaut 1
...

**Mon test dans la console :**

console.log(`Total après 12 semaines : ${total} FC`);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** MDN Web Docs - Affectation

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
La principale différence, c'est que la boucle while teste la condition avant d'exécuter le bloc (donc elle peut ne jamais tourner si la condition est fausse dès le départ), tandis que la boucle do...while exécute le bloc au moins une fois avant de vérifier la condition.
...

**Mon test dans la console :**
console.log(`Avec 15% au départ : ${heures} tours`); // 0 tour
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```let batterie = 100;
let heures = 0;

while (batterie > 20) {
  batterie *= 0.85; // retire 15%
  heures++;
}

console.log(`Après ${heures} h, batterie à ${Math.round(batterie)} % : branche ton téléphone !`);

// Test avec 15%
batterie = 15;
heures = 0;
while (batterie > 20) {
  batterie *= 0.85;
  heures++;
}
Après 6 h, batterie à 10 % : branche ton téléphone !

**Source :** MDN Web Docs - instructions do...while

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
- 0.1 + 0.2 ≠ 0.3 à cause des erreurs d'arrondi en virgule flottante (IEEE 754).
- toFixed() renvoie une chaîne (string), pas un nombre → piège pour les calculs :

(0.1 + 0.2).toFixed(1) + 1; // "0.31" (string+number = string)

Solution : reconvertir en nombre :

+((0.1 + 0.2).toFixed(1)) + 1; // 1.3 (number)
...

**Mon test dans la console :**

console.log(calculerLivraison(3, 2));
console.log(calculerLivraison(10, 12, true)); 
console.log(calculerLivraison(20, 5));
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const etudiants = [
  { nom: 'Amani', notes: [14, 16, 15] },
  { nom: 'Bijou', notes: [17, 18, 16] },
  { nom: 'Christian', notes: [8, 11, 9] },
  { nom: 'Divine', notes: [12, 10, 14] },
  { nom: 'Exaucé', notes: [16, 15, 19] }
];

const bulletin = etudiants.map(e => {
  let m = e.notes.reduce((a, b) => a + b) / e.notes.length;
  let mention = m >= 16 ? 'Excellent' : m >= 10 ? 'Admis' : 'Rattrapage';
  return { nom: e.nom, moyenne: +m.toFixed(1), mention };
});

console.table(bulletin);
let admis = bulletin.filter(e => e.mention != 'Rattrapage').length;
let top = bulletin.find(e => e.mention == 'Excellent');
console.log(`Admis: ${admis}; Top: ${top.nom}`);

**Source :** MDN Web Docs - Number.prototype.toFixed()

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
- reduce() : accumule une valeur en parcourant un tableau.

const total = heures.reduce((acc, h) => acc + h, 0);

- Équivalent à l'usage de forEach avec un accumulateur.
...

**Mon test dans la console :**
console.log(`Jour le plus chargé: ${jours[maxJour]} (${Math.max(...heures)}h)`);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** #META IA

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
const produits = [
  { nom: 'A', stock: 10, prix: 100 },
  { nom: 'B', stock: 5, prix: 50 }
];

console.table(produits, ['nom', 'stock']);
// Affiche tableau avec colonnes "nom" et "stock"


- .find() : renvoie undefined si rien ne match
- .filter() : renvoie un tableau vide [] si rien ne match
...

**Mon test dans la console :**
console.log(produitsInfo);

const chercherProduit = (id) => produits.find(p => p.id === id) || 'Produit introuvable';
console.log(chercherProduit(104));
console.log(chercherProduit(999));

const enRupture = produits.filter(p => p.stock === 0).length;
console.log(`Produits en rupture : ${enRupture}`);

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```onsole.table(produits);

const produitsInfo = produits
  .filter(p => p.categorie === 'Informatique')
  .map(p => ({
    ...p,
    prixUSD: Math.round(p.prixFC / TAUX)
  }));

console.log(produitsInfo);

const chercherProduit = (id) => produits.find(p => p.id === id) || 'Produit introuvable';
console.log(chercherProduit(104));
console.log(chercherProduit(999));

const enRupture = produits.filter(p => p.stock === 0).length;
console.log(`Produits en rupture : ${enRupture}`);


**Source :** MDM

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
const eleves = [
  { nom: 'A', moyenne: 12 },
  { nom: 'B', moyenne: 16 },
  { nom: 'C', moyenne: 8 }
];

// Classement du meilleur au moins bon
eleves.sort((a, b) => b.moyenne - a.moyenne);


- .sort() modifie le tableau original car il trie en place.
- Pour éviter ça : utiliser [...tableau].sort() (copie superficielle)

const copieTriee = [...eleves].sort((a, b) => b.moyenne - a.moyenne);

...

**Mon test dans la console :**
const enRupture = produits.filter(p => p.stock === 0).length;
console.log(`Produits en rupture : ${enRupture}`);

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const TAUX = 2800;
const produits = [
  { id: 101, nom: 'Clé USB 32 Go', categorie: 'Informatique', prixFC: 14000, stock: 25 },
  { id: 102, nom: 'Sac à dos Kadea', categorie: 'Accessoires', prixFC: 42000, stock: 0 },
  { id: 103, nom: 'Souris sans fil', categorie: 'Informatique', prixFC: 28000, stock: 12 },
  { id: 104, nom: 'Gourde isotherme', categorie: 'Accessoires', prixFC: 21000, stock: 8 },
  { id: 105, nom: 'Casque audio', categorie: 'Informatique', prixFC: 70000, stock: 0 },
  { id: 106, nom: 'Carnet de notes', categorie: 'Papeterie', prixFC: 7000, stock: 40 },
];

console.table(produits);

const produitsInfo = produits
  .filter(p => p.categorie === 'Informatique')
  .map(p => ({
    ...p,
    prixUSD: Math.round(p.prixFC / TAUX)
  }));

console.log(produitsInfo);

const chercherProduit = (id) => produits.find(p => p.id === id) || 'Produit introuvable';
console.log(chercherProduit(104));
console.log(chercherProduit(999));

const enRupture = produits.filter(p => p.stock === 0).length;
console.log(`Produits en rupture : ${enRupture}`);


**Source :** - Documentation officielle (MDN, ECMAScript)
- Expérience pratique (tests, projets perso/pro)

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
- Recherche dichotomique : on divise l'espace de recherche par 2 à chaque essai.
- Pourquoi 7 essais pour 1-100 ?
    - 100 → 50 → 25 → 12 → 6 → 3 → 1 (2⁷ = 128 > 100)
    - 7 étapes max pour trouver (log₂(100) ≈ 6,6 → 7 arrondi)

...

**Mon test dans la console :**
 console.log(`Perdu ! C'était ${cible}`);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```let cible = Math.floor(Math.random() * 100) + 1;
let essais = 7;

while (essais > 0) {
  let saisie = prompt(`Essais: ${essais}. Devine (1-100)`);
  let n = Number(saisie);
  if (isNaN(n)) continue;

  essais--;
  if (n === cible) {
    alert(`Géant ! ${7-essais} essais`);
    break;
  }
  alert(n < cible ? 'Plus grand' : 'Plus petit');
}

if (essais === 0) alert(`Perdu ! C'était ${cible}`);

 console.log(`Perdu ! C'était ${cible}`);
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».
**Source :** Wikipedia/MDN 

**IA utilisée ? (prompt + vérification sur MDN) :** non
