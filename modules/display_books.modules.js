class Displaysections {
  constructor() {
    this.form = document.querySelector('form');
    this.listOfBooks = document.querySelector('.container');
    this.list = document.getElementById('list');
    this.addNew = document.getElementById('addNew');
    this.contact = document.getElementById('contact');
    this.addNewSction = document.getElementById('add-book');
    this.listSection = document.getElementById('list-books');
    this.contactSection = document.getElementById('contact-container');
  }

  singlePage = () => {
    this.listSection.style.display = 'block';
    this.contactSection.style.display = 'none';

    this.list.addEventListener('click', () => {
      this.listSection.style.display = 'block';
      this.addNewSction.style.display = 'none';
      this.contactSection.style.display = 'none';
    });

    this.addNew.addEventListener('click', () => {
      this.listSection.style.display = 'none';
      this.addNewSction.style.display = 'block';
      this.contactSection.style.display = 'none';
    });

    this.contact.addEventListener('click', () => {
      this.listSection.style.display = 'none';
      this.addNewSction.style.display = 'none';
      this.contactSection.style.display = 'block';
    });
  };
}

const DisplaySections = new Displaysections();
export default DisplaySections;