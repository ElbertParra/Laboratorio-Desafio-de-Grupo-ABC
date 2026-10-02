const btnVocales = document.getElementById("btnVocales");
const btnTodo = document.getElementById("btnTodo");
const letras = document.querySelectorAll(".cris"); //cambiar con el id de la clase del abcedario

const vocales = ["A", "E", "I", "O", "U"];

btnVocales.addEventListener("click", () => {
    letras.forEach(letra => {
        const valor = letra.textContent.trim().toUpperCase();

        letra.style.display = vocales.includes(valor) ? "" : "none";
    });
});

btnTodo.addEventListener("click", () => {
    letras.forEach(letra => {
        letra.style.display = "";
    });
});



btnVocales.addEventListener("click", function () {
    letras.forEach(function (letra) {
        const valor = letra.textContent.trim().toUpperCase();

        if (vocales.includes(valor)) {
            letra.style.display = "";
        } else {
            letra.style.display = "none";
        }
    });
});


btnTodo.addEventListener("click", function () {
    letras.forEach(function (letra) {
        letra.style.display = "";
    });
});