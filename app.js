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

let main = () => {
    let data = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 }, { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 }, { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }]
    data = analyzeJSON(data)
    console.log(JSON.stringify(data, null, 2))
}

main()
