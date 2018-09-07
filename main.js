const csvtojson = require('csvtojson')
const fs = require('fs')

const convert = (file='customer-data.csv') => {

    fname = file.slice(0, -4) + '.json'
    
    csvtojson()
    .fromFile(file)
    .then((jsonObj) => {

        fs.writeFile(fname, JSON.stringify(jsonObj),(err) => {
            if (err) throw err;
            console.log('JSON saved to ' + fname)
        
        })
    
    })

}

convert(process.argv[2])