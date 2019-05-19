var form = document.getElementById("leForm");

form.addEventListener("submit", function (e) {
    var nom = form.elements.lastname.value;
    var prenom = form.elements.firstname.value;
    console.log(" Nom : " + nom + ", Prenom : " + prenom );


    var x;
    var regexUserName = /.{6,}/;
    var regexPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var date;
    var nom;
    var prenom;
    var username;
    var pwd;
    var mail;
    x = document.getElementById("lastname");

    if(x.value==""){
      document.getElementById("lastnameErr").innerHTML = "rentrer un nom";
      x.style.backgroundColor="#E45A5A";
      e.preventDefault();
    }else{
      document.getElementById("lastnameErr").innerHTML = "";
      x.style.backgroundColor="#FFFFFF";
      nom=x.value;
    }

    x = document.getElementById("firstname");

    if(x.value==""){
      document.getElementById("firstnameErr").innerHTML = "rentrer un prenom";
      x.style.backgroundColor="#E45A5A";
      e.preventDefault();
    }else{
      document.getElementById("firstnameErr").innerHTML = "";
      x.style.backgroundColor="#FFFFFF";
      prenom=x.value;
    }

    x = document.getElementById("birthdate");
    var dateTab = x.value.split('/');
    date = new Date(dateTab[2], dateTab[1] - 1, dateTab[0]);
    if(!isValidDate(date) && x.value!=""){
      document.getElementById("birthdateErr").innerHTML = "date non valide (jj/mm/aaaa)";
      x.style.backgroundColor="#E45A5A";
      e.preventDefault();
    }else if(x.value!=""){
      document.getElementById("birthdateErr").innerHTML = "";
      date = new Date(x.value);
      console.log(date);
      x.style.backgroundColor="#FFFFFF";
    }else{
      document.getElementById("birthdateErr").innerHTML = "";
      x.style.backgroundColor="#FFFFFF";
    }

    x = document.getElementById("username");

    if(!regexUserName.test(x.value)){
      document.getElementById("usernameErr").innerHTML = "nom d'utilisateur non valide (6 charactere min)";
      x.style.backgroundColor="#E45A5A";
      e.preventDefault();
    }else{
      document.getElementById("usernameErr").innerHTML = "";
      x.style.backgroundColor="#FFFFFF";
      username=x.value;
    }

    x = document.getElementById("userpwd");

    if(!regexPwd.test(x.value)){
      document.getElementById("userpwdErr").innerHTML = "mdp non valide au moins 8 charactere (une minuscule une majuscule un chiffre)";
      x.style.backgroundColor="#E45A5A";
      e.preventDefault();
    }else{
      document.getElementById("userpwdErr").innerHTML = "";
      x.style.backgroundColor="#FFFFFF";
      pwd=x.value;
    }

    x = document.getElementById("useremail");

    if(!regexMail.test(x.value)){
      document.getElementById("useremailErr").innerHTML = "mail non valide";
      x.style.backgroundColor="#E45A5A";
      e.preventDefault();
    }else{
      document.getElementById("useremailErr").innerHTML = "";
      x.style.backgroundColor="#FFFFFF";
      mail=x.value;
    }

    //e.preventDefault(); // Annulation de l'envoi des données
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
    var dateTab = e.target.value.split('/');
    var date = new Date(dateTab[2], dateTab[1] - 1, dateTab[0]);
    if (!isValidDate(date) && e.target.value!="") {
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
    var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexMail.test(e.target.value)) {
        document.getElementById("useremailErr").innerHTML = "mail non valide";
        e.target.style.backgroundColor="#E45A5A";
    }
    else{
      e.target.style.backgroundColor="#FFFFFF";
    }
});

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
