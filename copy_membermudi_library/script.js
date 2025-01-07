const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};


function addBookToLibrary(book) {
    myLibrary.push(book);
    renderLibrary();
}



function renderLibrary() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
  
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      libraryDiv.appendChild(bookCard);
    });
  
    // Adding event listeners for my buttons
    document.querySelectorAll('.toggle-read-btn').forEach(button => {
      button.addEventListener('click', toggleReadStatus);
    });
  
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', removeBook);
    });
}



function toggleReadStatus(e) {
    const index = e.target.dataset.index;
    myLibrary[index].toggleRead();
    renderLibrary();
}
  
function removeBook(e) {
    const index = e.target.dataset.index;
    myLibrary.splice(index, 1);
    renderLibrary();
}




document.getElementById('new-book-btn').addEventListener('click', () => {
    document.getElementById('book-form-dialog').showModal();
});

document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('book-form-dialog').close();
});

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
  
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
  
    document.getElementById('book-form').reset();
    document.getElementById('book-form-dialog').close();
});

