<template>
  <div id="app">
    
  </div>
</template>

<script>
// connect to firebase
import Firebase from "firebase"

let config = {
  apiKey: "AIzaSyD99-OUjCkOlydSopX1a3R9QIt6urflzoM",
  authDomain: "vuejs-linkbooks.firebaseapp.com",
  databaseURL: "https://vuejs-linkbooks.firebaseio.com",
  projectId: "vuejs-linkbooks",
  storageBucket: "",
  messagingSenderId: "515800554311"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let bookRef = db.ref('books');

export default {
  name: "App",
  firebase: {
    books: bookRef
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
