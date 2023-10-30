// event clique local storage ajoute une ligne avec un lien cliquable
let ajouterUneLigne = document.getElementById("ajouterLigne")
let numeroLigne = 1

ajouterUneLigne.addEventListener('submit', function (e) {
    // mettre l'id sujet dans le local storage pour pouvoir le récup plus tard
    let subject = document.getElementById("sujet").value;
    localStorage.setItem("sujet", subject);

    // empeche l'envoi du formulaire
    e.preventDefault("");

    // récup l'id du tableau
    let tableau = document.getElementById("tableau");

    // insert une la ligne du tableau à la fin du tableau
    let row = tableau.insertRow(-1);

    // les lignes qui seront ajoutées
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);

    // création d'un lien pour l'associer avec le sujet
    let lien = document.createElement('a');
    lien.classList = ("sujet1")
    lien.href = "/HTML/commentaireSalade.html"; 
    lien.textContent = subject; 

    // accrémentation et association de la cellule avec le numero
    cell0.textContent = numeroLigne;
    numeroLigne++;

    // association des cellules avec les données à renvoyer dans le tableau
    cell1.appendChild(lien);
    cell2.textContent = new Date().toLocaleDateString();
    cell3.textContent = localStorage.getItem('prenom')+(" ")+localStorage.getItem("nom"); 
});



    
