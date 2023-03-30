function countWords(str) {
    // Initialize an empty Map to hold the word counts
    const wordCountMap = new Map();
  
    // Split the string into an array of words
    const words = str.split(" ");
  
    // Loop through the words and count each one
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      // If the word is already in the Map, increment its count
      if (wordCountMap.has(word)) {
        const count = wordCountMap.get(word);
        wordCountMap.set(word, count + 1);
      } else {
        // Otherwise, add the word to the Map with a count of 1
        wordCountMap.set(word, 1);
      }
    }
  
    // Return the Map of word counts
    return wordCountMap;
  }
  
const text = "the quick brown fox jumps over the lazy dog";
const wordCount = countWords(text);
console.log(wordCount);
// Output: Map(8) { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }
  