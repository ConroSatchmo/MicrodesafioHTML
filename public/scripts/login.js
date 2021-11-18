function validateForm() {
  const userName = document.forms["myForm"]["userName"].value;
  if (userName == "") {
    alert("Debes completar el nombre");
    return false;
  }
}
