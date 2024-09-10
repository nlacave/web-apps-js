let inputNombre = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');
let nombreError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let formulario = document.getElementById('formulario');
let nombreValido, passwordValido, emailValido;


const firebaseConfig = {
    apiKey: "AIzaSyDn8zctcX46Vr9PzI4J_Q75ALDyogmV1W8",
    authDomain: "formulario-de-registro-ed5fd.firebaseapp.com",
    projectId: "formulario-de-registro-ed5fd",
    storageBucket: "formulario-de-registro-ed5fd.appspot.com",
    messagingSenderId: "631494614",
    appId: "1:631494614:web:618b480a412b0eba1fb677",
    measurementId: "G-5Q213YJJX6"
  };

  // Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtén la referencia a Firestore
const db = firebase.firestore();


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
        db.collection("users").add({
            nombre: inputNombre.value,
            email: inputEmail.value,
            password: inputPassword.value
        })
        .then((docRef) => {
            alert('Formulario enviado exitosamente!');
        })
        .catch((error) => {
           alert("Ocurrió un error:", error);
        });
       
        formulario.reset();
    }
})