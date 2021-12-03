export const getDateString = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}\u00A0\u00A0${date.getHours()}:${date.getMinutes()}`;
};
