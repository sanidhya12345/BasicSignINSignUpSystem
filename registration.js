const firebaseConfig = {
    apiKey: "AIzaSyDX8-8eJ5pDPw0QVATQFle6w-NMA80oy9I",
    authDomain: "registration-form-b65ec.firebaseapp.com",
    databaseURL: "https://registration-form-b65ec-default-rtdb.firebaseio.com",
    projectId: "registration-form-b65ec",
    storageBucket: "registration-form-b65ec.appspot.com",
    messagingSenderId: "734536718472",
    appId: "1:734536718472:web:314e67f899a9762edee73d",
    measurementId: "G-KHT4LGVQ5Y"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
let formMessage = firebase.database().ref('register');

document.getElementById('registrationform').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();

    let email=document.querySelector('#email').value;
    let reemail=document.querySelector('#re-email').value;
    let password=document.querySelector('#password').value;

    document.getElementById('registrationform').reset();
    
    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim().length < 7) {
        alert("Password must be at least 7 characters");
    } else if (email != reemail) {
        alert("emails do not match");
    } else {
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
            window.close();
    }

}

