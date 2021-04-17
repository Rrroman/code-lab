const bodyElement = document.querySelector('body');

const button = document.createElement('button');
button.dataset.getLocation = 'get-location';
button.setAttribute('data-new-id', 'second');
button.textContent = 'Get Location';

bodyElement.appendChild(button);

const getLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(
    (positionData) => console.log(positionData),
    (error) => console.log(error)
  );

  console.log('After getting location in code but prints before');
};

button.addEventListener('click', getLocationHandler);
