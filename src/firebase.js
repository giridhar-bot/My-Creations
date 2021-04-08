import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDihfDzTlluiyPavTV9WdWqUV_NGM78v1k",
    authDomain: "spotify-clone-5c0e0.firebaseapp.com",
    databaseURL: "https://spotify-clone-5c0e0-default-rtdb.firebaseio.com",
    projectId: "spotify-clone-5c0e0",
    storageBucket: "spotify-clone-5c0e0.appspot.com",
    messagingSenderId: "904324085542",
    appId: "1:904324085542:web:56e76b7214d37c543fb3e7"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase
