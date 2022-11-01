let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pageInput = document.querySelector('#page');
let submit = document.querySelector('.submit');
let bookNumber = document.querySelector('.booknumber');
let myLibrary = [];
let numberBook = myLibrary.length
let title, author, page
bookNumber.textContent = numberBook
let userRegistered = false

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
    if (title === '' || author === '' || page === '') {
      if (title === '') {
        alert('Please insert a book name')
      } else if (author === '') {
        alert("Please insert author's name")
      } else {
        alert ("Please insert number of pages")
      }
    } else if (+page < 0){
        alert("Please insert page number higher than 0")
    } else {
      let book = new Book(title, author, page)
      myLibrary.push(book)
      numberBook = myLibrary.length
      bookNumber.textContent = numberBook
    }
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
  }
  
  submit.addEventListener("click", addBookToLibrary)