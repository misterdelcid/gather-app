import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB5q2Mbn1Jqh26dBnN27lHx_RN1BmQnap4",
  authDomain: "journey-app-45fae.firebaseapp.com",
  databaseURL: "https://journey-app-45fae.firebaseio.com",
  projectId: "journey-app-45fae",
  storageBucket: "journey-app-45fae.appspot.com",
  messagingSenderId: "315900614794"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
