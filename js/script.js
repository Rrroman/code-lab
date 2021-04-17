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
      (error) => {
        reject(error);
      },
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
  let positionData;
  getLocation()
    .then((position) => {
      positionData = position;
      return setMyTimer(1000);
    })
    .catch((error) => {
      console.log(error);
      return 'Backup data';
    })
    .then((data) => {
      console.log(data, positionData);
    });

  setMyTimer(1000).then(() => console.log('Timer done!'));
  console.log('Getting position ...');
};

button.addEventListener('click', getLocationHandler);
