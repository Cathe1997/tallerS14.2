document.addEventListener("DOMContentLoaded",()=>{

    const form = document.getElementById('formulario'); 
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const email = document.getElementById('email');// aca tienes lo del email ya hecho
    const terminos = document.getElementById('terminos');
    const submitButton = document.getElementById('registrarse') //aca tienes lo del boton de enviar

// Validación de contraseñas en tiempo real
password2.addEventListener('contrasenha', function () {
    validarContrasenas();
  });

  // Validación del formulario al intentar enviarlo
  form.addEventListener('submit', function (event) {
    event.preventDefault(); //detiene el envio automatico
    event.stopPropagation();// aqui se detiene para hacer solo lo que quieres que pase cuando se haga click el boton

    validarContrasenas();

    validarTerminos();

    // Verificar si el formulario es válido completo
    if (form.checkValidity()) {
      alert('Sus datos han sido enviados exitosamente.');
      form.classList.add('was-validated'); //se valida el formulario
    } 
  });

 //Ver si las contraseñas cohinciden
  function validarContrasenas() {
    if (password1.value !== password2.value || password2.value === '') {
      password2.setCustomValidity('Por favor, verifique bien su contraseña');
      password2.classList.add('is-invalid');
      password2.classList.remove('is-valid');
    } else {
      password2.setCustomValidity('');
      password2.classList.add('is-valid');
      password2.classList.remove('is-invalid');
    }
  }

  // para aceptar los terminos y condiciones
  function validarTerminos() {
    if (!terminos.checked) {
      terminos.setCustomValidity('Debes aceptar los Términos y condiciones para poder continuar...');
      terminos.classList.add('is-invalid');
      terminos.classList.remove('is-valid');
    } else {
      terminos.setCustomValidity('');
      terminos.classList.add('is-valid');
      terminos.classList.remove('is-invalid');
    }
  }



});
