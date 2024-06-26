/*
1.Dom Selection
2.Event Listner
3.Basic Validation
4.Creating Elements
5.Append
*/

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");
 
btn.addEventListener('click',function(event){
    event.preventDefault();
    
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Please fill up the form");
    }
    else{
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
})

