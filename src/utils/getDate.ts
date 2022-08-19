export const getMinDate = (arr: string[]) => {
  return arr.reduce((acc, cur) => (acc < cur ? acc : cur));
};

export const getMaxDate = (arr: string[]) => {
  return arr.reduce((acc, cur) => (acc > cur ? acc : cur));
};

export const getYesterday = (date: string) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 1);
  const year = newDate.getFullYear();
  const month =
    newDate.getMonth() + 1 >= 10
      ? newDate.getMonth() + 1
      : `0${newDate.getMonth() + 1}`;
  const day =
    newDate.getDate() >= 10 ? newDate.getDate() : `0${newDate.getDate()}`;

  return `${year}-${month}-${day}`;
};
