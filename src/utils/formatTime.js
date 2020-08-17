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
};