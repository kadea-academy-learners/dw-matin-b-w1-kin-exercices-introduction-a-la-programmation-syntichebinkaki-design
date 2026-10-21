# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-21 12:20 UTC · commit `aa39328` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **3 / 15**

Exercices : **44 / 95** · Parfaits : 4 / 19 · Non rendus : 6

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **3** | 🟠 Résultat incorrect | 3/5 | 0 | ✅ | Ta fiche ne correspond pas au résultat attendu : vérifie la phrase et les 6 typeof (n'oublie pas que typeof null renvoie « object »).<br>• La phrase « Je m'appelle …, j'ai … ans et j'habite à … » n'est pas affichée.<br>• Les typeof attendus (string, number, string, boolean, undefined, object) ne sont pas affichés dans cet ordre.<br>• `let` jamais réassigné : `prenom`, `commune` → utilise `const`.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>📚 Recherche non rédigée. |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche non rédigée. |
| **F3** — Pair ou impair : le tirage des tickets | **2** | 🟠 Résultat incorrect | 1/3 | 0 | ✅ | Le lot affiché est faux pour au moins un ticket : un nombre est pair si `n % 2 === 0` (0 compris).<br>• On attend « Ticket 17 : impair, tu gagnes un stylo. »<br>• Avec 24, on attend « Ticket 24 : pair, tu gagnes un tote bag. »<br>📚 Recherche non rédigée. |
| **F4** — Le contrôleur du bus | **5** | ✅ Parfait | 5/5 | 0 | ✅ | Parfait ! Ternaire simple et conditions à trois branches corrects, bornes respectées.<br>📚 Recherche non rédigée. |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 0 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche non rédigée. |
| **F6** — Le compte à rebours | **2** | 🟠 Résultat incorrect | 0/2 | 0 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• On attend 10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage ! (le 5 est sauté).<br>• La version qui affiche seulement les pairs (10, 8, 6, 4, 2) est absente.<br>• Saute le 5 avec `continue`, sans changer la condition de la boucle.<br>📚 Recherche non rédigée. |
| **M1** — FizzBuzz kinois | **4** | 🟡 Règles non respectées | 3/3 | 0 | ✅ | Le FizzBuzz est juste, mais respecte les consignes : boucle for, %, === et explication de l'ordre en commentaire.<br>• Explique en commentaire pourquoi l'ordre de tes conditions est important.<br>📚 Recherche non rédigée. |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 0 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche non rédigée. |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **4** | 🟡 Règles non respectées | 11/11 | 0 | ✅ | `estRempli` donne les bons résultats, mais elle doit être fléchée, utiliser un ternaire et aucune comparaison.<br>• Note tes prédictions en commentaire avant de tester.<br>📚 Recherche non rédigée. |
| **M4** — Le score par défaut : \|\| contre ?? | **2** | 🟠 Résultat incorrect | 0/5 | 0 | ❌ | Le cas 0 est faux : `0 \|\| 'aucun'` renvoie 'aucun' car 0 est falsy ; `??` ne remplace que null et undefined.<br>• La fonction `afficherScore` est introuvable.<br>• `afficherScore(15)` renvoie ReferenceError: afficherScore is not defined au lieu de 'Score : 15'.<br>• `afficherScore(undefined)` renvoie ReferenceError: afficherScore is not defined au lieu de 'Score : aucun'.<br>• Aucune version ne renvoie « Score : 0 » pour 0 : corrige avec `??`.<br>📚 Recherche non rédigée. |
| **M5** — La vitre teintée (portée de bloc) | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/M5-vitre-teintee.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **M6** — Le détective du return | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/M6-detective-return.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **M7** — La tirelire numérique | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/M7-tirelire.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **M8** — La batterie qui se décharge | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/M8-batterie.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **A1** — Kadea Express v2 : le calculateur de livraison | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• SyntaxError: Unexpected token (ligne 30)<br>📚 Recherche non rédigée. |
| **A2** — Le moteur de paie v2 | **3** | 🟠 Résultat incorrect | 6/7 | 0 | ✅ | Un résultat est faux : seules les heures AU-DELÀ de 40 sont payées × 1,5 (40 × 2500 + 8 × 3750 = 130000) ; le jour le plus chargé est mercredi.<br>• `calculerSalaire(30)` renvoie 100000 au lieu de 75000.<br>📚 Recherche non rédigée. |
| **A3** — L'inventaire en console | **3** | 🟠 Résultat incorrect | 6/7 | 0 | ❌ | Un résultat est faux ou introuvable : stocke chaque résultat (filter, map) dans une variable ou affiche-le, et gère le cas undefined de .find() avec « Produit introuvable ».<br>• Les prix USD attendus (5, 15, 10, 8, 25, 3) sont introuvables : ajoute `prixUSD` avec .map() et Math.round().<br>📚 Recherche non rédigée. |
| **A4** — Le classement de la promo | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/A4-classement.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **A5** — Le nombre mystère | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/A5-nombre-mystere.js` sous l'énoncé.<br>📚 Recherche non rédigée. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | En développement : À améliorer (64 %) | **1** | let utilisé partout par réflexe, ou confusion entre null et undefined. Conversion oubliée : des calculs donnent '2500500' ou NaN sans que ce soit remarqué.<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | En développement : À améliorer (58 %) | **1** | Ordre des conditions erroné (MalewaWewa jamais affiché) ou confusion entre = et ===. Les cas limites ne sont pas testés.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | En développement : À améliorer (40 %) | **1** | Confusion entre return et console.log() qui produit des undefined ou des NaN en chaîne. Fonctions appelées sans () ou avec les arguments dans le désordre.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Débutant : Insuffisant (30 %) | **0** | Boucle infinie qui fige le navigateur, ou répétition faite par copier-coller.<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Débutant : Insuffisant (32 %) | **0** | Pas de RECHERCHES.md ou aucune source. Code non poussé sur GitHub.<br>_Recherches 0 % · commits par exercice 53 % · règles de code 77 %_ |
| **Total** | | **3 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
