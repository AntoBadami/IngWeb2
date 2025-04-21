window.onload = () => {
    document.body.style.opacity = '1';

    const form = document.getElementById("loginform");
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const submitBtn = document.getElementById("submitBtn");

            function checkInputs() {
                const email = emailInput.value;
                const password = passwordInput.value;

                if (email !== "" && password !== "") {
                submitBtn.disabled = false;
                } else {
                submitBtn.disabled = true;
                }
            }
            //se verifica los campos
            emailInput.addEventListener("input", checkInputs);
            passwordInput.addEventListener("input", checkInputs);

            form.addEventListener("submit", function(e) {
                e.preventDefault();
                const email = emailInput.value;
                const password = passwordInput.value;
                
                // Verifica si el email contiene "@" y "."
                if (!email.includes("@") || !email.includes(".")) {
                    alert("El usuario debe ser un correo electrónico válido.");
                    return;
                }
                // Verifica si la contraseña tiene al menos 8 caracteres
                if (password.length < 8) {
                    alert("La contraseña debe tener al menos 8 caracteres.");
                    return;
                }
                //redirigue a seleccionar tipo de transferencia
                window.location.href = "../html/transferencia.html";
            });
  };