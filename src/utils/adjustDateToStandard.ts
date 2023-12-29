const addHours = (date: Date): Date => {
  const result = new Date(date);

  result.setHours(result.getHours() + 5);

  return result;
};

export default addHours;
