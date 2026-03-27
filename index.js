function calculateTax(amount){
  return amount * 0.1

}
calculateTax(100) 
console.log(calculateTax(100));


function convertUppercase(text) {
    return text.toUpperCase()  

}
convertUppercase("hello world")
console.log(convertUppercase("hello world"))    


function findmaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return "These numbers are the same"
    }
}

console.log(findmaximum(50, 30));


function isPalindrome(next) {
  return next === next.split ('').reverse().join('');
}
isPalindrome('');
console.log(isPalindrome('racecar'));
console.log(isPalindrome('stop'));


function calculatediscountedPrice(originalprice, discountpercentage) {
  const discountAmount = (originalprice * discountpercentage) / 100;
  const discountedPrice = originalprice - discountAmount;
  return discountedPrice;
}
calculatediscountedPrice(100, 400);
console.log(calculatediscountedPrice(100, 40));





// This is required for the test to function properly  
module.exports = { calculateTax, convertUppercase, findmaximum , isPalindrome, calculatediscountedPrice };