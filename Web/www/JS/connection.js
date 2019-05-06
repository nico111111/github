var form = document.getElementById("connect");

document.getElementById("username").addEventListener("blur", function (e) {
  var text="";
  var regex= /.{6,}/;
  if (!regex.test(e.target.value)) {
      text="Nom d'tilisateur invalide";
      e.target.style.backgroundColor="#E45A5A";
  }
  if (regex.test(e.target.value)) {
    e.target.style.backgroundColor="#FFFFFF";
  }
  console.log("coucou" + text);
  document.getElementById("usernameErr").innerHTML = text;
});

document.getElementById("userpwd").addEventListener("blur", function (e) {
  var text="";
  var regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!regex.test(e.target.value)) {
      text="Mot de passe invalide";
      e.target.style.backgroundColor="#E45A5A"; 
  }
  if (regex.test(e.target.value)) {
    e.target.style.backgroundColor="#FFFFFF";
  }
  document.getElementById("passwordErr").innerHTML = text;  
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
  
  x = document.getElementById("username").value;

  if(!regexUserName.test(x)){
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
}