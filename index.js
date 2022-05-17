function removeMain() {
  let main = document.getElementById('main')
  main.remove();
}

removeMain()

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.setAttribute('h1', 'victory');

function makingAChampion(userInput) {
  newHeader.textContent = `${userInput} is the champion`
}

makingAChampion()