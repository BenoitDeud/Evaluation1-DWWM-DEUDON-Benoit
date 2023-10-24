
let myFormulaire = document.getElementById("jeVaisToutCasser");

myFormulaire.addEventListener('submit', function (e) {

  //Nom

  let myNom = document.getElementById("nom")
  let regexNom = /^(?=.{3,})/

  if (myNom.value == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = " Veuillez remplir le champ nom";
    myError.style.color = 'red';
    myError.style.fontStyle = "italic";
    e.preventDefault("");
  } 
 
  // regex nom
  else if (regexNom.test(myNom.value) == false) {

    let myError = document.getElementById("error");
    myError.innerHTML = " Veuillez remplir le champ nom avec 3 caractères minimum";
    myError.style.color = 'red';
    myError.style.fontStyle = "italic";
    e.preventDefault("");
  } 
  else {
    let myError = document.getElementById("error");
    myError.innerHTML = " Salade";
    myError.style.color = 'green';
    myError.style.fontStyle = "italic";
  };

  //Prenom
  let myPrenom = document.getElementById("prenom");
  let regexPrenom = /^(?=.{3,})/

  if (myPrenom.value == "") {
    let myErrorDeux = document.getElementById("errorDeux");
    myErrorDeux.innerHTML = " Veuillez remplir le champ prenom";
    myErrorDeux.style.color = 'red';
    myErrorDeux.style.fontStyle = "italic";
    e.preventDefault("");

  }// regex prenom 
  else if (regexPrenom.test(myPrenom.value) == false) {

    let myErrorDeux = document.getElementById("errorDeux");
    myErrorDeux.innerHTML = " Veuillez remplir le champ prenom avec 3 caractères mini";
    myErrorDeux.style.color = 'red';
    myErrorDeux.style.fontStyle = "italic";
    e.preventDefault("");
  }
  else {
    let myError = document.getElementById("errorDeux");
    myError.innerHTML = " Tomate";
    myError.style.color = 'green';
    myError.style.fontStyle = "italic";
  };

  //Mail
  let myEmail = document.getElementById("mail");
  let regexMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (myEmail.value == "") {
    let myErrorTrois = document.getElementById("errorTrois");
    myErrorTrois.innerHTML = " Veuillez remplir le champ mail";
    myErrorTrois.style.color = 'red';
    myErrorTrois.style.fontStyle = "italic";
    e.preventDefault("");

  } // regex mail 
  else if (regexMail.test(myEmail.value) == false) {
    let myErrorTrois = document.getElementById("errorTrois");
    myErrorTrois.innerHTML = " Veuillez remplir le champ mail avec le bon format";
    myErrorTrois.style.color = 'red';
    myErrorTrois.style.fontStyle = "italic";
    e.preventDefault("");
  }
  else {
    let myError = document.getElementById("errorTrois");
    myError.innerHTML = " Oignon";
    myError.style.color = 'green';
    myError.style.fontStyle = "italic";
  };

  //Mot de passe
  let myMdps = document.getElementById("mdps");
  let regexMdps = /^(?=.*[a-z])^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[#+-^[\]])/;

  if (myMdps.value == "") {
    let myErrorQuatre = document.getElementById("errorQuatre");
    myErrorQuatre.innerHTML = " Veuillez remplir le champ mot de passe";
    myErrorQuatre.style.color = 'red';
    myErrorQuatre.style.fontStyle = "italic";
    e.preventDefault("");

  }// regex Mdps 
  else if (regexMdps.test(myMdps.value) == false) {

    let myErrorQuatre = document.getElementById("errorQuatre");
    myErrorQuatre.innerHTML = " mot de passe invalide il faut au minimum une Maj une min un chiffre caract spé";
    myErrorQuatre.style.color = 'red';
    myErrorQuatre.style.fontStyle = "italic";
    e.preventDefault("");
  }
  else {
    let myError = document.getElementById("errorQuatre");
    myError.innerHTML = " Olive verte";
    myError.style.color = 'green';
    myError.style.fontStyle = "italic";
  };

  //Confirmer mot de passe
  let myCMdps = document.getElementById("cMdps");
  let myMdpss = document.getElementById("mdps");


  if (myCMdps.value == "") {
    let myErrorCinq = document.getElementById("errorCinq");
    myErrorCinq.innerHTML = " Veuillez remplir le champ confirmer mot de passe";
    myErrorCinq.style.color = 'red';
    myErrorCinq.style.fontStyle = "italic";
    e.preventDefault("");

  }// comparaison mdps
  else if (myCMdps.value !== myMdpss.value) {
    let myErrorCinq = document.getElementById("errorCinq");
    myErrorCinq.innerHTML = " les mots de passe sont différents";
    myErrorCinq.style.color = 'red';
    myErrorCinq.style.fontStyle = "italic";
    e.preventDefault("");
  } else { /*si les mots de passe sont indentique*/
    let myError = document.getElementById("errorCinq");
    myError.innerHTML = " Olive noir";
    myError.style.color = 'green';
    myError.style.fontStyle = "italic";
  };


  //Local storage

  //récup de l'id
  let usernameVal = document.getElementById("nom").value;
  let mailVal = document.getElementById("mail").value;
  let passwordVal = document.getElementById("mdps").value;
  
  //envoie dans le localStorage
  localStorage.setItem("nom",usernameVal);
  localStorage.setItem("mail",mailVal);
  localStorage.setItem("mdps",passwordVal);
});









