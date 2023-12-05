export const isURL = (str: string) => {
  const pattern = /^(?:\w+:)?\/\/(\S+)$/;
  return pattern.test(str);
};
