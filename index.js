function isPalindrome(word) {
  // Write your algorithm here
const neno = word.toLowerCase()
const  splitWord = neno.split('')
  const reverseWord = splitWord.reverse()
  reverseJoined = reverseWord.join("")
  if(neno == reverseJoined){
    return true
  }
  else{
    return false
  }

 
}
isPalindrome('Madam')
/* 
  Add your pseudocode here
  Input the parameter into the function
  parameter.toLowerCase
  The output is split into an array of letters
  reverse the array and join it back into a word
  use the if else statement to check whether the parameter and joined word match
  return true or false
*/

/*
  Add written explanation of your solution here
  Take the input and convert it to lowercase then make it into an array, reverse the letters 
  in the array and join them back together, check whether the name written foward is the same as the
  name written backwards
*/

 //You can run `node index.js` to view these console logs
if (require.main === module) {
  //add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
