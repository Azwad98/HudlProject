export const typeOrSet = (element, value) => {
  if (value === '') {
    element.invoke('val', '');
  } else {
    element.type(value);
  }
};
