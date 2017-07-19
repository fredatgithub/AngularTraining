
/*  var reponse = prompt("Age ?");
if (parseInt(reponse) >= 18){
alert('Tu peux boire !');
} else {
alert('Mineur !');
} */
var couleurs = [
  "rouge",
  'bleu',
  'vert',
  'jaune'
];

couleurs.push('violet');
couleurs.unshift('orange');

console.log(couleurs[2]);

for (var i=0; i < couleurs.length; i++) {
  console.log(couleurs[i]);
}

couleurs.forEach(function(element){
  console.log(element);
});

console.log(couleurs.map(function(element){
  return element.toUpperCase();
}));

console.log(couleurs.filter(function(element){
  return element.indexOf('o') !== -1;
}));

var scores = {
  "psg": 3,
  lyon: 4,
  'om': 5,
  "st etienne": 1
};

console.log(scores['psg']);
console.log(scores.psg);
 
function coucou(nom){
  alert('coucou ' + nom);
}

var compteur = 0; 
// fonction anonyme == lambda
setInterval(function (){
  console.log('Valeur du compteur', compteur);
  compteur += 1;
}, 1000);

/* Fonction anonyme immédiatement appelée 
(function(){
  
})() */

window.app = {
  createUser: function(nom, prenom){
    return {
      username: "toto",
      age: 77,
      nom: nom,
      prenom: prenom,
      full_name: function(){
        return this.nom + " " + this.prenom;
      }
    };
  }
}

var user = app.createUser("jeanne", "duponne");
console.log(user.full_name());

var intro = document.getElementById('intro');
setTimeout(function(){
  intro.innerHTML = "Contenu changé !";
}, 3000)

var liste = document.getElementsByTagName('ul')[0];
var li = document.createElement('li');
li.innerHTML = "Nouvel élément de la liste";
liste.appendChild(li);

var input = document.getElementById('moninput');
var button = document.getElementById('monbutton');
button.addEventListener('click', function(){
  alert(input.value);
});
