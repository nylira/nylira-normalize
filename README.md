# nylira-normalize

Normalize an array of numbers to the range [min..max]

## Install

    npm install nylira-normalize

# Use it
    
    var normalize = require('nylira-normalize')
    var numbers = [-20, -10, 0, 10, 20]

    // normalize the numbers to [0..1]
    normalize(numbers)

    // output:
    // [0.2, 0.4, 0.6, 0.8, 1]

    // normalize the numbers to [0..60]
    normalize(numbers, 0, 60)

    // output:
    // [0, 15, 30, 45, 60]

# Test

    npm test

    // console output:
    normalize([-20,-10,0,10,20])                 = [ 0, 0.25, 0.5, 0.75, 1 ]
    normalize([-20,-10,0,10,20], 0, 60)          = [ 0, 15, 30, 45, 60 ]
    normalize([-20,-10,0,10,20], -1, 1)          = [ -1, -0.5, 0, 0.5, 1 ]
    normalize([-20,-10,0,10,20], -60, 120)       = [ -60, -15, 30, 75, 120 ]
    normalize([0,12,43,77,100], -4.1, 97)        = [ -4.1, 8.032, 39.373, 73.747, 97 ]
    normalize([1, 2, 3, 4, 5], -1, 1)            = [ -1, -0.5, 0, 0.5, 1 ]
    normalize([1, 2, 3, 4, 5], -1, 1)            = [ -1, -0.5, 0, 0.5, 1 ]
    normalize([1.3, 2.3, 3.3, 4.3, 5.3], -7, -1) = [ -7, -5.5, -4, -2.5, -1 ]

# License

MIT
