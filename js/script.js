const bodyElement = document.querySelector('body');

const button = document.createElement('button');
button.dataset.getLocation = 'get-location';
button.setAttribute('data-new-id', 'second');
button.textContent = 'Get Location';

bodyElement.appendChild(button);

const setMyTimer = (delay, data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: 'My Promise Text', accuracy: data?.coords?.accuracy });
    }, delay);
  });

  return promise;
};

const getLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(
    (positionData) => {
      setMyTimer(1000, positionData).then((data) =>
        console.log(
          'After setTimeout will be last',
          data.message,
          data.accuracy,
          positionData
        )
      );
    },
    (error) => console.log(error)
  );

  setTimeout(() => console.log('Obvious will be second'), 0);

  console.log('After getting location in code but prints before');
};

button.addEventListener('click', getLocationHandler);
