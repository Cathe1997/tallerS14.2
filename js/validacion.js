document.addEventListener("DOMContentLoaded", () => {

  // Buscar todos los formularios que queremos validar
  const forms = document.querySelectorAll('.needs-validation')

  // Recorremos cada formulario para evitar el envío si no es válido
  Array.from(forms).forEach(form => {
    const checkbox = form.querySelector('#terminos') // Seleccionar el checkbox
    const botonTerminos = form.querySelector('[data-bs-target="#modalTerminos"]') // Seleccionar el botón de términos
    const errorTerminos = form.querySelector('#errorterminos') // Seleccionar el mensaje de error (ID corregido)

    // Evento cuando se intenta enviar el formulario
    form.addEventListener('submit', event => {
      // Evitar envío si no es válido
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      // Validar si el checkbox de términos está marcado
      if (!checkbox.checked) {
        botonTerminos.style.color = 'red' // Cambiar el color del botón si el checkbox no está marcado
        errorTerminos.style.display = 'inline' // Mostrar mensaje de error
      } else {
        botonTerminos.style.color = '' // Restablecer el color si está marcado
        errorTerminos.style.display = 'none' // Ocultar mensaje de error
      }

      // Aplicar los estilos de validación de Bootstrap
      form.classList.add('was-validated')
    }, false)

    // Evento para validar en tiempo real cuando cambie el estado del checkbox
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        botonTerminos.style.color = '' // Restablecer el color cuando se marca el checkbox
        errorTerminos.style.display = '' // Ocultar el mensaje de error
      } else {
        botonTerminos.style.color = 'red' // Cambiar a rojo si se desmarca
        errorTerminos.style.display = 'inline' // Mostrar mensaje de error
      }
    })
  })
})
