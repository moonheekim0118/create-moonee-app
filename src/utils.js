export const validatePathName = (pathName) => {
  const re = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$|([<>:"\/\\|?*])|(\.|\s)$/gi;
  return re.test(pathName) && pathName !== ".";
};

export const arrayToMap = (target) => {
  const map = new Map(target.map((value, index) => [index, value]));
  return map;
};

export const extractMapValues = (target) => {
  return [...target.values()];
};

export const extractDescription = (target) => {
  return target.map((option) => option.description);
};
