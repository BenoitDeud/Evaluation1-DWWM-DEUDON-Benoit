let prenom = localStorage.getItem('prenom');
console.log(prenom);
document.getElementById("prenom").innerHTML = prenom;

let date = new Date();
document.getElementById('dateToday').innerHTML = date.toLocaleDateString();
document.getElementById('heure').innerHTML = date.toLocaleTimeString();

let recupSujet = localStorage.getItem("sujet");
document.getElementById("sujet").innerHTML = recupSujet;



