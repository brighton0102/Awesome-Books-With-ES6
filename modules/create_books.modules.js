const createBooks = () => {
    let books = '';
    console.log('martin')
    for (let i = 0; i < this.storeData.length; i += 1) {
      books += `
           <section id='books'>
           <article class='books-container'>
           ${this.storeData[i].title} by
            ${this.storeData[i].author}<br>
            <button class='remove-btn' onclick="bookManager.removeBook('${i}')">Remove</button>
            </article>
            </section>
          `;
    }
    return books;
}

export default {createBooks};