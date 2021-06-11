const assert = require('assert').strict;
const bmi = require('../bmi')

describe("Input data validation for BMI calculation", function () {

  it("rejects if no height provided", function () {
    assert.throws(
      () => bmi.computeBMI({ "Gender": "Male", "WeightKg": 96 }),
      Error, 'Height not provided'
    )
  })

  it("rejects if no weight provided", function () {
    assert.throws(
      () => bmi.computeBMI({ "Gender": "Male", "HeightCm": 161 }),
      Error, 'Weight not provided'
    )
  })

  it("rejects if weight is not a number", function () {
    assert.throws(
      () => bmi.computeBMI({ "Gender": "Male", "HeightCm": 161, "WeightKg": "85kg" }),
      Error, 'Invalid weight value'
    )
  })

  it("rejects if height is not a number", function () {
    assert.throws(
      () => bmi.computeBMI({ "Gender": "Male", "HeightCm": "161cm", "WeightKg": "85kg" }),
      Error, 'Invalid height value'
    )
  })

  it("rejects if height is zero", function () {
    assert.throws(
      () => bmi.computeBMI({ "Gender": "Male", "HeightCm": 0, "WeightKg": "85kg" }),
      Error, 'Height cannot be 0'
    )
  })

})

// describe("BMI calculation correctness",function(){
// })