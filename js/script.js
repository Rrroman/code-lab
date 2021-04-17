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
        resolve(setMyTimer(1000, positionData));
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
      resolve({ text: 'My Promise Text', data: data });
    }, delay);
  });

  return promise;
};

const getLocationHandler = () => {
  getLocation().then((data) => console.log(data.text, data.data));

  setMyTimer(1000).then(() => console.log('i am first now second'));
};

button.addEventListener('click', getLocationHandler);
