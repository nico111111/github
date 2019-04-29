var form = document.getElementById("leForm");

form.addEventListener("submit", function (e) {
    var nom = form.elements.lastname.value;
    var prenom = form.elements.firstname.value;
    console.log(" Nom : " + nom + ", Prenom : " + prenom );
    e.preventDefault(); // Annulation de l'envoi des données
});


document.getElementById("firstname").addEventListener("blur", function (e) {
    var text="";
    if (e.target.value=="") {
        text="Prenon invalide";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
    document.getElementById("firstnameErr").innerHTML = text;
});


document.getElementById("lastname").addEventListener("blur", function (e) {
    var text="";
    if (e.target.value=="") {
        text="rentrer un nom";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
    document.getElementById("lastnameErr").innerHTML = text;
});

document.getElementById("birthdate").addEventListener("focus", function (e) {
    document.getElementById("birthdateErr").innerHTML = "jj/mm/aaaa";
});

document.getElementById("birthdate").addEventListener("blur", function (e) {
    document.getElementById("birthdateErr").innerHTML = "";
    var regexDate= /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}/;
    if (!regexDate.test(e.target.value)) {
        document.getElementById("birthdateErr").innerHTML = "date non valide (jj/mm/aaaa)";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
});

document.getElementById("username").addEventListener("blur", function (e) {
    document.getElementById("usernameErr").innerHTML = "";
    var regexUserName = /.{6,}/;
    if (!regexUserName.test(e.target.value)) {
        document.getElementById("usernameErr").innerHTML = "nom d'utilisateur non valide (6 charactere min)";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
});


document.getElementById("userpwd").addEventListener("focus", function (e) {
    document.getElementById("userpwdErr").innerHTML = "8 char une minuscule, une majuscule et un chiffre";
});

document.getElementById("userpwd").addEventListener("blur", function (e) {
    document.getElementById("userpwdErr").innerHTML = "";
    var regexPwd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!regexPwd.test(e.target.value)) {
        document.getElementById("userpwdErr").innerHTML = "mdp non valide au moins 8 charactere (une minuscule une majuscule un chiffre)";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
});

document.getElementById("useremail").addEventListener("blur", function (e) {
    document.getElementById("useremailErr").innerHTML = "";
    var regexMail = /.+@.+\..+/;
    if (!regexMail.test(e.target.value)) {
        document.getElementById("useremailErr").innerHTML = "mail non valide";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
});


function validateForm(){
  var x;
  var text = "";
  var regexDate = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}/;
  var regexUserName = /.{6,}/;
  var regexPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  var regexMail = /.+@.+\..+/;
  var date;
  var nom;
  var prenom;
  var username;
  var pwd;
  var mail;
  x = document.getElementById("lastname").value;

  if(x==""){
    document.getElementById("lastnameErr").innerHTML = "rentrer un nom";
    return false;
  }else{
    document.getElementById("lastnameErr").innerHTML = "";
    nom=x;
  }

  x = document.getElementById("firstname").value;

  if(x==""){
    document.getElementById("firstnameErr").innerHTML = "rentrer un prenom";
    return false;
  }else{
    document.getElementById("firstnameErr").innerHTML = "";
    prenom=x;
  }

  x = document.getElementById("birthdate").value;

  if(!regexDate.test(x)){
    document.getElementById("birthdateErr").innerHTML = "date non valide (jj/mm/aaaa)";
    return false;
  }else{
    document.getElementById("birthdateErr").innerHTML = "";
    date = new Date(x);
    console.log(date);
  }

  x = document.getElementById("username").value;

  if(!regexUserDate.test(x)){
    document.getElementById("usernameErr").innerHTML = "nom d'utilisateur non valide (6 charactere min)";
    return false;
  }else{
    document.getElementById("usernameErr").innerHTML = "";
    username=x;
  }

  x = document.getElementById("userpwd").value;

  if(!regexPwd.test(x)){
    document.getElementById("userpwdErr").innerHTML = "mdp non valide au moins 8 charactere (une minuscule une majuscule un chiffre)";
    return false;
  }else{
    document.getElementById("userpwdErr").innerHTML = "";
    pwd=x;
  }

  x = document.getElementById("useremail").value;

  if(!regexMail.test(x)){
    document.getElementById("useremailErr").innerHTML = "mail non valide";
    return false;
  }else{
    document.getElementById("useremailErr").innerHTML = "";
    mail=x;
  }




}
