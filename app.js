let analyseBMI = (bmiValue) => {
    let bins = [18.5, 25, 30, 35, 40]
    let info = {
        0: { cat: "Underweight", risk: "Malnutrition" },
        1: { cat: "Normal weight", risk: "Low" },
        2: { cat: "Overweight", risk: "Enhanced" },
        3: { cat: "Moderately obese", risk: "Medium" },
        4: { cat: "Severely obese", risk: "High" },
        5: { cat: "Very severely obese", risk: "Very high" },
    }
    let currBin = 0;
    if (bins[0] < bmiValue < bins[1]) { currBin = 1 }
    else if (bins[1] < bmiValue < bins[2]) { currBin = 2 }
    else if (bins[2] < bmiValue < bins[3]) { currBin = 3 }
    else if (bins[3] < bmiValue < bins[4]) { currBin = 4 }
    else if (bmiValue < bins[5]) { currBin = 5 }
    return info[currBin]
}

let computeBMI = (data) => {
    if (!data.HeightCm) { throw new Error("Height not provided") }
    if (!data.WeightKg) { throw new Error("Weight not provided") }
    if (typeof data.HeightCm != "number") { throw new Error("Invalid height value") }
    if (typeof data.WeightKg != "number") { throw new Error("Invalid weight value") }
    if (data.HeightCm == 0) { throw new Error("Height cannot be 0") }
    let heightM = data.HeightCm / 100
    data.BMI = data.WeightKg / heightM
}

