import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrFo0grb1neB_x7WlqJI2QG871Z23Lu7s",
  authDomain: "disneyplus-clone-bcdfa.firebaseapp.com",
  projectId: "disneyplus-clone-bcdfa",
  storageBucket: "disneyplus-clone-bcdfa.appspot.com",
  messagingSenderId: "1022393287240",
  appId: "1:1022393287240:web:4fece35915c3a8a9ff0e7d",
  measurementId: "G-DV25F58XFD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;