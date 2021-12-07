import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbk-6PmWewG6ectsg8Y6I2ojPmIcmOvtw",
  authDomain: "firegram-photo-app.firebaseapp.com",
  databaseURL: "https://firegram-photo-app.firebaseio.com",
  projectId: "firegram-photo-app",
  storageBucket: "firegram-photo-app.appspot.com",
  messagingSenderId: "395300756218",
  appId: "1:395300756218:web:3e265334a34b75fc618743",
  measurementId: "G-10DVGSCBE5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const projectStorage = firebase.storage();

const projectFireStore = firebase.firestore();

export { projectFireStore, projectStorage, timestamp };
