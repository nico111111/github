var form = document.getElementById("leForm");

form.addEventListener("submit", function (e) {
    var nom = form.elements.lastname.value;
    var prenom = form.elements.firstname.value;
    console.log(" Nom : " + nom + ", Prenom : " + prenom );
    e.preventDefault(); // Annulation de l'envoi des données
});


document.getElementById("lastname").addEventListener("blur", function (e) {
    var text="";
    if (e.target.value=="") {
        text="rentrer un nom";
    }
    document.getElementById("lastnameErr").innerHTML = text;
});

document.getElementById("birthdate").addEventListener("focus", function (e) {
    document.getElementById("birthdateErr").innerHTML = "jour/mois/annee (01/01/1900)";
});

document.getElementById("birthdate").addEventListener("blur", function (e) {
    document.getElementById("birthdateErr").innerHTML = "";
    var regexDate= /[0-3][0-9]\/[0-1][0-9]\/[0-9]+/;
    if (!regexDate.test(e.target.value)) {
        document.getElementById("birthdateErr").innerHTML = "date non valide (01/01/1900)";
    }
});


document.getElementById("firstname").addEventListener("blur", function (e) {
    var text="";
    if (e.target.value=="") {
        text="rentrer un prenom";
    }
    document.getElementById("firstnameErr").innerHTML = text;
});


function validateForm(){
  var x;
  var text = "";
  x = document.getElementById("lastname").value;

  if(x==""){
    document.getElementById("lastnameErr").innerHTML = "rentrer un nom";
    return false;
  }else{
    document.getElementById("lastnameErr").innerHTML = "";
  }

  x = document.getElementById("firstname").value;

  if(x==""){
    document.getElementById("firstnameErr").innerHTML = "rentrer un prenom";
    return false;
  }else{
    document.getElementById("firstnameErr").innerHTML = "";
  }
}
