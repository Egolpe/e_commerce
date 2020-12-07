import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIc91gYyYRIe-_czEg94DslOOJvCaNQY0",
    authDomain: "tienda-prueba-33a3c.firebaseapp.com",
    projectId: "tienda-prueba-33a3c",
    storageBucket: "tienda-prueba-33a3c.appspot.com",
    messagingSenderId: "352348311224",
    appId: "1:352348311224:web:2514e2fb8ea818bc746e4d",
    measurementId: "G-48ZF77VXPW"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;