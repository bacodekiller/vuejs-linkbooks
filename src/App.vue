<template>
  <!-- <div id="app" class="container">
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
    </div> -->
   <!-- <div class="panel panel-primary">
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
    </div>  -->
  <!-- bulma -->
  <div id="app">
    <div class="container">
      <div class="field">
        <h1 class="title is-1 has-text-centered">Add Book List</h1>
      </div>
      <div class="field">
          <label class="label">Title</label>
        <div class="control">
          <input class="input is-info is-rounded" type="text" id="bookTitle" v-model="newBook.title">
        </div>
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input class="input is-info is-rounded" type="text" id="bookAuthor" v-model="newBook.author">
        </div>
      </div>
      <div class="field">
          <label class="label">URL</label>
        <div class="control">
          <input class="input is-info is-rounded" type="text" id="bookUrl" v-model="newBook.url">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button @click="addBook()" class="button is-link" v-bind:disabled="this.newBook.title.length == 0 || 
          this.newBook.author.length == 0 || this.newBook.url.length == 0 ">Submit</button>
        </div>
      </div>
    </div>
    <div class="field">
      <h1 class="title is-1 has-text-centered">Book List</h1>
    </div>
  <table class="table" is-bordered  is-fullwidth>
    <thead>
      <tr>
        <th>Title</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Author</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book of books" v-bind:key="book['.key']">
        <td>
          <a v-bind:href="book.url">{{ book.title }}</a>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          {{ book.author }}
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <i class="fas fa-trash" v-on:click="removeBook(book)"></i>
        </td>
      </tr>
    </tbody>
  </table>
    </div>
  </div>
</template>

<script>
import { booksRef } from "./firebase";
import toastr from "toastr";
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
      booksRef.push({
        title: this.newBook.title,
        author: this.newBook.author,
        url: this.newBook.url
      });
      this.newBook.title = "";
      this.newBook.author = "";
      this.newBook.url = "";
    },
    removeBook: book => {
      booksRef.child(book[".key"]).remove();
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
