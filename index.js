function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the begining to the middle
  for (let i = 0; i < word.length / 2; i++) {
    //check each letter to the corresponding letter at the end
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) return false;
  }
  // return true
  return true;

  /* 
  Add your pseudocode here
  ^  ^
  abba
  ^  ^
  a  b   return true

  ^   ^
  robot
  ^   ^
  r   t   return false
*/

  /*
  Add written explanation of your solution here
  if the first letter is the same as the last letter, and the second letter is the same as the second last letter, etc
  until we reach middle, return true.

  

    return true
*/
}
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
