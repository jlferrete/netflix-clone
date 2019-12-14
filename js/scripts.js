// validar el formulario
const inputs = document.querySelectorAll('form .campo input');

//Listener a los inputs
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput(e) {

    const estado = ['valido', 'no-valido'];

    let clase;

    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //Inyectar dinamicamente el div con el error

    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            //Construir mensaje de error
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //Insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        //Limpiar mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}