/* eslint-disable import/prefer-default-export */
export const capitalize = (str = '') => {
  if (!str) return '';

  return str.substring(0, 1).toUpperCase() + str.substring(1);
};
