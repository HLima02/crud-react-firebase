import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCn9ZRwL7qJwsjrYPYlcXsByKuYu5efHqk",
  authDomain: "lista-de-tarefas-f9cce.firebaseapp.com",
  projectId: "lista-de-tarefas-f9cce",
  storageBucket: "lista-de-tarefas-f9cce.appspot.com",
  messagingSenderId: "48411517940",
  appId: "1:48411517940:web:739cd16fdded563e2a4fa1"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;