function firstUniqChar(s) {
    const charMap = {};
    
    for (let i = 0; i < s.length; i++) {
      charMap[s[i]] = charMap[s[i]] + 1 || 1;
    }
    
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      if (charMap[s[i]] === 1) {
        return i;
      }
    }
    
    return -1;
  }

  const str = "leetcode";
  const index = firstUniqChar(str);
  console.log(index);
  
