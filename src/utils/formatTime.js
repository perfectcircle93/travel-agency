export const formatTime = (countDown) => {
  if (countDown == undefined) {
    return null;
  }

  else if (isNaN(countDown)) {
    return null;
  }

  else if (countDown < 0) {
    return null;
  }

  else {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    seconds = (seconds + Math.floor(countDown % 60) + '').padStart(2, '0');
    console.log(seconds);

    minutes = (minutes + Math.floor((countDown / 60) % 60) + '').padStart(2, '0');
    console.log(minutes);

    hours = (hours + Math.floor(countDown / 3600) + '').padStart(2, '0');
    console.log(hours);

    return hours + ':' + minutes + ':' + seconds;
  }
};