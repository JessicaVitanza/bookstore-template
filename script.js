
const book1 = new Book('iliade', 'omero', 'garzanti', 'classici', 10.0, 20, 200, 2001, 10);

const book2 = new Book('odissea', 'omero', 'garzanti', 'classici', 10.0, 20, 200, 2001, 10);

const book3 = new Book('tutte le opere', 'omero', 'garzanti', 'classici', 20.0, 20, 400, 2001, 10);

let todoBook = [book1, book2, book3];

const bookTemplate = 
`
<div class="name-container">
           <span class="book-title">#TITLE</span>
           <span class="book-copies">#COPIES</span>
           <span class="book-author">#AUTHOR</span>
           <span class="book-type">#TYPE</span>
           <div class="tag-container">
           </div>
   </div>
   <button class="button">Vendi</button>
`

function displayBookWithTemplate(){
    const bookContainer =document.getElementById('book-container');
    bookContainer.innerHTML = '';

    for (let i = 0; i < todoBook.length; i++) {
        const book = todoBook[i];
    const div = document.createElement('div');
    const replaced = bookTemplate.replace('#TITLE', book.title)
                                 .replace('#COPIES', book.copies)
                                 .replace('#AUTHOR', book.author)
                                 .replace('#TYPE', book.type);

    div.innerHTML = replaced;
    bookContainer.appendChild(div);


            
        
    }

}


displayBookWithTemplate()
