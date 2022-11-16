// add how many page read
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pageInput = document.querySelector('#page');
let submit = document.querySelector('.submit');
let bookNumber = document.querySelector('.booknumber');
let pageNumber = document.querySelector('.pagenumber');
let readNumber = document.querySelector('.readnumber')
let readStatus = document.querySelector('.status');
let bookPages = []
let statusBook = "Yes";
let statusArray = [];
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

class Book {
  constructor(title, author, page, statusBook) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.statusBook = statusBook;
  }
}

// function Book (title, author, page, statusBook) {
//     // the constructor...
//     this.title = title;
//     this.author = author;
//     this.page = page;
//     this.statusBook = statusBook;
//   }

  function addBookToLibrary() {
    // do stuff here
    title = titleInput.value;
    author = authorInput.value;
    page = pageInput.value;
    statusArray.push(statusBook)
    bookPages.push(Number(page))
    totalPages = bookPages.reduce((total, a) => total + a, 0)
 
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

      displayBook()
      buttonDelete = document.querySelectorAll(".deletebtn")
      buttonDelete.forEach(btn => {
        btn.addEventListener("click", (e) => {
          number = Array.from(buttonDelete).indexOf(e.target);
          return number
        })
      });

      deleteButton.addEventListener("click", function () {
        myLibrary.splice(number, 1)
        bookPages.splice(number, 1)
        statusArray.splice(number, 1)
        haveReadArray = document.querySelectorAll(".haveRead")
        allStatusBtn = document.querySelectorAll('.statusbtn');
        totalPages = bookPages.reduce((total, a) => total + a, 0)
        pageNumber.textContent = totalPages
        numberBook = myLibrary.length
        bookNumber.textContent = numberBook
        newStatus = statusArray.filter(status => status == "Yes")
        readNumber.textContent = newStatus.length
      })
    }

    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    
    readBookCount = 0;
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].statusBook === "Yes") {
        readBookCount++
        readNumber.textContent = readBookCount
      }
    }

    haveReadArray = document.querySelectorAll(".haveRead")
    allStatusBtn = document.querySelectorAll('.statusbtn');
    allStatusBtn.forEach(btn => {
      btn.addEventListener("click", (e) => {
        statusBtnNumber = Array.from(allStatusBtn).indexOf(e.target)
        return statusBtnNumber
      })
    })

    statusButton.addEventListener("click", function () {
      if (myLibrary[statusBtnNumber].statusBook === "Yes") {
        myLibrary[statusBtnNumber].statusBook = "No"
        statusArray[statusBtnNumber] = "No"
        haveReadArray[statusBtnNumber].innerText = `Have you read it?: ` + myLibrary[statusBtnNumber].statusBook
      } else if (myLibrary[statusBtnNumber].statusBook === "No") {
        myLibrary[statusBtnNumber].statusBook = "Yes"
        statusArray[statusBtnNumber] = "Yes"
        haveReadArray[statusBtnNumber].innerText = `Have you read it?: ` + myLibrary[statusBtnNumber].statusBook
      }
      newStatus = statusArray.filter(status => status == "Yes")
      readNumber.textContent = newStatus.length
    })

  }

  function displayBook() {
    const div = document.createElement("div")
    div.classList.add("card")
    bookTitle = document.createElement("h3")
    bookTitle.classList.add("booktitle")
    bookAuthor = document.createElement("p");
    pages = document.createElement("p");
    haveRead = document.createElement("p")
    haveRead.classList.add("haveRead")
    deleteButton = document.createElement("button")
    deleteButton.classList.add("deletebtn")
    deleteButton.innerText = "X"
    statusButton = document.createElement("button")
    statusButton.classList.add("statusbtn")
    statusButton.innerText = "Change Read Status"
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
    div.appendChild(statusButton)

    deleteButton.addEventListener("click", function () {
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



