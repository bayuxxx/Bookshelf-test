# 📚 Bookshelf App

Bookshelf App adalah aplikasi sederhana untuk menambahkan dan menghapus buku dengan penyimpanan data menggunakan **localStorage** di browser. Aplikasi ini dibuat menggunakan **HTML**, **JavaScript**, dan **Tailwind CSS** untuk styling.

## ✨ Fitur

✅ Tambahkan buku dengan **judul** dan **penulis**.  
✅ Hapus buku dari daftar dengan mudah.  
✅ Data tetap tersimpan di **localStorage**, bahkan setelah halaman direfresh.  

---

## 🛠 Teknologi yang Digunakan

- **HTML** → Struktur halaman web.
- **JavaScript** → Logika aplikasi dan interaksi pengguna.
- **Tailwind CSS** → Styling yang cepat dan fleksibel.
- **localStorage** → Penyimpanan data secara lokal di browser.

---

## 🚀 Memulai

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer Anda:

### 📌 Prasyarat

Pastikan Anda memiliki **browser web modern** seperti **Chrome, Firefox, atau Edge**.

### 🔧 Instalasi

1. **Clone repository** atau **unduh file proyek**.

    ```sh
    git clone https://github.com/bayuxxx/Bookshelf-test.git
    ```

    Atau unduh file **ZIP**, lalu ekstrak.

2. **Masuk ke direktori proyek**.

    ```sh
    cd bookshelf-test
    ```

3. **Buka file `index.html` di browser**.

    ```sh
    open index.html
    ```
    
    Atau klik kanan **`index.html`**, lalu pilih **"Open with"** dan pilih browser Anda.

---

## 📂 Struktur File

📁 **bookshelf-test/**  
 ├── 📄 `index.html` → Struktur utama halaman web.  
 ├── 📄 `main.js` → Logika aplikasi (tambah, hapus, simpan buku).  
 ├── 📄 `styles.css` → Styling tambahan untuk tampilan aplikasi.  

---

## 📝 Penggunaan

1. **Buka `index.html` di browser**.
2. **Masukkan judul dan penulis buku** pada form yang tersedia.
3. **Klik tombol "Add Book"** untuk menambahkan buku.
4. Buku akan muncul di daftar di bawahnya.
5. **Klik tombol "Remove"** untuk menghapus buku dari daftar.
6. **Data akan tetap tersimpan** meskipun halaman direfresh atau browser ditutup.

---

## 📜 Kode Sumber

### 🔹 `index.html`
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

### 🔹 `main.js`
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

### 🔹 `styles.css`
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

---

## 🎯 Poin Pembelajaran

📌 **localStorage** → Simpan data secara persisten di browser.  
📌 **Manipulasi DOM** → Tambah, hapus, dan tampilkan elemen secara dinamis.  
📌 **Tailwind CSS** → Styling halaman web dengan cepat dan fleksibel.  

---

💡 **Nikmati coding dan happy learning** 🚀

