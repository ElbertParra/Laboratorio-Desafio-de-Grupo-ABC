const btnVocales = document.getElementById("btnVocales");
const btnTodo = document.getElementById("btnTodo");
const letras = document.querySelectorAll(".container .row .col"); //cambiar con el id de la clase del abcedario

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


//vocales esto esta diferente al que teniamos inicialmente en main
btnVocales.addEventListener("click", () => {

    letras.forEach(letra => {

        const titulo = letra.querySelector(".card-title"); //nuevo

        if (!titulo) {
            return;
        }

        const inicial = titulo.textContent.trim().charAt(0).toUpperCase();

        if (vocales.includes(inicial)) {
            letra.style.display = "";
        } else {
            letra.style.display = "none";
        }

    });

});


