// inserts players into selection tab
let count = 0;
function insertIntoSelection(playerName) {
  // checks to see if 5 players are already selected.
  // if 5 selected, then it returns false, and it shows alert
  console.log(document.getElementById('players-list').childElementCount);
  if (document.getElementById('players-list').childElementCount > 4) {
    alert('You Can\'t Add More Players');
    return false;
  }

  count++;

  const element = document.createElement('li');
  element.innerHTML = count + '. ' + playerName;

  document.getElementById('players-list').appendChild(element);
}

// disable button and change button color
function disableButton(btnId) {
  document.getElementById(btnId).disabled = true;
  document.getElementById(btnId).style.backgroundColor = 'red';
}

// retrieving players
document
.getElementById('player-one')
.addEventListener('click', function (event) {
  const flag = insertIntoSelection(event.target.value);

  if (flag === false) {
    return;
  }
  disableButton('player-one');
});
document
.getElementById('player-two')
.addEventListener('click', function (event) {
  const flag = insertIntoSelection(event.target.value);

  if (flag === false) {
    return;
  }
  disableButton('player-two');
});
document
.getElementById('player-three')
.addEventListener('click', function (event) {
  const flag = insertIntoSelection(event.target.value);

  if (flag === false) {
    return;
  }
  disableButton('player-three');
});
document
.getElementById('player-four')
.addEventListener('click', function (event) {
  const flag = insertIntoSelection(event.target.value);

  if (flag === false) {
    return;
  }
  disableButton('player-four');
});
document
.getElementById('player-five')
.addEventListener('click', function (event) {
  const flag = insertIntoSelection(event.target.value);

  if (flag === false) {
    return;
  }
  disableButton('player-five');
});
document
.getElementById('player-six')
.addEventListener('click', function (event) {
  const flag = insertIntoSelection(event.target.value);

  if (flag === false) {
    return;
  }
  disableButton('player-six-btn');
});

// inserts data into text field
function insertIntoTextField(inputId, data) {
  document.getElementById(inputId).innerText = data;
}

// retrieves data from input field
function getDataFromInputField(inputId) {
  return parseInt(document.getElementById(inputId).value);
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  // retrieves data for each player
  const costPerPlayer = getDataFromInputField('per-player-field');

  // enables dollar symbol
  document.getElementById('player-expense').style.display = 'inline';

  // inserts the total cost for players
  insertIntoTextField('player-span-expense', costPerPlayer * count);
});

document
  .getElementById('calculate-total')
  .addEventListener('click', function () {
    const costPerPlayer = parseInt(
      document.getElementById('player-span-expense').innerText
    );
    const managerCost = getDataFromInputField('manager-costs');
    const coachCost = getDataFromInputField('coach-costs');

    const totalCost = costPerPlayer + managerCost + coachCost;

    document.getElementById('total-expense').style.display = 'inline';

    insertIntoTextField('total-span-expense', totalCost);
  });