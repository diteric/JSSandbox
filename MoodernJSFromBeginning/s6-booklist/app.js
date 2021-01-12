// highlights


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
	`;   // ***
	bookTable.appendChild(newBook);   // ***
}
UI.prototype.clearInput = function(params) {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}

UI.prototype.deteleBook = function(target) {
	target.parentElement.parentElement.remove();
}

// method to add the message div before the form
UI.prototype.setAlertDiv = function(msg, cn) {
	const messageDiv = document.createElement('div');
	messageDiv.className=`alert ${cn}`;  // ***             
	messageDiv.appendChild(document.createTextNode(msg));  // ***
	console.log(messageDiv);

	// insert message div into container before the form element.
	const container = document.querySelector('.container');  // ***
	const form = document.querySelector('#book-form');  // ***
	container.insertBefore(messageDiv,form);  // ***

	// set message time out, using windows.setTimeout
	window.setTimeout(function() {   // ***
		messageDiv.remove();
	}, 3000);
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
	if (inputTitle === '' || inputAuthor === '' || inputISBN === '') {   // ***
		ui.setAlertDiv('Please fill in all fields','error'); // ***
	}
	else{
		ui.addBookToTable(book);
		ui.setAlertDiv('Book Added.', 'success'); // ***
		ui.clearInput();
	}

	e.preventDefault();
});

// Event delegation on auto generated elements.
document.getElementById('book-list').addEventListener('click', function(e) {
	if (e.target.className === 'delete') {
		const ui = new UI();
		ui.deteleBook(e.target); // ***
		ui.setAlertDiv("Deleted", 'success');
	}
	
	e.preventDefault();
})