import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBca3VtLCOBtg9fzYebHTOyut19md7SCnQ",
  authDomain: "fb-test-e2112.firebaseapp.com",
  databaseURL: "https://fb-test-e2112.firebaseio.com",
  projectId: "fb-test-e2112",
  storageBucket: "fb-test-e2112.appspot.com",
  messagingSenderId: "588317163221"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;