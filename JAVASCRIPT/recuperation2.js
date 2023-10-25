// Récupérer le nom
let nom = localStorage.getItem('nom');
console.log(nom);
document.getElementById("nom").innerHTML = nom;


// Date 
let date = new Date();
document.getElementById('dateToday').innerHTML = date.toLocaleDateString();
document.getElementById('heure').innerHTML = date.toLocaleTimeString();

