// Printing library books details
const library = [
    { bookId: 101, title: "Learn English with Ram", author: "ram Chander", category: "English language", copies: 5 },
    { bookId: 102, title: "Computer Science", author: "Monu", category: "Database", copies: 2 },
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
    console.log("bookId:",library[i].bookId);
    console.log("title:",library[i].title);
    console.log("author:",library[i].author);
    console.log("category:",library[i].category);
    console.log("copies:",library[i].copies);
    console.log("=================================================================================================")
}
//Task 2 counting of all library books
console.log("Total books:---");
let totalbooks = () =>library.length;
console.log("Total Books:",totalbooks());
console.log("=====================================================================================================")
//Task 3  Book with low availability
console.log("Books with low availability:---");
for(let i=0; i<library.length;i++)
    {
    if(library[i].copies<3)
    {
        console.log(library[i].title,"-",library[i].copies);
    }
}
console.log("=====================================================================================================")
//Task 4
console.log("Task 4 Search with book id:---");
let bookid=109;
let searchBookById = (id) => {
    for(let i=0; i<library.length;i++)
    {
        if(library[i].bookId === id)
        {
            console.log("Book Found");
            console.log("Title:",library[i].title);
            console.log("Author:",library[i].author);
            break;
        }
        else if(i===library.length-1){
               console.log("Book Not Found");
        }
        
    }
}
searchBookById(bookid);
console.log("=====================================================================================================")
//Task 5 Category book wise count
console.log("task 5:---");
let a=0,b=0,c=0,d=0,e=0;
for(let i=0; i<library.length;i++)
    {
    if(library[i].category === 'Programming')
    {
        a+=library[i].copies;
    }
    else if(library[i].category === 'Database')
    {
        b+=library[i].copies;
    }
    else if(library[i].category === 'Networking')
    {
        c+=library[i].copies;
    }
    else if(library[i].category === 'Computer Science'){
        d+=library[i].copies;
    }
    else if(library[i].category === 'Mathematics'){
        e+=library[i].copies;
    }
}
console.log("Programming:", a);
console.log("Database:", b);
console.log("Networking:", c);
console.log("Computer Science:", d);
console.log("Mathematics:", e); 
console.log("=====================================================================================================")
//Task 6
console.log("Task 6:---");
let maxCopies=() => {
let max=library[0].copies;
let i;
    for(i=0; i<totalbooks();i++)
    {
        if(library[i].copies>max)
        {
            max=library[i].copies;
        }
    }
    return max;
}
for(let i=0; i<library.length;i++){
    if(library[i].copies===maxCopies())
console.log(library[i].title,"-",maxCopies(),"copies");}
console.log("=====================================================================================================")
//Task 7
console.log("Task 7:---");
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
    console.log(library[i].title,"-", status);
}

console.log("=====================================================================================================")
//Task 8
console.log("Task 8: Count book in each status:---");
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
console.log("Task 9:Display Programming books:---");
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
console.log("Total Books:", totalbooks());
console.log("Available Books:", Available);
console.log("Limited Books:", Limited);
console.log("Critical Books:", Critical);
console.log("Highest Copies Available:",maxCopies());
