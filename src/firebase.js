import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyD99-OUjCkOlydSopX1a3R9QIt6urflzoM",
    authDomain: "vuejs-linkbooks.firebaseapp.com",
    databaseURL: "https://vuejs-linkbooks.firebaseio.com",
    projectId: "vuejs-linkbooks",
    storageBucket: "vuejs-linkbooks.appspot.com",
    messagingSenderId: "515800554311"
})

export const db= app.database();
export const booksRef = db.ref('books');