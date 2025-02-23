document.addEventListener('DOMContentLoaded', () => {
    const bookTitleInput = document.getElementById('book-title');
    const bookAuthorInput = document.getElementById('book-author');
    const addBookButton = document.getElementById('add-book');
    const bookList = document.getElementById('book-list');

    const loadBooks = () => {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const li = document.createElement('li');
            li.className = 'mb-2 flex justify-between items-center';
            li.innerHTML = `
                <span class="mr-2">${book.title} by ${book.author}</span>
                <button class="bg-red-500 hover:bg-red-700 text-white p-1 rounded" onclick="removeBook(${index})">Remove</button>
            `;
            bookList.appendChild(li);
        });
    };

    const addBook = () => {
        const title = bookTitleInput.value.trim();
        const author = bookAuthorInput.value.trim();
        if (title && author) {
            const books = JSON.parse(localStorage.getItem('books')) || [];
            books.push({ title, author });
            localStorage.setItem('books', JSON.stringify(books));
            bookTitleInput.value = '';
            bookAuthorInput.value = '';
            loadBooks();
        }
    };

    window.removeBook = (index) => {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        loadBooks();
    };

    addBookButton.addEventListener('click', addBook);
    loadBooks();
});