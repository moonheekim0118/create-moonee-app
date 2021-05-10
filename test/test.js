var _functions = require("../dist/utils");
var _datas = require("./data");
var should = require("chai").should();
var cliOptions = require("../dist/options").default;

describe("Validate PathName", function () {
  const tests = [
    { args: " ", expected: true },
    { args: "*", expected: true },
    { args: "<>", expected: true },
    { args: "?", expected: true },
    { args: ":", expected: true },
    { args: "hi hi", expected: false },
    { args: ".", expected: false },
    { args: "123", expected: false },
    { args: "!!", expected: false },
    { args: "한글", expected: false },
  ];
  tests.forEach(({ args, expected }) => {
    it(`${args}should return ${expected}`, function () {
      const res = _functions.validatePathName(args);
      res.should.equal(expected);
    });
  });
});

describe("Map Related Functions", () => {
  const map = _functions.arrayToMap(cliOptions);
  const valuesArray = _functions.extractMapValues(map);
  const descriptionOnly = _functions.extractDescription(valuesArray);

  it("should be correct Map", function () {
    const typeCheck = map instanceof Map;
    typeCheck.should.equal(true);
  });

  it("shoud be correct Array", function () {
    valuesArray.should.deep.equal(_datas.values);
  });
  it("should be correct description array", function () {
    descriptionOnly.should.deep.equal(_datas.descriptions);
  });
});
