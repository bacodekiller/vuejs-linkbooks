<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue Link To Read Books</h1>
    </div>
    <div class="panel panel-primary">
      <div class="card-header">
        <h3>Add Book</h3>
      </div>
      <div class="card-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook()">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">URL:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
            <br>
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
        </form>
      </div>
    </div>

    <div class="panel panel-primary">
      <div class="card-header">
        <h3>Books Lists</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Author
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book of books" v-bind:key="book['.key']">
              <td>
                <a v-bind:href="book.url">{{ book.title }}</a>
              </td>
              <td>
                 {{ book.author }}
              </td>
              <td>
                <i class="fas fa-trash" v-on:click="removeBook(book)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
  </div>
</template>

<script>
import { booksRef } from './firebase';
import toastr from 'toastr';
export default {
  name: "App",
  firebase: {
    books: booksRef
  },
  data() {
    return {
      newBook: {
        title: "",
        author: "",
        url: ""
      }
    };
  },
  methods: {
    addBook() {
      booksRef.push({ title: this.newBook.title, author: this.newBook.author, url: this.newBook.url });
      this.newBook.title = "";
      this.newBook.author = "";
      this.newBook.url = "";
    },
    removeBook: (book) => {
      booksRef.child(book['.key']).remove();
      toastr.success("Book removed");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
