let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pageInput = document.querySelector('#page');
let submit = document.querySelector('.submit');
let bookNumber = document.querySelector('.booknumber');
let myLibrary = [];
let numberBook = myLibrary.length
let title, author, page
let bookAuthor, pages
bookNumber.textContent = numberBook
let userRegistered = false
const library = document.getElementsByClassName("library")

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

    displayBook()
  }

  function displayBook() {
    const div = document.createElement("div")
    div.classList.add("card")
    bookTitle = document.createElement("h5")
    bookAuthor = document.createElement("p");
    pages = document.createElement("p");
    bookTitle.innerText = title
    bookAuthor.innerText = author
    pages.innerHTML = page
    library[0].appendChild(div)
    div.appendChild(bookTitle)
    div.appendChild(bookAuthor)
    div.appendChild(pages)
    console.log(div)
  }


 


  submit.addEventListener("click", addBookToLibrary)