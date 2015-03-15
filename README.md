# nylira-normalize

Normalize an array of numbers to the range [0..1], or [0..max]

# Install

    npm install nylira-normalize

# Use it
    
    var normalize = require('nylira-normalize')
    var numbers = [-20, -10, 0, 10, 20]

    // normalize the numbers to [0..1]
    normalize(numbers)

    // output:
    // [0.2, 0.4, 0.6, 0.8, 1]

    // normalize the numbers to [0..60]
    normalize(numbers, 60)

    // output:
    // [0, 15, 30, 45, 60]
