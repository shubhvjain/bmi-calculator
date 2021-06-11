let analyseBMI = (bmiValue) => {
    let bins = [
        { min: -Infinity, max: 18.4, cat: "Underweight", risk: "Malnutrition" },
        { min: 18.5, max: 24.9, cat: "Normal weight", risk: "Low" },
        { min: 25, max: 29.9, cat: "Overweight", risk: "Enhanced" },
        { min: 30, max: 34.9, cat: "Moderately obese", risk: "Medium" },
        { min: 35, max: 39.9, cat: "Severely obese", risk: "High" },
        { min: 40, max: Infinity, cat: "Very severely obese", risk: "Very high" }
    ]
    let currBin = bins.find(x => x.min <= bmiValue && bmiValue <= x.max)
    return currBin
}

let computeBMI = (data) => {
    if (!data.HeightCm) { throw new Error("Height not provided") }
    if (!data.WeightKg) { throw new Error("Weight not provided") }
    if (typeof data.HeightCm != "number") { throw new Error("Invalid height value") }
    if (typeof data.WeightKg != "number") { throw new Error("Invalid weight value") }
    if (data.HeightCm == 0) { throw new Error("Height cannot be 0") }
    let heightM = data.HeightCm / 100
    data.BMI = data.WeightKg / heightM
    let info = analyseBMI(data.BMI)
    data.BMICategory = info.cat
    data.HealthRisk = `${info.risk} risk`
    return data
}

let analyzeJSON = (userList) => {
    let userListResult = userList.map(computeBMI)
    return userListResult
}

module.exports = {
    analyseBMI: analyseBMI,
    computeBMI: computeBMI,
    analyzeJSON: analyzeJSON
}