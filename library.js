let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pageInput = document.querySelector('#page');
let submit = document.querySelector('.submit');
let myLibrary = [];

function Book(title, author, page) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.page = page;
  }

  function addBookToLibrary() {
    // do stuff here
    title = titleInput.value;
    author = authorInput.value;
    page = pageInput.value;
    book = new Book(title, author, page)
    myLibrary.push(book)
  }
  
  submit.addEventListener("click", addBookToLibrary)