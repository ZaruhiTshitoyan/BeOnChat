const isFormValid = refs => {
  const isNotValid = refs.some(eachRef => eachRef.current.checkValidType());
  return isNotValid;
};
  
export default isFormValid;
