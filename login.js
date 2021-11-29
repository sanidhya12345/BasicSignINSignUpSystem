const firebaseConfig = {
    apiKey: "AIzaSyC-YQR54kmN450qYldz2dn-IMuwsmMO9T4",
    authDomain: "signinsignup-19fb4.firebaseapp.com",
    projectId: "signinsignup-19fb4",
    storageBucket: "signinsignup-19fb4.appspot.com",
    messagingSenderId: "108159017127",
    appId: "1:108159017127:web:a0a5de4f5f31ad56023b82"
  };

  firebase.initializeApp(firebaseConfig)

  // Initialize Firebase
  const auth=firebase.auth();

  function signUp(){
      var email=document.getElementById("email");
      var password=document.getElementById("password");

      const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>alert(e.message));

      alert("signed in");

  }