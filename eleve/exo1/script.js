var variable = "hello !";
var variable2 = " fred";
    // alert(variable);
    console.log(variable + " autre texte " + variable2.trim());
    console.log('1'.toString());
    console.log(parseInt('1'));
    var reponse = prompt(" age ?");
    if (reponse >= 18) {
        alert('tu peux boire');
    } else
    {
        alert("mineur");
    }

    if (reponse === 18){
        alert('bon anniversaire');
    }

    // toutes les nombres sont des floats
    // NaN not a number
    // NaN null pattern
    // NaN + qq chose retourne toujours NaN
    // fonction isNaN

    if (isNaN(reponse)){
        alert('reponse is NaN');
    }
    var couleurs = [
        "rouge",
        'bleu',
        'vert',
        'jaune'
    ];
    console.log(couleurs[1]);
    couleur.push('violet');
    couleurs.unshift('orange');
    
    for(var index = 0; index < couleurs.length; index++){
        var element = couleurs[i];
        console.log(couleurs[i]);
    }

    couleurs.forEach(function(element)
    {
        console.log(element);
    });
    console.log( couleurs.forEach(function(element)
    {
        return element.toLocaleUpperCase();
    }));

    console.log( couleurs.filter(function(element)
    {
        return element.indexOf('o') !== -1;
    }));

    var scores = {//array associatif
        "PSG": 3,
        'OM': 5, // acceptable mais pas recommandé
        Lyon: 4, // utiliser la même syntaxe
        " St Etienne":1
    };
    
    console.log(scores['PSG']); // si espace
    console.log(scores.PSG);

    function coucou(nom){
        alert('coucou' + nom);
    }

    coucou("fred");
    coucou(); // undefined

    function afficher_compteur(){
        console.log('valeur du compteur', compteur);
        compteur +=1;
    }

    var compteur = 0;

    setInterval(afficher_compteur, 1000); // 1000 millisecondes

    setInterval(function afficher_compteur(){ // fonction anonyme == lambda
        console.log('valeur du compteur', compteur);
        compteur +=1;
    }, 1000);

    (function(){
        var compteur2; // variable privée
    })();

    window.app = { // objet app
        user: { // objet user
            username: "toto",
            age: 77,
            nom: "Dupont",
            prenom: "Jean",
            full_name: function(){
                return app.user.prenom + ' ' + app.user.nom;
            },
            full_nameThis: function(){
                return this.prenom + ' ' + this.nom;
            }
        }
    }

    console.log(app.user.full_name());

    fonction animal(){
        var nom: "chien";
    }

    var medor = new animal();
    var intro = document.getRlementById('intro');
    setTimeout(function() {
        intro.innerHTML = "contenu changé";
    }, 3000);

    var liste = document.getElementsByTagName('ul')[0];
    var li = document.createElement('li');
    li.innerHTML = "nouvel element";
    liste.appendChild(li); // plus simple en REACT.JS

    li.addEventListener('click', function(){
        alert('on a clkick');
    });

    var input = document.getRlementById('moninput');
    var button = document.getElementsById('monbutton');
    butto.addEventListener('click', function(){
        alert(input.value);
    })








