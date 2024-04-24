/*const myLibrary = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, haveRead: false },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, haveRead: false },
  { title: "1984", author: "George Orwell", pages: 328, haveRead: false }
]; */

/*
function addBookToLibrary(name,author,pages,haveRead) {
    let newBook = new Book(name,author,pages,haveRead);
    myLibrary.push(newBook);
} */



/*delete card when button is clicked */
function removeElementAndChildren(element) {
  element.parentNode.removeChild(element);
}

let multiSelectButtons = document.querySelectorAll("button.card-close");

/* add delete function to each delete button on cards*/
multiSelectButtons.forEach(function (btnCard) {
  btnCard.addEventListener("click", function () {
    removeElementAndChildren(btnCard.parentNode);
    console.log("Book Deleted");
  });
})



/* fill out book card */
function addBookToLibrary(title, author, pages, haveRead) {
  console.log(title, author, pages, haveRead);
  const container = document.getElementById("right-card-container");


  const btnCard = document.createElement("button");
  btnCard.classList.add("card-close");
  iCard = document.createElement("i");
  iCard.setAttribute("class", "bx bx-window-close");
  btnCard.appendChild(iCard);


  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divBook = document.createElement("div");
  divBook.classList.add("card-book");
  divBook.textContent = "Book";

  const divTitle = document.createElement("div");
  divTitle.classList.add("card-title");
  divTitle.textContent = "Title: ";
  const spanTitle = document.createElement("span");
  spanTitle.classList.add("span-title");
  spanTitle.textContent = title;
  divTitle.appendChild(spanTitle);

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("card-author");
  divAuthor.textContent = "Author: ";
  const spanAuthor = document.createElement("span");
  spanAuthor.classList.add("span-author");
  spanAuthor.textContent = author;
  divAuthor.appendChild(spanAuthor);

  const divPages = document.createElement("div");
  divPages.classList.add("card-pages");
  divPages.textContent = "pages: ";
  const spanPages = document.createElement("span");
  spanPages.classList.add("span-pages");

  spanPages.textContent = pages;
  divPages.appendChild(spanPages);

  const divHaveread = document.createElement("div");
  divHaveread.classList.add("card-have-read");
  divHaveread.textContent = "have read: ";

  const spanRead = document.createElement("span");
  spanRead.classList.add("span-read");

  divHaveread.appendChild(spanRead);
  if (haveRead == true) {
    spanRead.style.color = "#11e911";
    spanRead.textContent = "✓";
  } else {
    spanRead.style.color = "#e9112e";
    spanRead.textContent = "×";
  }

  spanRead.addEventListener("click",function(){
    toggleReadStatus(this);
  })

  divCard.append(btnCard, divBook, divTitle, divAuthor, divPages, divHaveread);
  container.appendChild(divCard);

  btnCard.addEventListener("click", function () {
    removeElementAndChildren(divCard);
    console.log("deleted");
  });

};


/*book constructure */
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = false;
}


/*modal functionality */
const openModal = () => {
  const modal = document.getElementById("modal");
  modal.showModal();
};
/*modal functionality */
const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.close();
};

/*take add book inputs from modal and send to create card */
const bookForm = document.getElementById("book-form");

document.getElementById("book-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;
  const haveRead = document.getElementById("have-read").checked;
  bookForm.reset();
  addBookToLibrary(title, author, pages, haveRead);
  console.log("Added " + title,author,pages,haveRead + " to Library");
});



function toggleReadStatus(spanElement) {
  if (spanElement.innerHTML === "✓") {
      spanElement.innerHTML = "×";
      spanElement.style.color = "red"; 
  } else {
      spanElement.innerHTML = "✓";
      spanElement.style.color = "#11e911"; 
  }
}