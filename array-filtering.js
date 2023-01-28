const numbers = [1,2,3,4,5,6,7,8,9,10] 
//can be written as filter(function evenNumbers(number))
const filtered = numbers.filter(function (number) {
  return (number % 2) === 0
})
console.log(filtered)
