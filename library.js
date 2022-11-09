let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pageInput = document.querySelector('#page');
let submit = document.querySelector('.submit');
let bookNumber = document.querySelector('.booknumber');
let pageNumber = document.querySelector('.pagenumber');
let readNumber = document.querySelector('.readnumber')
let readStatus = document.querySelector('.status');
let bookPages = []
let index;
let statusBook = "Yes";
let readBookCount = 0;
let newTotalPages;
let currentBookPage;
let myLibrary = [];
let numberBook = myLibrary.length
readNumber.textContent = readBookCount
let title, author, page
let totalPages;
let bookAuthor, pages
bookNumber.textContent = numberBook
pageNumber.textContent = "0"
let userRegistered = false
const library = document.getElementsByClassName("library")

function Book (title, author, page, statusBook) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.page = page;
    this.statusBook = statusBook;
  }

  function addBookToLibrary() {
    // do stuff here
    title = titleInput.value;
    author = authorInput.value;
    page = pageInput.value;
    bookPages.push(Number(page))
    totalPages = bookPages.reduce((total, a) => total + a, 0)
    console.log(totalPages)
    if (title === '' || author === '' || page === '') {
      if (title === '') {
        alert('Please insert a book name')
        return
      } else if (author === '') {
        alert("Please insert author's name")
        return
      } else {
        alert ("Please insert number of pages")
        return
      }
    } else if (+page < 0){
        alert("Please insert page number higher than 0")
    } else {
      let book = new Book(title, author, page, statusBook)
      myLibrary.push(book)
      numberBook = myLibrary.length
      bookNumber.textContent = numberBook
      pageNumber.textContent = totalPages
    }
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";


  displayBook()
  buttonDelete = document.querySelectorAll(".deletebtn")
  buttonDelete.forEach(btn => {
    btn.addEventListener("click", (e) => {
    btn.parentNode.parentNode.removeChild(btn.parentNode)
    index = Array.from(buttonDelete).indexOf(e.target);
    console.log(index)
  })
});
    
    readBookCount = 0;
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].statusBook === "Yes") {
        readBookCount++
        readNumber.textContent = readBookCount
      }
    }
  }

  function displayBook() {
    const div = document.createElement("div")
    div.classList.add("card")
    bookTitle = document.createElement("h3")
    bookTitle.classList.add("booktitle")
    bookAuthor = document.createElement("p");
    pages = document.createElement("p");
    haveRead = document.createElement("p")
    deleteButton = document.createElement("button")
    deleteButton.classList.add("deletebtn")
    deleteButton.innerText = "X"
    bookTitle.innerText = `Title: ${title}`
    bookAuthor.innerText = `Author: ${author}`
    pages.innerText = `Number of pages: ${page}`
    haveRead.innerText = `Have you read it?: ${statusBook}`
    library[0].appendChild(div)
    div.appendChild(deleteButton)
    div.appendChild(bookTitle)
    div.appendChild(bookAuthor)
    div.appendChild(pages)
    div.appendChild(haveRead)

    deleteButton.addEventListener("click", function deleteBook() {
      this.parentNode.parentNode.removeChild(this.parentNode)
      numberBook = myLibrary.length
      bookNumber.textContent = numberBook
    })
  }

readStatus.addEventListener("click", changeReadStatus)
function changeReadStatus() {
  if (readStatus.textContent === "Yes") {
    readStatus.textContent = "No"
    statusBook = readStatus.textContent;
  } else if (readStatus.textContent === "No") {
    readStatus.textContent = "Yes"
    statusBook = readStatus.textContent;
  }
}

submit.addEventListener("click", addBookToLibrary)

