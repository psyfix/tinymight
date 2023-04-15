// JavaScript That Performs Search Bar Functionality.
const searchbar = document.getElementById('searchBar');

//Start an event if a key is pressed.
searchbar.addEventListener('keyup', (event) => {
  const searchKey = event.target.value;

  const details = document.querySelectorAll('.finding-section');

  //Loop through menus and if menu is closed then open.
  details.forEach(detail => {
    if (!detail.hasAttribute('open')) {
    detail.setAttribute('open', true);
  }
  })

  // If search bar is empty close all menus.
  if(searchKey==''){
    details.forEach(detail => {
      detail.removeAttribute('open');
    })
  }

  // Grab buttons and store in array.
  const buttons = document.querySelectorAll('.finding-button');
  //Loop through buttons and if searchKey matches a button then display.
  buttons.forEach(button => {
    button.style.display = (button.textContent.toLowerCase().indexOf(searchKey.toLowerCase()) > -1) ? 'block' : 'none';
  })
})