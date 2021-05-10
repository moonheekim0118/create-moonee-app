"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractDescription = exports.extractMapValues = exports.arrayToMap = exports.validatePathName = void 0;

const validatePathName = pathName => {
  const re = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$|([<>:"\/\\|?*])|(\.|\s)$/gi;
  return re.test(pathName) && pathName !== ".";
};

exports.validatePathName = validatePathName;

const arrayToMap = target => {
  const map = new Map(target.map((value, index) => [index, value]));
  return map;
};

exports.arrayToMap = arrayToMap;

const extractMapValues = target => {
  return [...target.values()];
};

exports.extractMapValues = extractMapValues;

const extractDescription = target => {
  return target.map(option => option.description);
};

exports.extractDescription = extractDescription;