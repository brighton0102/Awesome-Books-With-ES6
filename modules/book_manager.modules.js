class BookManager {
  constructor() {
    this.storeKey = 'Added Books';
    this.storeData = JSON.parse(localStorage.getItem(this.storeKey)) || [];
    this.form = document.querySelector('form');
    this.listOfBooks = document.querySelector('.container');
    this.list = document.getElementById('list');
    this.addNew = document.getElementById('addNew');
    this.contact = document.getElementById('contact');
    this.addNewSction = document.getElementById('add-book');
    this.listSection = document.getElementById('list-books');
    this.contactSection = document.getElementById('contact-container');
  }

    updateData = () => {
      localStorage.setItem(this.storeKey, JSON.stringify(this.storeData));
    }

    createBooks = () => {
      let books = '';
      for (let i = 0; i < this.storeData.length; i += 1) {
        books += `
           <section id='books'>
           <article class='books-container'>
           ${this.storeData[i].title} by
            ${this.storeData[i].author}<br>
            <button class='remove-btn' data-index='${i}'>Remove</button>
            </article>
            </section>
          `;
      }
      return books;
    }

    displayBooks = () => {
      this.listOfBooks.innerHTML = `
        <p>
          ${this.createBooks()}
        </p>
      `;

      this.listOfBooks.querySelectorAll('.remove-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
          const index = e.target.getAttribute('data-index');
          this.removeBook(index);
        });
      });
    }

    addNewData = () => {
      const title = document.querySelector('.title');
      const author = document.querySelector('.author');
      const book = {
        title: title.value,
        author: author.value,
      };
      this.storeData.push(book);
      this.updateData();
      this.displayBooks();
      title.value = '';
      author.value = '';
    }

    removeBook = (i) => {
      this.storeData.splice(i, 1);
      this.updateData();
      this.displayBooks();
    }
}

const bookManager = new BookManager();
export default bookManager;