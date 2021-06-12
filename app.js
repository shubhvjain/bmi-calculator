const fs = require('fs');
let bmi = require('./bmi')

let main = () => {
    try {
        // read arguments from command line 
        const args = process.argv.slice(2)
        let fileName = args[0] || "input.json"
        // reading the file 
        fs.readFile(fileName, (err, fileContent) => {
            if (err) throw err;
            let data = JSON.parse(fileContent);
            if(!data.records){
                throw new Error("No records provided")
            }
            // calculating BMI 
            let newData = bmi.analyzeJSON(data.records)
            let overweightCount = bmi.overWeightCount(newData)
            let output = {
                overweightCount: overweightCount,
                records:newData
            }
            console.log(JSON.stringify(output, null, 2)) 
            return output
        });
    } catch (error) {
        console.log(error)
    }
}
main()