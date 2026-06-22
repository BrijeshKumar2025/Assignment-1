// Printing library books details
const library = [
    { bookId: 101, title: "Learn English with Ram", author: "ram Chander", category: "English language", copies: 5 },
    { bookId: 102, title: "Computer", author: "Monu", category: "Database", copies: 2 },
    { bookId: 103, title: "Computer Networks", author: "Sonu", category: "Networking", copies: 1 },
    { bookId: 104, title: "Data Structures", author: "Shivam", category: "Programming", copies: 4 },
    { bookId: 105, title: "Web Development", author: "Prince", category: "Programming", copies: 10 },
    { bookId: 106, title: "Java Basics", author: "Suraj", category: "Programming", copies: 6 },
    { bookId: 107, title: "Discrete Mathematics", author: "Lal Bahadur", category: "Mathematics", copies: 3 },
    { bookId: 108, title: "Linear Algebra", author: "Dev", category: "Mathematics", copies: 2 },
    { bookId: 109, title: "SQL Fundamentals", author: "Devashish", category: "Database", copies: 4 },
    { bookId: 110, title: "Network Security", author: "Hardik", category: "Networking", copies: 3 },
    { bookId: 111, title: "Calculus", author: "Pritam", category: "Mathematics", copies: 5 },
    { bookId: 112, title: "Advanced Database", author: "Yogesh", category: "Database", copies: 1 },
    { bookId: 113, title: "Python for Beginners", author: "Dev", category: "Programming", copies: 8 },
    { bookId: 114, title: "Operating Systems", author: "Deepak", category: "Computer Science", copies: 2 },
    { bookId: 115, title: "Machine Learning", author: "Modi ji", category: "Computer Science", copies: 5 }
];

for(let i=0; i<library.length;i++)
{
    console.log(library[i].bookId);
    console.log(library[i].title);
    console.log(library[i].author);
    console.log(library[i].category);
    console.log(library[i].copies);
    console.log("=================================================================================================")
}
//Task 2 counting of all library books
console.log("Total books:---");
let totalBooks=0;
for(let i=0; i<library.length;i++)
{
    totalBooks+=library[i].copies;
}
console.log(totalBooks);
console.log("=====================================================================================================")
//Task 3  Book with low availability
console.log("Books with low availability:---");
for(let i=0; i<library.length;i++)
    {
    if(library[i].copies<3)
    {
        console.log(library[i].title,library[i].copies);
    }
}
console.log("=====================================================================================================")
//Task 4
console.log("=====================================================================================================")
//Task 5 Category book wise count
for(let i=0; i<library.length;i++)
    {
    if(library[i].category === 'Programming')
    {
        console.log(library[i].category,library[i].copies);
    }
    else if(library[i].category === 'Database')
    {
        console.log(library[i].category,library[i].copies);
    }
    else if(library[i].category === 'Networking')
    {
        console.log(library[i].category,library[i].copies);
    }
    else {
        console.log(library[i].category,library[i].copies);
    }
}
console.log("=====================================================================================================")
//Task 6
let maxCopies=0;

console.log("=====================================================================================================")
//Task 7
for(let i=0; i<library.length;i++)
{
    let status;
    if(library[i].copies>=5)
    {
        status="Available";
    }
    else if(library[i].copies>3 && library[i].copies<5)
    {
        status="Limited";
    }
    else if(library[i].copies<=3)
    {
        status="Critical";
    }
    console.log(library[i].title, status);
}

console.log("=====================================================================================================")
//Task 8
console.log("Count book in each status:---");
let Available=0;
let Limited=0;
let Critical=0; 
for(let i=0; i<library.length;i++)
{
    if(library[i].copies>5)
    {
        Available++;
    }
    else if(library[i].copies>3 && library[i].copies<5)
    {
        Limited++;
    }
    else if(library[i].copies<3)
    {
        Critical++;
    }
}
console.log("Available:", Available);
console.log("Limited:", Limited);
console.log("Critical:", Critical);
console.log("=====================================================================================================")
//Task 9
console.log("Display Programming books:---");
for(let i=0; i<library.length;i++)
    {
    if(library[i].category === 'Programming')
    {
        console.log(library[i].title,library[i].author);
    }
}console.log("=====================================================================================================")
//Task 10
console.log("Display Library summary report:---")
console.log("---------------------LIBRARY REPORT-----------------------")
console.log("Total Books:", totalBooks);
console.log("Available Books:", Available);
console.log("Limited Books:", Limited);
console.log("Critical Books:", Critical);
