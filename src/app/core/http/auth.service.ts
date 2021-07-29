import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyDJdBNHLodAXPfYO2UeETw8SReqmfFzk0I",
      authDomain: "urxnium-doc.firebaseapp.com",
      databaseURL: "https://urxnium-doc-default-rtdb.firebaseio.com",
      projectId: "urxnium-doc",
      storageBucket: "urxnium-doc.appspot.com",
      messagingSenderId: "507377006804",
      appId: "1:507377006804:web:18abaae4f6163d5e1b2341"
    });
  }

  signInWhitGoogle() {
    if (!localStorage.getItem('uuid')) {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        localStorage.setItem('uuid', result.user.uid);
        localStorage.setItem('name', result.user.displayName);
        localStorage.setItem('email', result.user.email);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

}
