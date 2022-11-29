
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

  const firebaseConfig = {
    apiKey: "AIzaSyBY3vN1L4pweNIac3Y2R5jyaugzF-kcSl0",
    authDomain: "sweetcare-1c703.firebaseapp.com",
    projectId: "sweetcare-1c703",
    storageBucket: "sweetcare-1c703.appspot.com",
    messagingSenderId: "164898990055",
    appId: "1:164898990055:web:5a11db536c540aee917f42"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  
  
