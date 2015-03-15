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
  var maximum = max + Math.abs(min)

  for(var i=0; i < values.length; i++) {
    output[i] = (values[i] + Math.abs(min)) / maximum * outputMax
  }

  return output
}

module.exports = normalize
}())
