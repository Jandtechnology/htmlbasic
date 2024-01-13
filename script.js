function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var resultSection = document.getElementById("result");
    resultSection.innerHTML = "<p>¡Gracias por tu mensaje, " + name + "!</p>";
}
