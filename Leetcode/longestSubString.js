function lengthOfLongestSubstring(s) {
  const stringLength = s.length;
  if (stringLength <= 1) {
    return stringLength;
  }

  const visited = new Set();
  let leng = 1;
  visited.add(s[0]);
  let i = 1;
  let maxLen = 0;

  while (i < stringLength) {
    if (s[i] != s[i - 1] && !visited.has(s[i])) {
      visited.add(s[i]);
      leng++;
      i++;
      if (leng > maxLen) {
        maxLen = leng;
      }
    } else {
      if (leng == 1) {
        i++;
      } else {
        visited.clear();
        i = i - leng + 1;
        leng = 0;
      }
    }
  }

  return Math.max(maxLen, leng);
}

const findLongestSubstring = str => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(findLongestSubstring('abcabcbb'));
