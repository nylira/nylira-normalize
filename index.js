(function(){
'use strict'

function arrayMax(numbers) {
  var max = -Infinity
  for(var i=0; i < numbers.length; i++) {
    if(numbers[i] > max) {
      max = numbers[i]
    }
  }
  return max
}
function arrayMin(numbers) {
  var min = Infinity
  for(var i=0; i < numbers.length; i++) {
    if(numbers[i] < min) {
      min = numbers[i]
    }
  }
  return min
}

// given an array of negative and positive numbers, this function normalizes
// all the values between 0.0 and outputMax
function normalize(values, outputMax) {
  // set outputMax to 1 if not defined
  outputMax = outputMax !== undefined ? outputMax : 1

  var output = []
  var max = arrayMax(values)
  var min = arrayMin(values)

  for(var i=0; i < values.length; i++) {
    if(min < 0) {
      output[i] = (values[i] - min) / (max - min) * outputMax
    } else {
      output[i] = values[i] / max * outputMax
    }
  }

  return output
}

/* tests */

/*
var test = normalize([-20,-10,0,10,20])
var test2 = normalize([-20,-10,0,10,20], 60)
console.log(test)
console.log(test2)
*/

module.exports = normalize
}())
