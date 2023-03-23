const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 2010 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 2010 }
];

const book2010 = books.filter(book => book.year >= 2010);
console.log(book2010);
const finalBook = book2010.map(book=>({ title : book.title , author : book.author.toLocaleUpperCase() , year: book.year}));


console.log(finalBook);
