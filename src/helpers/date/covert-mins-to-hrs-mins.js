const covertMinsToHrsMins = (value) => {
  let hours = Math.floor(value / 60);
  let minutes = value % 60;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}h ${minutes}m`;
};

export default covertMinsToHrsMins;
