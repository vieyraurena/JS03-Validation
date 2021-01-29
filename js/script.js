/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const inputName = document.querySelector('input[type=name]');
const inputText = document.querySelector('input[type=text]');
const inputEmail = document.querySelector('input[type=email]');
const h3 = document.querySelector('h3')


const warning = document.createElement('h2')
const check = document.createElement('p');
check.innerHTML = '';

const formValidation = () => {
  if(inputText.value === '' || inputEmail.value === '' || inputName.value === '') {
    inputName.classList.add('red');
    inputText.classList.add('red');
    inputEmail.classList.add('red');
    warning.innerHTML = 'Ocurrio un error, verifica los siguientes campos'; 
    h3.appendChild(warning);  
  } else {
    warning.innerHTML = '';
    inputName.classList.remove('red');
    inputText.classList.remove('red');
    inputEmail.classList.remove('red');
    check.innerHTML = 'Su formulario fue enviado';
    check.classList.add('green');
    form.appendChild(check);
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  formValidation();
  console.log("FORMULARIO ENVIADO");
});

