const links = document.querySelectorAll('.links li');

const resetLinks = () => {
  links.forEach((li) => {
    li.classList.remove('active');
  });
};

const initVisitedMenu = () => {
  links.forEach((li) => {
    li.addEventListener('click', () => {
      resetLinks();
      li.classList.add('active');
    });
  });
};

export default initVisitedMenu;