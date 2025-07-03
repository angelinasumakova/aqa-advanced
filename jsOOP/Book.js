export class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Getters
    get bookTitle(){
        return this.title;
    }

    get bookAuthor(){
        return this.author;
    }

    get bookYear(){
        return this.year;
    }

    // Setters
    set bookTitle(value){
        if(typeof value != 'string'){
            console.log('Title of the book should be string only!');
            return;
            
       }
       this.title = value;
    }

    set bookAuthor(value){
        if(typeof value != 'string'){
            console.log('Name of book author should be string only!');
            return;
        }
        this.author = value;
    }

    set bookYear(value){
        if(typeof value != 'number'){
            console.log('Year of the book should be number only!');
            return;
        }
        this.year = value;
    }

    //Methods
    printInfo() {
        console.log(`Book title: "${this.title}"`);
        console.log(`Author: ${this.author}`);
        console.log(`Year of publication: ${this.year}`);
    }
    
    static getTheOldestBook(booksArray){
        const oldestBook = booksArray.reduce((min, curr) => (curr.year < min.year ? curr : min), booksArray[0]);
        console.log('The oldest book is: ');
        oldestBook.printInfo();
    }
}