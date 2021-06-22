// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.


describe("nameAndOccupation", () => {
  test("returns an array with a sentence about each person with their names capitalized", () => {
    var people = [
      { name: "ford prefect", occupation: "hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(nameAndOccupation(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// b) Create the function that makes the test pass.

// Create a function called nameAndOccupation
// Parameter - array of objects
// Iterate - map
// { name: "ford prefect", occupation: "hitchhiker" }
// value.name to get the name of each object
// "ford prefect"
// Capitalize each value - split by word
// ["ford", "prefect"]
// Map on the split array
// String iterpolation, toUpperCase on the zeroth index, slice at the first index
// Join the array to get a string
// String iterpolation to combine the name and occupation in a sentence

// const nameAndOccupation = (array) => {
//   let sentenceArray = []
//   array.forEach(obj => {
//     let newName = obj.name.split(" ").map(strName => {
//       return `${strName[0].toUpperCase()}${strName.slice(1)}`
//     }).join(" ")
//     sentenceArray.push(`${newName} is a ${obj.occupation}.`)
//   })
//   return sentenceArray
// }


// const capitalized = (element) => {
//   let name = element.split(" ")
//   let string = `${name[0].slice(0, 1).toUpperCase() + name[0].slice(1)} ${name[1].slice(0, 1).toUpperCase() + name[1].slice(1)}`
//   return string
// }
// const nameAndOccupation = (array, capitalized) => {
//   return array.map(element => {
//     let name = capitalized(element.name)
//     return `${name} is a ${element.occupation}.`
//   })
// }


const nameAndOccupation = (array) => {
  return array.map(element => {
    let name = element.name.split(" ")
    return `${name[0].slice(0, 1).toUpperCase()}${name[0].slice(1)} ${name[1].slice(0, 1).toUpperCase()}${name[1].slice(1)} is a ${element.occupation}.`
  })
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("divide3", () => {
  test("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(divide3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divide3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// Create a function called divide3
// Parameter of array
// Iterate with filter
// Typeof operator to get rid of non-numbers
// modulo 3 of all the numbers


const divide3 = (array) => {
  return array.filter(value => {
    return typeof value === "number"
  }).map(value => value % 3)
}




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  test("returns the sum of all the numbers cubed", () => {
    var cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    var cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
// Create a function called sumCubed
// Parameter - array of numbers
// Iterate - map
// Math.pow(3)
// Iterate - reduce
// accumulator and current value as parameters
// return output of reduce

// const sumCubed = (array) => {
//   let mappedArray = array.map(value => {
//     return Math.pow(value, 3)
//   })
//   return mappedArray.reduce((acc, current) => {
//     return acc + current
//   })
// }

// const sumCubed = (array) => {
//   return array.reduce((acc, current) => {
//     console.log("acc:", acc)
//     console.log("current:", current)
//     return acc += Math.pow(current, 3)
//   }, 0)
// }


const sumCubed = (array) => {
  let cubed = array.map(value => {
    return value ** 3
  })
  return eval(cubed.join("+"))
}
