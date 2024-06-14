//1) What are all of the words containing UU?

const uuWords = words.includes(word => word.includes('uu'));
console.log(uuWords);




//2)What are all of the words containing an X and a Y and a Z?

const xyzWords = words.filter(word => word.includes('x') && word.includes('y') & word.includes('z'));
console.log(xyzWords);




//3)What are all of the words containing a Q but not a U?

const Qwords_notU = words.filter(word => word.includes('q') && !word.includes('u'));




//4)What are all of the words that contain the word CAT and are exactly 5 letters long?

const catWords_5lettersLong = words.filter(word => word.includes('cat') && word.length === 5);
console.log(catWords_5lettersLong);





//5) What are all of the words that have no E or A and are at least 15 letters long?


const wordsNoEorAAtLeast15Letters = words.filter(word => !word.includes('e') && !word.includes('a') && word.length >= 15);

console.log(wordsNoEorAAtLeast15Letters);


//6) What are all of the words that have a B and an X and are less than 5 letters long?

const wordsWithBAndXLessThan5Letters = words.filter(word => word.includes('b') && word.includes('x') && word.length < 5);
console.log(wordsWithBAndXLessThan5Letters);

//7) What are all of the words that both start and end with a Y?

const words_thatStartandEnd_withY = words.filter(word => word.startsWith('y') && word.endsWith('y'));


console.log(words_thatStartandEnd_withY); 


//8) What are all of the words that have all 5 vowels, in any order?

const words_with_all_5_vowels = words.filter(word => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let vowel of vowels){
    if(!word.includes(vowel))
      return false
  }
  return true;
})




// SETTING UP STORAGE TO USE DURING A FOR LOOP, INCLUDING COUNTERS AND ARRAYS:

//9) How many words contain the substring "TYPE”?

const words_with_TYPE = words.filter(word => word.toLowerCase().includes("type"));
console.log(words_with_TYPE);






//10)Create and print an array containing all of the words that end in "GHTLY"

const words_thatEndin_GHTLY = words.filter(word => word.toLocaleLowerCase().endsWith("GHTLY"));
console.log(words_thatEndin_GHTLY);




//11) What is the shortest word that contains all 5 vowels?

//all vowels
const allVowels = words.filter(word => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.every(vowel => word.includes(vowel));
})

//shortest word
const shortestWord = allVowels.reduce((shortest, current) => {
  return current.length < shortest.length ? current: shortest;
}, allVowels[0]);



//12) What is the longest word that contains no vowels?

function longestWordWithoutVowels(words) {
  const vowels = ["a", "e", "i", "o", "u"];
  let longestWord = "";
  for (const word of words) {
    let hasVowel = false;
    for (let char of word) {
      if (vowels.includes(char.toLowerCase())) {
        hasVowel = true;
        break;
      }
    }
    if (!hasVowel && word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const wordWithoutVowels = longestWordWithoutVowels(words);
console.log("Longest word without vowels:", wordWithoutVowels);



//13) Which of the letters Q, X, and Z is the least common?

const letterCounts = {
  Q: 0,
  X: 0,
  Z: 0,
};

for (let word of words) {
  for (let letter of word) {
    if (letter === 'q' || letter === 'Q') {
      letterCounts.Q++;
    } else if (letter === 'x' || letter === 'X') {
      letterCounts.X++;
    } else if (letter === 'z' || letter === 'Z') {
      letterCounts.Z++;
    }
  }
}

let leastCommonLetter = null;
let leastCommonCount = Infinity;

for (let letter in letterCounts) {
  if (letterCounts[letter] < leastCommonCount) {
    leastCommonCount = letterCounts[letter];
    leastCommonLetter = letter;
  }
}

console.log(leastCommonLetter);


//14) What is the longest palindrome?


function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}
let longestPalindrome = '';

words.forEach(word => {
    if (isPalindrome(word)) {
        if (word.length > longestPalindrome.length) {
            longestPalindrome = word;
        }
    }
});

console.log(longestPalindrome);



//15)What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

function getLongestWord(words) {
  let longestWord = '';

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

const longestWord = getLongestWord(words);
console.log(longestWord);














