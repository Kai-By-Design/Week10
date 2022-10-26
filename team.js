class Memeber {
  constructor(name, posiion) {
    this.name = name;
    this.position = position;
  }
}

class Team {
  constructor(id, name) {
    this.id = id;
    this. name = name;
    this.members = [];
  }

  addMember (member) {
    this.members.push(member);
  }

  deleteMember(member) {
    let index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }
}

let teams = [];
let teamID = 0;

onClick('new-team', () => {
  teams.push(new Team(teamID++, getValue('new-team-name')));
  drawDOM();
})

// used to reduce the need to write the lines contained within the function.
// if the function is called the element is interacted with based on the
//action/function that is passed in as the action parameter.
function onClick(id, action) {
  let element = document.getElementById(id);
  element.addEventListener('click', action);
  return element;
}

function getValue(id) {
  console.log(id); //log 4
  // add items to the teams id div
  return document.getElementById(id).value;
};

// function getValue(id) {
//   console.log(id); //log 4
//   // add items to the teams id div
//   return document.getElementById(id).value;
//   // clear the div/DOM
//   clearElement(teamDiv);
//   // iterate over the teams array and create a table for each team
//   let table = createTeamTable(team);
//   let title = document.createElement('h2');
//   title.innerHTML = team.name;
//   // create a 'delete button that will delete each team
//   title.appendChild(title);
//   teamDiv.appendChild(table);
//   // add all of the members to that team
//   for (member of team.members) {
//     createMemberRow(team, table, member);
//   };
// }

function drawDOM() {
  let teamDiv = document.getElementById('teams');
  clearElement(teamDiv);
  for (team of teams) {
    let table = createTeamTable(team);
    let title = document.createElement('h2');
    title.innerHTML = team.name;
    title.appendChild(createDeleteTeamButton(team));
    teamDiv.appendChild(table);
    // add all of the members to that team
    for (member of team.members) {
      createMemberRow(team, table, member);
    };
  };
}

function createMemberRow (team, table, member) {
  let row = table.insertRow(2);
  row.insertCell(0).innerHTML = member.name;
  row.insertCell(1).innerHTML = member.position;
  // Delete Row button
  let actions = row.insertCell(2);
  actions.appendChild(createDeleteRowButton(team, member));
}


//create createDeleteRowButton
function createDeleteRowButton(team, member) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.innerHTML = 'Delete';
  btn.onclick = () => {
    let index = team.members.indexOf(member);
    team.members.splice(index, 1);
    drawDOM();
  };
  return btn;
}

function createDeleteTeamButton(team) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.innerHTML = 'Delete Team';
  btn.onclick = () => {
    let index = teams.indexOf(team);
    teams.splice(index, 1);
    drawDOM();
  };
  return btn;
}

function createNewMemberButton(team) {
  console.log(team);
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.innerHTML = 'Create';
  btn.onclick = () => {
    team.members.push(new Memeber(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`)));
    drawDOM();
  };
  return btn;
}

function createTeamTable(team) {
  // console.log(team); //log 3
  let table = document.createElement('table');
  table.setAttribute('class', 'table table-dark table-striped');
  let row = table.insertRow(0);
  let nameColumn = document.createElement('th');
  let positionColumn = document.createElement('th');
  nameColumn.innerHTML = 'Name';
  positionColumn.innerHTML = 'Position';
  row.appendChild(nameColumn);
  row.appendChild(positionColumn);
  let formRow = table.insertRow(1);
  let nameTh = document.createElement('th');
  let positionTh = document.createElement('th');
  let createTh = document.createElement('th');
  let nameInput = document.createElement('input');
  nameInput.setAttribute('id', `name-input-${team.id}`);
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'form-control');
  let positionInput = document.createElement('input');
  positionInput.setAttribute('id', `position-input-${team.id}`);
  positionInput.setAttribute('type', 'text');
  positionInput.setAttribute('class', 'form-control');
  let newMemberButton = createNewMemberButton(team);
  nameTh.appendChild(nameInput);
  positionTh.appendChild(positionInput);
  formRow.appendChild(nameTh);
  formRow.appendChild(positionTh);
  formRow.appendChild(createTh);
  // console.log(table); //log 1
  // console.log(team); //log 2
  return table;
}


function clearElement(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  };
}


