function reverseString(str) {
  return str.split("").reverse().join("")
}

function reverseString2(str) {
  let reversed = "";
  for(let i=str.length-1; i >= 0; i--) {
    reversed += str.charAt(i)
  }
  return reversed
}

const reversed = reverseString('hello world')
const reversed2 = reverseString2('animal')
console.log('reverseString',reversed)
console.log('reverseString2',reversed2)