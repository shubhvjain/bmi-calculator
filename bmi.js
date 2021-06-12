let analyseBMI = (bmiValue) => {
  let bins = [
    { min: -Infinity, max: 18.5, cat: "Underweight", risk: "Malnutrition" },
    { min: 18.5, max: 25, cat: "Normal weight", risk: "Low" },
    { min: 25, max: 30, cat: "Overweight", risk: "Enhanced" },
    { min: 30, max: 35, cat: "Moderately obese", risk: "Medium" },
    { min: 35, max: 40, cat: "Severely obese", risk: "High" },
    { min: 40, max: Infinity, cat: "Very severely obese", risk: "Very high" }
  ];

  let currBin = bins.find((x) => x.min <= bmiValue && bmiValue < x.max);
  return { cat: currBin.cat, risk: currBin.risk };
};

let computeBMI = (data) => {
  if (!data.HeightCm) {
    throw new Error("Height not provided");
  }
  if (!data.WeightKg) {
    throw new Error("Weight not provided");
  }
  if (isNaN(data.HeightCm)) {
    throw new Error("Invalid height value");
  }
  if (isNaN(data.WeightKg)) {
    throw new Error("Invalid weight value");
  }
  if (data.HeightCm == 0) {
    throw new Error("Height cannot be 0");
  }

  let heightM2 = (data.HeightCm * data.HeightCm) / 10000;
  data.BMI = +(data.WeightKg / heightM2).toFixed(2);
  let info = analyseBMI(data.BMI);
  data.BMICategory = info.cat;
  data.HealthRisk = `${info.risk} risk`;
  return data;
};

let analyzeJSON = (userList) => {
  let userListResult = userList.map(computeBMI);
  return userListResult;
};

module.exports = {
  analyseBMI: analyseBMI,
  computeBMI: computeBMI,
  analyzeJSON: analyzeJSON,
};
