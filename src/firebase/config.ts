import firebase from "firebase";


firebase.initializeApp({
    apiKey: "AIzaSyACzUXjCvwi-nEFGGCj9NDSoG7LJtd3TqQ",
    authDomain: "react-todo-febca.firebaseapp.com",
    projectId: "react-todo-febca",
    storageBucket: "react-todo-febca.appspot.com",
    messagingSenderId: "867212701424",
    // appId: "1:867212701424:web:735a70d65a69b256f15c35"
});


export const db = firebase.firestore();

 // export const db = firebase.database().ref();
//
// export const todosRef = databaseRef.child("todos");
