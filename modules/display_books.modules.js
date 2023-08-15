const displayBooks = () => {
  this.listOfBooks.innerHTML = `
        <p>
          ${this.createBooks()}
        </p>
      `;
}
  
export default {displayBooks}