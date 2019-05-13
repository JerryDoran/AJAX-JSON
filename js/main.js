let counter = 1;
let animalContainer = document.getElementById('animalInfo');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
  let ourRequest = new XMLHttpRequest();

  ourRequest.open(
    'GET',
    'https://learnwebcode.github.io/json-example/animals-' + counter + '.json'
  );

  ourRequest.onload = () => {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let data = JSON.parse(ourRequest.responseText);
      renderHTML(data);
    } else {
      console.log('We connected to the server but it returned an error');
    }
  };

  ourRequest.oneerror = () => {
    console.log('Connection error');
  };

  ourRequest.send();

  counter++;

  if (counter > 3) {
    button.classList.add('hide-me');
  }
});

function renderHTML(dataArray) {
  let htmlString = '';

  dataArray.forEach(element => {
    htmlString +=
      '<p>' + element.name + ' is a ' + element.species + ' that likes to eat ';

    htmlString += element.foods.likes;

    htmlString += ' and dislikes ';

    htmlString += element.foods.dislikes;

    htmlString += '.</p>';
  });

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
// .replace(/,/g, ', ');
