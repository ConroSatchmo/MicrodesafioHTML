function validateForm() {
  const userName = document.forms["myForm"]["userName"].value;
  const userPassword = document.forms["myForm"]["userPassword"].value;
  if (userName == "") {
    alert("Debes completar el nombre");
    return false;
  }
  if (userPassword == "") {
    alert("Debes completar la contraseña");
    return false;
  }
}
