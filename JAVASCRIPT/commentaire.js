let prenom = localStorage.getItem('prenom');
console.log(prenom);
document.getElementById("prenom").textContent = prenom;

let date = new Date();
console.log(date);
document.getElementById('dateToday').textContent = date.toLocaleDateString();
document.getElementById('heure').textContent = date.toLocaleTimeString();

let date2 = new Date();
document.getElementById('heure2').textContent = date2.toLocaleTimeString();

let recupSujet = localStorage.getItem("sujet");
document.getElementById("sujet").textContent = recupSujet;


/* ajout commentaire*/

let ajouterUnCommentaire = document.getElementById("ajouterLigneCommentaire")
ajouterUnCommentaire.addEventListener("submit", function(e){

    let commentaire = document.getElementById("commentaire").value;
    localStorage.setItem("commentaire", commentaire);

    e.preventDefault("");

    let espaceCommentaire = document.getElementById("tableauCommentaire");

    let rowCommentaire = espaceCommentaire.insertRow(-1);

    let cel0 = rowCommentaire.insertCell(0);
    let cel1 = rowCommentaire.insertCell(1);
    let cel2 = rowCommentaire.insertCell(2);

    cel0.textContent = localStorage.getItem('prenom')+(" ")+localStorage.getItem('nom');
    cel1.textContent = new Date().toLocaleTimeString();
    cel2.textContent = localStorage.getItem("commentaire");
    
});


