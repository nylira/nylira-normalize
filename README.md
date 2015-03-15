# nylira-normalize

Normalize an array of numbers to the range [0..1], or [0..max]

# Install

    npm install nylira-normalize

# Use it
    
    var normalize = require('nylira-normalize')
    var numbers = [1,2,3,4,5]

    // normalize the numbers to the range[0..1]

    var normalizedNumbers = normalize(numbers)
    console.log(normalizedNumbers)
    //[0.3333333333333333, 0.5, 0.6666666666666666, 0.8333333333333334, 1]

    // normalize the numbers to the range[0..67]

    var normalizedToSixtySeven = normalize(numbers, 67)
    console.log(normalizedToSixtySeven)
    //[22.333333333333332, 33.5, 44.666666666666664, 55.833333333333336, 67]
