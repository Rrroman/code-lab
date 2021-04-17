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

const getLocationHandler = async () => {
  let positionData;
  let timerData;
  try {
    positionData = await getLocation();
    timerData = await setMyTimer(1000);
  } catch (error) {
    console.log(error);
    positionData = 'Please try later again';
    timerData = 'Backup data [], {} ...';
  }

  console.log(positionData, timerData);

  // setMyTimer(1000).then(() => console.log('Timer done!'));
  // console.log('Getting position ...');
};

button.addEventListener('click', getLocationHandler);
