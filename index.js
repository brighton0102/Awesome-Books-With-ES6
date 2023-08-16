import DisplaySections from './modules/display_books.modules.js';
import bookManager from './modules/book_manager.modules.js';
import initVisitedMenu from './modules/visited_menu.modules.js';
import timeDisplayer from './modules/dateModule.js';

class App {
  constructor() {
    this.form = document.querySelector('form');
    this.init();
  }

  init = () => {
    initVisitedMenu();
    bookManager.displayBooks();
    DisplaySections.singlePage();
    this.setupFormEventListeners();
    timeDisplayer.updateTime();
  }

  setupFormEventListeners = () => {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      bookManager.addNewData();
    });
  }
}

const app = new App();
export default app;

// export {DisplaySections, bookManager, initVisitedMenu}
