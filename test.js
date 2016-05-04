var normalize = require('./index.js')

var test = normalize([-20,-10,0,10,20])

var test2 = normalize([-20,-10,0,10,20], 0, 60)


var test3 = normalize([-20,-10,0,10,20], -1, 1)

var test4 = normalize([-20,-10,0,10,20], -60, 120)

var test5 = normalize([0,12,43,77,100], -4.1, 97)

var test6 = normalize([1, 2, 3, 4, 5], -1, 1)

var test7 = normalize([1.3, 2.3, 3.3, 4.3, 5.3], -7, -1)

console.log('normalize([-20,-10,0,10,20])                 =', test)
console.log('normalize([-20,-10,0,10,20], 0, 60)          =', test2)
console.log('normalize([-20,-10,0,10,20], -1, 1)          =', test3)
console.log('normalize([-20,-10,0,10,20], -60, 120)       =', test4)
console.log('normalize([0,12,43,77,100], -4.1, 97)        =', test5)
console.log('normalize([1, 2, 3, 4, 5], -1, 1)            =', test6)
console.log('normalize([1, 2, 3, 4, 5], -1, 1)            =', test6)
console.log('normalize([1.3, 2.3, 3.3, 4.3, 5.3], -7, -1) =', test7)
