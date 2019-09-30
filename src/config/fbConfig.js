import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDbHypOgUIB6XR-KRhUhhX4b9R0YNDEwqw",
    authDomain: "m-portfolio-2.firebaseapp.com",
    databaseURL: "https://m-portfolio-2.firebaseio.com",
    projectId: "m-portfolio-2",
    storageBucket: "",
    messagingSenderId: "341762402668",
    appId: "1:341762402668:web:15ad5b381d63d70ea3eb49"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;
