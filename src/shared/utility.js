export const updateObject = (oldObject, updatedPropertiesObject) => {
  return {
    ...oldObject,
    ...updatedPropertiesObject,
  };
};

export const datePostProcessor = (date) => {
  return date.slice(0, 10);
};
