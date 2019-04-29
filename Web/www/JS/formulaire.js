function validateForm(){
  var x;
  var text = "";
  x = document.getElementById("nom").value;

  if(x==""){
    text = "rentrer un nom";
    document.getElementById("nomErr").innerHTML = text;
    return false;
  }
}
