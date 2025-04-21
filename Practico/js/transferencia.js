window.onload = () => {
    document.body.style.opacity = '1';

    const submitBtn = document.getElementById("siguiente");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const backBtn = document.querySelector(".backbutton");

    function selectOption(selectedOption) {
        // Quitar selección anterior
        option1.classList.remove("selected");
        option2.classList.remove("selected");

        // Agregar selección nueva
        selectedOption.classList.add("selected");

        // Habilitar el botón
        submitBtn.disabled = false;
    }

    option1.addEventListener("click", () => selectOption(option1));
    option2.addEventListener("click", () => selectOption(option2));

    submitBtn.addEventListener("click", () => {
        // Redirigir según la opción seleccionada
        if (option1.classList.contains("selected")) {
            // Si se seleccionó la opción 1
            window.location.href = "../html/DUnicoStep1.html"; 
        } else if (option2.classList.contains("selected")) {
            // Si se seleccionó la opción 2
            window.location.href = "../html/DMultipleStep1.html"; 
        }
    });

    backBtn.addEventListener("click", () => {
        window.location.href = "../html/log.html";
    });
};