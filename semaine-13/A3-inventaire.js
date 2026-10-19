// ===== ÉNONCÉ (ne pas modifier) =====
const TAUX = 2800;
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
