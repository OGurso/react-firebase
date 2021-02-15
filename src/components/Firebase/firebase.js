import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjxMjfmexJOrVMm5ca3UlztwWH1mQiilU",
  authDomain: "react-firebase-daf4c.firebaseapp.com",
  projectId: "react-firebase-daf4c",
  storageBucket: "react-firebase-daf4c.appspot.com",
  messagingSenderId: "750290817091",
  appId: "1:750290817091:web:2208c2ffb6cef274a684f6",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  //*** AUTH API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
