export const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearFromLocalStorage = key => {
  localStorage.removeItem(key);
};
