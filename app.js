let bmi = require('./bmi')

let main = () => {
    try {
        let data = [{ "Gender": "Male", "HeightCm": 123, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 }, { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 }, { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }]
        let newData = bmi.analyzeJSON(data)
        console.log(JSON.stringify(newData, null, 2))
    } catch (error) {
        console.log(error)
    }
}
main()