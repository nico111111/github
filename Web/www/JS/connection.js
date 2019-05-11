var form = document.getElementById("connect");
var request = new XMLHttpRequest();

request.addEventListener('readystatechange', function() {

  if (request.readyState === XMLHttpRequest.DONE) {
    document.getElementById("reponseT").innerHTML = request.responseText;
  }
});

form.addEventListener("submit", function (e) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("userpwd").value;
  request.open('GET','htbin/login.py?username=' + username + '&userpwd=' + password);
  request.send(null);
  e.preventDefault();
});


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
