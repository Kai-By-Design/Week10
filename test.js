//Create a variable and use the variable to access he element
let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {
  if(content.innerHTML == 'Goodbye') {
    content.innerHTML = 'Hello'
  } else {
    content.innerHTML = 'Goodbye'
  }
});


//access the eement directly
document.getElementById('remove').addEventListener('click', () => {
  let idToRemove = document.getElementById('remove-id').value;
  let elementToRemove = document.getElementById(idToRemove);
  elementToRemove.parentNode.removeChild(elementToRemove);
  document.getElementById('remove-id').value = '';
});

// document.getElementById('content').innerHTML = 'Goodbye';

let id = 0;

document.getElementById('add').addEventListener('click', () => {
  var parent = document.getElementById('paragraphs');
  var newElement = document.createElement('p');
  newElement.innerHTML = document.getElementById('new-text').value;
  newElement.setAttribute('id', id++)
  parent.appendChild(newElement);
  document.getElementById('new-text').value = '';
});