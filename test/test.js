const assert = require("assert").strict;
const bmi = require("../bmi");

describe("Input data validation for BMI calculation", function () {
  it("rejects if no height provided", function () {
    assert.throws(
      () => bmi.computeBMI({ Gender: "Male", WeightKg: 96 }),
      Error,
      "Height not provided"
    );
  });

  it("rejects if no weight provided", function () {
    assert.throws(
      () => bmi.computeBMI({ Gender: "Male", HeightCm: 161 }),
      Error,
      "Weight not provided"
    );
  });

  it("rejects if weight is not a number", function () {
    assert.throws(
      () => bmi.computeBMI({ Gender: "Male", HeightCm: 161, WeightKg: "85kg" }),
      Error,
      "Invalid weight value"
    );
  });

  it("rejects if height is not a number", function () {
    assert.throws(
      () =>
        bmi.computeBMI({ Gender: "Male", HeightCm: "161cm", WeightKg: "85kg" }),
      Error,
      "Invalid height value"
    );
  });

  it("rejects if height is zero", function () {
    assert.throws(
      () => bmi.computeBMI({ Gender: "Male", HeightCm: 0, WeightKg: "85kg" }),
      Error,
      "Height cannot be 0"
    );
  });
});

describe("BMI calculation correctness", function () {
  let data = { HeightCm: 175, WeightKg: 75 };
  let expData = {
    HeightCm: 175,
    WeightKg: 75,
    BMI: 24.49,
    BMICategory: "Normal weight",
    HealthRisk: "Low risk",
  };
  let bmiData = bmi.computeBMI(data);
  it("Correct BMI value", function () {
    assert.strictEqual(bmiData.BMI, expData.BMI);
  });
  it("Correct BMI Category", function () {
    assert.strictEqual(bmiData.BMICategory, expData.BMICategory);
  });
  it("Correct Health risk indicator", function () {
    assert.strictEqual(bmiData.HealthRisk, expData.HealthRisk);
  });
});

describe("BMI analysis calculation correctness", function () {
  let bmiValues = [
    { bmi: 18.49, expected: { cat: "Underweight", risk: "Malnutrition" } },
    { bmi: 18.5, expected: { cat: "Normal weight", risk: "Low" } },
    { bmi: 24.99, expected: { cat: "Normal weight", risk: "Low" } },
    { bmi: 25, expected: { cat: "Overweight", risk: "Enhanced" } },
    { bmi: 29.99, expected: { cat: "Overweight", risk: "Enhanced" } },
    { bmi: 30.1, expected: { cat: "Moderately obese", risk: "Medium" } },
    { bmi: 34.99, expected: { cat: "Moderately obese", risk: "Medium" } },
    { bmi: 35, expected: { cat: "Severely obese", risk: "High" } },
    { bmi: 39.99, expected: { cat: "Severely obese", risk: "High" } },
    { bmi: 40, expected: { cat: "Very severely obese", risk: "Very high" } },
    { bmi: 400, expected: { cat: "Very severely obese", risk: "Very high" } },
  ];
  bmiValues.forEach((item) => {
    let bmiAnalysis = bmi.analyseBMI(item.bmi);
    it(`Correct BMI Category and health risk indicator for BMI = ${item.bmi} `, function () {
      assert.deepStrictEqual(bmiAnalysis, item.expected);
    });
  });
});
