//Selection de la class voiture dans index.html
var maVoiture = document.querySelector('.voiture');
//recuperation de la position left et top
let positionInitiale = maVoiture.style.left;
let positionInitiale2 = maVoiture.style.top;

//fonction pour deplacer de gauche à droite
function faireBouger(direction, rotation) {
    console.log('Rotation', rotation);
    console.log('Direction >>>>>', direction);
    console.log('Position initiale >>>>>', positionInitiale);
    positionInitiale = +positionInitiale + direction;
    console.log('Nouvelle position >>>>>', positionInitiale);
    //verification si direction et rotation sont different de zero
    if (direction) {
        //si direction est different de 0, et rotation égale à zero
        document.querySelector('.voiture').style.left = positionInitiale + 'px';
    } else if (rotation) {
        //si direction est égale à 0, et rotation different à zero

        //recupération du position en rotation de la vehicule
        var positionRotation = maVoiture.style.transform;
        //affiche la position en rotation de la vehicule
        console.log("valeur = ", positionRotation);

        //si la position en rotatoin est vide
        if (positionRotation == "") {
            //initialiser la position en rotation de la voiture
            document.querySelector('.voiture').style.transform = "rotate(90deg)";
        } else if (positionRotation == "rotate(90deg)") {
            //si la position en rotation de la voiture est égale à 90deg (c est à dire verticale)

            //cacher les bouton haut et bas de la voiture
            document.getElementById('haut').style.display = "none";
            document.getElementById('bas').style.display = "none";
            //afficher les bouton avancer et reculer de la voiture
            document.getElementById('avancer').style.display = "block";
            document.getElementById('reculer').style.display = "block";
            //changer la position en rotation de la voiture en 180deg ( c est à dire en horizontatl)
            document.querySelector('.voiture').style.transform = "rotate(180deg)";
        } else if (positionRotation == "rotate(180deg)") {
            //si la position en rotation de la voiture est égale à 180deg (c est à dire horizontal)

            //Afficher les bouton haut et bas de la voiture
            document.getElementById('haut').style.display = "block";
            document.getElementById('bas').style.display = "block";
            //cacher les bouton avancer et reculer de la voiture
            document.getElementById('avancer').style.display = "none";
            document.getElementById('reculer').style.display = "none";
            //changer la position en rotation de la voiture en 90deg ( c est à dire en vertical)
            document.querySelector('.voiture').style.transform = "rotate(90deg)";
        }
    }
}

//fonction pour se deplacer de haut en bas
function faireHaut(dir) {
    //incrementation de la position top
    positionInitiale2 = +positionInitiale2 + dir;
    document.querySelector('.voiture').style.top = positionInitiale2 + 'px';
}