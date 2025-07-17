import {Book} from './Book.js'
import { EBook } from './EBook.js';

// tasks 1-2
const book1 = new Book("Dirty Little Secrets", "Jo Spain", 2020);
const book2 = new Book("Things We Left Behind", "Lucy Score", 2023);
const book3 = new EBook("Happy Place", "Emily Henry", 2024, "pdf");

book1.printInfo();
console.log('\n');
book2.printInfo();
console.log('\n');
book3.printInfo();
console.log('\n');

// task 3 - check validations + getters + setters
const book4 = new Book();
// returning validation errors
book4.bookTitle = 12;
book4.bookAuthor = 123;
book4.bookYear = "875";
console.log();
// setting correct values
book4.bookTitle = 'New Book 4';
book4.bookAuthor = "Author of book 4";
book4.bookYear = 2025;
// getting values of the book
console.log(book4.bookTitle);
console.log(book4.bookAuthor);
console.log(book4.bookYear);
console.log('\n');

// task 4 - check the oldest book
const booksData = [
    new EBook("book 5", "author 5", 2001, "ebup"),
    new EBook("book 6", "author 6", 1985, "pdf"),
    new Book("book 7", "author 7", 2015)
]
Book.getTheOldestBook(booksData);
console.log('\n');

// task 5
const book8 = new Book("book 8", "author 8", 2020);
console.log(EBook.newEBookFromBook(book8, "ebup"));