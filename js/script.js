const bodyElement = document.querySelector('body');

const button = document.createElement('button');
button.dataset.getLocation = 'get-location';
button.setAttribute('data-new-id', 'second');
button.textContent = 'Get Location';

bodyElement.appendChild(button);

const getLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(
    (positionData) => {
      setTimeout(() => {
        console.log('After setTimeout will be last');
      }, 1000);
      console.log(positionData);
    },
    (error) => console.log(error)
  );

  setTimeout(() => console.log('Obvious will be second'), 0);

  console.log('After getting location in code but prints before');
};

button.addEventListener('click', getLocationHandler);
