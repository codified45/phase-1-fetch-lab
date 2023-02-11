function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books") // the return here was needed so the Flatiron tests could see the fetch function. But it was not needed for the fetch/program to function.
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function fetchTotalBookPages() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderTotalPages(json));
}

function renderTotalPages(books) {
  let pageCount = 0;
  books.forEach(book => {
    pageCount += book.numberOfPages;
  });
  const h3 = document.createElement('h3');
  h3.textContent = `The total page count of the books in the series is: ${pageCount}`
  document.querySelector('main').appendChild(h3);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchTotalBookPages();
});

/*
Stretch deliverables:

1. The 5th book in the series:
    fetch('https://anapioficeandfire.com/api/books/5')

2. The 1031st character in the series:
    fetch('https://anapioficeandfire.com/api/characters/1031')

3. The total number of pages of all the books:
    fetchTotalBookPages() function above.  

*/