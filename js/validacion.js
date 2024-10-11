const form = document.querySelector('.needs-validation');
const checkbox = document.getElementById('terminos'); // para el checkbox
const botonTerminos = form.querySelector('[data-bs-target="#modalTerminos"]'); // para el boton de terminos
const mostarerrorterminos = document.getElementById('mensajecheckbox')
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

document.addEventListener("DOMContentLoaded", () => {

  // cuando el formulario escuche un submit del boton registrarme
  form.addEventListener('submit', (event) => {
    // evita el envio si no es valido el formulario
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    //aqui irian las funciones
    validaCheckbox();
    validaCheckboxTiempoReal();
    
    
    // aplica los estilos de validacion de bootstrap
    form.classList.add('was-validated');
  });

});

  password1.addEventListener('input', validaPasswords);
  password2.addEventListener('input', validaPasswords);
  validaCheckboxTiempoReal();

  //Validacion en tiempo real
function validaPasswords() {
  if (password1.value === '' || password1.value.length < 6) {
    password1.setCustomValidity('La contraseña debe tener al menos 6 caracteres.');
  } else {
    password1.setCustomValidity('');
  }

  if (password2.value !== password1.value) {
    password2.setCustomValidity('Las contraseñas no coinciden.');
  } else {
    password2.setCustomValidity('');
  }
}


function validaCheckbox() {
  // ve si el checkbox esta marcado
  if (!checkbox.checked) { // si no lo esta:
    botonTerminos.style.color = 'red'; // cambiar el color del boton a rojo
    mostarerrorterminos.innerHTML= `
    <div class="invalid-feedback d-inline" id="errorterminos">Debes aceptar los términos y condiciones.</div>
    ` 
  } else {
    mostarerrorterminos.innerHTML=""
    botonTerminos.style.color = ''; // restablece el color si está marcado
    
  }
}

function validaCheckboxTiempoReal() {
  // evento que valida en tiempo real cuando el checkbox cambie
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      mostarerrorterminos.innerHTML=""
      botonTerminos.style.color = ''; // restablece el color cuando se marca el checkbox

    } else {
      botonTerminos.style.color = 'red'; // cambia a rojo si se desmarca
      mostarerrorterminos.innerHTML= `
      <div class="invalid-feedback d-inline" id="errorterminos">Debes aceptar los términos y condiciones.</div>
      ` 
    }
  });
}
