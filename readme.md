````markdown name=README.md
# Bookshelf App

Ini adalah aplikasi Bookshelf sederhana yang memungkinkan pengguna untuk menambahkan dan menghapus buku. Data disimpan di web storage (localStorage) browser. Aplikasi ini menggunakan Tailwind CSS untuk styling.

## Fitur

- Tambahkan buku dengan judul dan penulis.
- Hapus buku dari daftar.
- Simpan daftar buku di localStorage browser sehingga tetap ada meskipun halaman direfresh atau browser ditutup.

## Teknologi yang Digunakan

- HTML
- JavaScript
- Tailwind CSS
- localStorage

## Memulai

Ikuti instruksi ini untuk mengatur proyek di komputer lokal Anda.

### Prasyarat

- Browser web modern (misalnya, Chrome, Firefox, Edge)

### Instalasi

1. Clone repository atau unduh file proyek.

    ```sh
    git clone https://github.com/bayuxxx/Bookshelf-test.git
    ```

    Atau unduh file ZIP dari proyek dan ekstrak.

2. Navigasi ke direktori proyek.

    ```sh
    cd bookshelf-app
    ```

3. Buka file `index.html` di browser web Anda.

    ```sh
    open index.html
    ```

    Atau buka file `index.html` secara manual dengan mengklik ganda atau klik kanan dan pilih "Open with" dan kemudian browser Anda.

## Struktur File

- `index.html`: File HTML utama yang berisi struktur halaman web.
- `main.js`: File JavaScript yang berisi logika untuk menambahkan dan menghapus buku, serta berinteraksi dengan localStorage.
- `styles.css`: File CSS yang berisi gaya kustom untuk aplikasi, dilengkapi dengan Tailwind CSS.

## Penggunaan

1. Buka file `index.html` di browser Anda.
2. Masukkan judul dan penulis buku di input field.
3. Klik tombol "Add Book" untuk menambahkan buku ke daftar.
4. Buku akan ditampilkan di daftar di bawahnya.
5. Untuk menghapus buku, klik tombol "Remove" di samping buku yang ingin dihapus.
6. Daftar buku disimpan di localStorage browser, sehingga tetap ada meskipun halaman direfresh atau browser ditutup dan dibuka kembali.

## Penjelasan Kode

### index.html

File ini berisi struktur HTML aplikasi, termasuk input field untuk judul dan penulis buku, serta daftar untuk menampilkan buku.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookshelf App</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold text-center text-blue-600 mb-8">Bookshelf App</h1>
        <div class="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
            <div class="flex flex-col mb-4">
                <input id="book-title" type="text" placeholder="Book Title" class="border p-3 rounded mb-4">
                <input id="book-author" type="text" placeholder="Book Author" class="border p-3 rounded mb-4">
                <button id="add-book" class="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded">Add Book</button>
            </div>
        </div>
        <div class="mt-8 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Book List</h2>
            <ul id="book-list" class="list-disc pl-5"></ul>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>
```

### main.js

File ini berisi kode JavaScript yang menangani logika untuk menambahkan, menghapus, dan menampilkan buku menggunakan localStorage.

```javascript
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
```

### styles.css

File ini berisi gaya CSS kustom yang melengkapi Tailwind CSS untuk tampilan aplikasi.

```css
body {
    font-family: 'Inter', sans-serif;
}

input {
    min-width: 200px;
}

#book-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

## Poin Pembelajaran

- **localStorage**: Pelajari cara menggunakan localStorage untuk menyimpan data secara persisten di browser.
- **Manipulasi DOM**: Pahami cara memanipulasi DOM untuk menambahkan, menghapus, dan menampilkan elemen secara dinamis.
- **Penanganan Event**: Pelajari cara menangani interaksi pengguna seperti klik tombol.
- **Tailwind CSS**: Kenali penggunaan Tailwind CSS untuk styling halaman web dengan cepat dan efisien.

````