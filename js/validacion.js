
// me robe este js en boostrap, dile a chat gpt que te lo desglose y te lo explique bien para que lo entiendas

const form = document.querySelector('.needs-validation');
const checkbox = document.getElementById('terminos'); // para el checkbox
const botonTerminos = form.querySelector('[data-bs-target="#modalTerminos"]'); // para el boton de terminos
const errorTerminos = document.getElementById('errorterminos'); // para el maldito mensaje de error
const mostarerrorterminos = document.getElementById('mensajecheckbox')

document.addEventListener("DOMContentLoaded", () => {

  // cuando el formulario escuche un submit del boton registrarme
  form.addEventListener('submit', event => {
    // evita el envio si no es valido el formulario
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    //aqui irian las funciones
    validaCheckbox()
    validaCheckboxTiempoReal()
    
    
    // aplica los estilos de validacion de bootstrap
    form.classList.add('was-validated');
  });

});


// aqui van las funciones....lo demas te toca a ti amiga XD


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
