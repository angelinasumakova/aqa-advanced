import { Book } from "./Book.js";

export class EBook extends Book{
    constructor(title, author, year, fileFormat){
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo(){
        super.printInfo();
        console.log(`File format of e-book - ${this.fileFormat}`);
    }

    static newEBookFromBook(book, fileFormat){
        const newEBook = new EBook(book.title, book.author, book.year, fileFormat);
        newEBook.__proto__ = book;
        return newEBook;
    }
}