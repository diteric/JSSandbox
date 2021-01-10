function Book(title, auther, isbn){
  this.title = title;
  this.auther = auther;
  this.isbn = isbn;
}

function UI() {}
UI.prototype.addBookToTable = function(book) {
	// get the book table html element
	bookTable = document.getElementById('book-list');
	newBook = document.createElement('tr');
	newBook.innerHTML = `
		<td>${book.title}</td>
		<td>${book.auther}</td>
		<td>${book.isbn}</td>
		<td><a href='#' class='delete'>X</a></td>
	`;
	bookTable.appendChild(newBook);
}
UI.prototype.clearInput = function(params) {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}

// add submit event listener
document.getElementById('book-form').addEventListener('submit', 
	function addBook(e) {
	// get form values
	const inputTitle = document.getElementById('title').value;
	const inputAuthor = document.getElementById('author').value;
	const inputISBN = document.getElementById('isbn').value;
	console.log(inputTitle, inputAuthor, inputISBN);

	const book = new Book(inputTitle, inputAuthor, inputISBN);
	const ui = new UI;
	ui.addBookToTable(book);
	ui.clearInput();

	e.preventDefault();
});