const bodyElement = document.querySelector('body');

const button = document.createElement('button');
button.dataset.getLocation = 'get-location';
button.setAttribute('data-new-id', 'second');
button.textContent = 'Get Location';

bodyElement.appendChild(button);

const getLocation = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (positionData) => {
        resolve(positionData);
      },
      (error) => {},
      options
    );
  });

  return promise;
};

const setMyTimer = (delay, data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Timer resolved');
    }, delay);
  });

  return promise;
};

const getLocationHandler = () => {
  getLocation().then((data) => console.log(data));

  setMyTimer(1000).then((message) => console.log(message));
  console.log('Getting position ...');
};

button.addEventListener('click', getLocationHandler);
