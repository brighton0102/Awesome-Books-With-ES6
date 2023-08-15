import displayBooks from "./display_books.modules.js";
import updateData from "./update_data.modules.js";

const addNewData = (store) => {
    console.log("add new data")
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const book = {
      title: title.value,
      author: author.value,
    };
    store.push(book);
    updateData();
    displayBooks();
    title.value = '';
    author.value = '';
  }
  
export default {addNewData};