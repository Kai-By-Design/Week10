let id = 0;
let postList = [];

document.getElementById('add').addEventListener('click', () => {
  let createDate = new Date();
  let table = document.getElementById('list');
  let row = table.insertRow(1);
  row.setAttribute('id', `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById('new-task').value;
  row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
  row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;

  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById('new-task').value = '';

  let actions2 = row.insertCell(4);
  actions2.appendChild(createEditButton(id));
  document.getElementById('new-task').value = '';
});

function createDeleteButton(id) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.id = id;
  btn.innerHTML = 'Delete';
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
};

function createEditButton(id) {
  let btn2 = document.createElement('button');
  btn2.className = 'btn btn-secondary';
  btn2.id = id;
  btn2.innerHTML = 'Edit';
  btn2.onclick = () => {
    console.log(`Edit row with id: item-${id}`);
    let elementToEdit = document.getElementById(`item-${id}`);
    elementToEdit.parentNode.editChild(elementToEdit);
  };
  return btn2;
};