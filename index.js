// 1. Calculate Tax
function calculateTax(amount) {
  return amount * 0.1;
}

console.log(calculateTax(100)); // 10


// 2. Convert to Uppercase
function convertUppercase(text) {
  return text.toUpperCase();
}

console.log(convertUppercase("hello world")); // HELLO WORLD


// 3. Find Maximum Number
function findmaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Numbers are equal";
  }
}

console.log(findmaximum(50, 30)); // 50


// 4. Check Palindrome
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("stop"));    // false


// 5. Calculate Discounted Price
function calculatediscountedPrice(originalPrice, discountPercentage) {
  if (discountPercentage > 100) {
    return "Invalid discount";
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

console.log(calculatediscountedPrice(100, 40)); // 60





// This is required for the test to function properly  
module.exports = { calculateTax, convertUppercase, findmaximum , isPalindrome, calculatediscountedPrice };