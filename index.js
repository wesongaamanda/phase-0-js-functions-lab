// 1. Calculate Tax
function calculateTax(amount) {
  return amount * 0.1;
}

console.log(calculateTax(100)); 


// 2. Convert to Uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

console.log(convertToUpperCase("hello world")); 


// 3. Find Maximum Number
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Numbers are equal";
  }
}

console.log(findMaximum(50, 30)); 


// 4. Check Palindrome
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("stop"));    


// 5. Calculate Discounted Price
function calculatediscountedPrice(originalPrice, discountPercentage) {
  
  const discountAmount = originalPrice * (discountPercentage/ 100);
  return originalPrice - discountAmount;
}

console.log(calculatediscountedPrice(100, 20)); 





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum , isPalindrome, calculatediscountedPrice };