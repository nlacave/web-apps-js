let inputNombre = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');
let nombreError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let buttonSubmit = document.querySelector('button');
let formulario = document.getElementById('formulario');
let nombreValido, passwordValido, emailValido;


formulario.addEventListener(('submit'), (event) => {
    event.preventDefault();
    nombreValido = false, emailValido = false, passwordValido = false;
    const patronNombre = /^[\p{L} \-']+$/u;
    if(inputNombre.value.trim() === '' || !patronNombre.test(inputNombre.value)) {
        nombreError.textContent = 'Error. Debe ingresar un nombre válido.';
        nombreError.classList.add('error-message');
    } else {
        nombreValido = true;
        nombreError.classList.remove('error-message');
        nombreError.textContent = '';
    }

    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/; 
    if (!patronEmail.test(inputEmail.value)) {
        emailError.textContent = 'Error. Debe ingresar un email válido.';
        emailError.style.color = 'red';
        emailError.classList.add('error-message');
    } else {
        emailValido = true;
        emailError.classList.remove('error-message');
        emailError.textContent = '';
    }

    const patronPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(!patronPassword.test(inputPassword.value)) {
        passwordError.textContent = 'Error de password. Debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.';
        passwordError.classList.add('error-message');
    } else {
        passwordValido = true;
        passwordError.classList.remove('error-message');
        passwordError.textContent = '';
    }

    if(nombreValido && emailValido && passwordValido) {
        alert('Formulario enviado exitosamente!');
        db.collection("users").add({
            nombre: inputNombre.value,
            email: inputEmail.value,
            password: inputPassword.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
})