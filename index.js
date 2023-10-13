function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('');
  if (word == reverseWord){
    return true;
  }
  else {
    return false;
  }
}
console.log(isPalindrome("racecar"))

/* 
  Add your pseudocode here
1. Compare the word with its reversed.
3. If they are equal, return (true), the word is a palindrome.
4. If they are not equal, return (false), the word is not a palindrome.

*/
/*
  Add written explanation of your solution here
- The `isPalindrome` function takes a word as input.
- The word is split into an array of characters, reversed using the `reverse` method, and joined back into a string using the `join` method.
- If the word and its reversed are equal, that means the word is a palindrome, and the function returns `true`.
- If not, it returns `false` to indicate the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
