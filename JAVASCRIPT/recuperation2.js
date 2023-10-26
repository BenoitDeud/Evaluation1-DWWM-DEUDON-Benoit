// Récupérer le nom
let prenom = localStorage.getItem('prenom');
console.log(prenom);
document.getElementById("prenom").innerHTML = prenom;


// Date 
let date = new Date();
document.getElementById('dateToday').innerHTML = date.toLocaleDateString();
document.getElementById('heure').innerHTML = date.toLocaleTimeString();

