const myLibrary = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, haveRead: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, haveRead: false },
    { title: "1984", author: "George Orwell", pages: 328, haveRead: false }
];

/* fill out book card */
function addBookToLibrary(title,author,pages,haveRead){
    console.log(title,author,pages,haveRead);
    const container = document.getElementById("right-card-container");

    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divBook = document.createElement("div");
    divBook.classList.add("card-book");
    divBook.textContent="Book";

    const divTitle = document.createElement("div");
    divTitle.classList.add("card-title");
    divTitle.textContent="Title: ";
    const spanTitle = document.createElement("span");
    spanTitle.classList.add("span-title");
    spanTitle.textContent = title;
    divTitle.appendChild(spanTitle);

    const divAuthor = document.createElement("div");
    divAuthor.classList.add("card-author");
    divAuthor.textContent="Author: ";
    const spanAuthor = document.createElement("span");
    spanAuthor.classList.add("span-author");
    spanAuthor.textContent = author;
    divAuthor.appendChild(spanAuthor);

    const divPages = document.createElement("div");
    divPages.classList.add("card-pages");
    divPages.textContent="pages: ";
    const spanPages = document.createElement("span");
    spanPages.classList.add("span-pages");
    spanPages.textContent = pages;
    divPages.appendChild(spanPages);

    const divHaveread = document.createElement("div");
    divHaveread.classList.add("card-have-read");
    divHaveread.textContent="have read: ";
    const spanRead = document.createElement("span");
    spanRead.classList.add("span-read");
    spanRead.textContent = haveRead;


    divCard.append(divBook,divTitle,divAuthor,divPages,divHaveread);
    container.appendChild(divCard);

};

function Book(title,author,pages,haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = false;
}
/*
function addBookToLibrary(name,author,pages,haveRead) {
    let newBook = new Book(name,author,pages,haveRead);
    myLibrary.push(newBook);
} */



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

const openModal = () => {
    const modal = document.getElementById("modal");
    modal.showModal();
  };
  
const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.close();
  };


const bookForm = document.getElementById("book-form");

 document.getElementById("book-form").addEventListener("submit",function(event){
    event.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = document.getElementById("book-pages").value;
    const haveRead = document.getElementById("have-read").checked;
    bookForm.reset();
    console.log(myLibrary);
    addBookToLibrary(title,author,pages,haveRead);
    console.log(myLibrary);
  });

