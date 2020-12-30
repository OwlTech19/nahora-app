import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";


export default function FirebaseInit() {

    console.log('Fui chamado');
    
    // Initialize Firebase
    const firebaseConfig = {
        databaseURL: 'https://nahora-app-cd514-default-rtdb.firebaseio.com',
        apiKey: "AIzaSyANNlxZClU45jvnnw3282bjHr2J0_3r5b0",
        authDomain: "nahora-app-cd514.firebaseapp.com",
        projectId: "nahora-app-cd514",
        storageBucket: "nahora-app-cd514.appspot.com",
        messagingSenderId: "510314918858",
        appId: "1:510314918858:web:533f04a701f4d0c4481533",
        //measurementId: 'G-measurement-id',
    };

    firebase.initializeApp(firebaseConfig);
}