import createBooks from "./modules/create_books.modules.js";
import displayBooks from "./modules/display_books.modules.js";
import addNewDta from "./modules/add_new_data.modules.js";
import updateData from "./modules/update_data.modules.js";


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
  
      this.form.addEventListener('submit', (e) => {
          e.preventDefault();
          console.log(e)
        addNewData(this.storeData);
      });
  
        this.list.addEventListener('click', () => {
          console.log("cash")
        this.listSection.style.display = 'block';
        this.contactSection.style.display = 'none';
        this.addNewSction.style.display = 'none';
      });
  
      this.contact.addEventListener('click', () => {
        this.contactSection.style.display = 'block';
        this.addNewSction.style.display = 'none';
        this.listSection.style.display = 'none';
      });
  
      this.addNew.addEventListener('click', () => {
        this.addNewSction.style.display = 'block';
        this.contactSection.style.display = 'none';
        this.listSection.style.display = 'none';
      });
    }
  
    removeBook(i) {
      this.storeData.splice(i, 1);
      updateData();
      displayBooks();
    }
}

const bookManager = new BookManager();

export {createBooks, displayBooks, addNewDta, updateData}
  