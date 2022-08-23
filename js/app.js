let count = 0;
function insertSelection(playerNames) {

  console.log(document.getElementById('players-list').childElementCount);
  if (document.getElementById('players-list').childElementCount > 4) {
    alert('You Can\'t Add More Players');
    return false;
  }
  count++;
  const element = document.createElement('li');
  element.innerHTML = count + '. ' + playerNames;

  document.getElementById('players-list').appendChild(element);
}


// button disable and change button color when clicked Button
function disableBtn(playerBtnId) {
  document.getElementById(playerBtnId).disabled = true;
  document.getElementById(playerBtnId).style.backgroundColor = 'dark';
}


// Calculate Total Ammount
document.getElementById('calculate-total').addEventListener('click', function () {
  const costPerPlayer = parseInt(
  document.getElementById('player-span-expense').innerText);
  const managerCosts = getDataFromInputField('manager-costs');
  const coachCosts = getDataFromInputField('coach-costs');

  const totalCosts = costPerPlayer + managerCosts + coachCosts;

  insertDataIntoTextField('total-span-expense', totalCosts);
});

// when click button then showing players name to Selected Field
document.getElementById('player-one').addEventListener('click', function (event) {
  const player = insertSelection(event.target.value);

  if (player === false) {
    return;
  }
  disableBtn('player-one');
});

document.getElementById('player-two').addEventListener('click', function (event) {
  const player = insertSelection(event.target.value);

  if (player === false) {
    return;
  }
  disableBtn('player-two');
});

document.getElementById('player-three').addEventListener('click', function (event) {
  const player = insertSelection(event.target.value);

  if (player === false) {
    return;
  }
  disableBtn('player-three');
});

document.getElementById('player-four').addEventListener('click', function (event) {
  const player = insertSelection(event.target.value);

  if (player === false) {
    return;
  }
  disableBtn('player-four');
});

document.getElementById('player-five').addEventListener('click', function (event) {
  const player = insertSelection(event.target.value);

  if (player === false) {
    return;
  }
  disableBtn('player-five');
});

document.getElementById('player-six').addEventListener('click', function (event) {
  const player = insertSelection(event.target.value);

  if (player === false) {
    return;
  }
  disableBtn('player-six');
});



// Get data into the text field
function insertDataIntoTextField(inputId, data) {
  document.getElementById(inputId).innerText = data;
}

// Receiving data from the input field
function getDataFromInputField(inputId) {
  return parseInt(document.getElementById(inputId).value);
}


document.getElementById('calculate-btn').addEventListener('click', function () {
  // Receiving data for each player
  const costPerPlayer = getDataFromInputField('per-player-field');

  // inserts the total cost for players
  insertDataIntoTextField('player-span-expense', costPerPlayer * count);
});