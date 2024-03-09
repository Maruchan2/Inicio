document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
            validar();
            });

            function validar() {
                var username = document.getElementById("username").value;
                    var password = document.getElementById("password").value;

                        if (username === "Jazmin" && password === "260727") {
                                alert("Inicio de sesión exitoso!");
                                        // Aquí puedes redirigir a otra página si lo deseas
                                            } else {
                                                    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
                                                        }
                                                        }
})