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
// all the values between outputMin and outputMax
function normalize(values, outputMin, outputMax) {
  // set outputMin to 0 if not defined
  outputMin = outputMin !== undefined ? outputMin : 0

  // set outputMax to 1 if not defined
  outputMax = outputMax !== undefined ? outputMax : 1

  var output = []
  var max = arrayMax(values)
  var min = arrayMin(values)

  for(var i=0; i < values.length; i++) {

    if(min < 0 && outputMin === 0) {
      output[i] = (values[i] - min) / (max - min) * outputMax

    } else if(outputMin < 0 || outputMin > 0) {
      output[i] = (values[i] - min) / (max - min) * (outputMax - outputMin) + outputMin

    } else {

      output[i] = values[i] / max * outputMax
    }
  }

  return output
}

module.exports = normalize
}())
