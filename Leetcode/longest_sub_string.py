def lengthOfLongestSubstring(s):
        chars = [0] * 128
 
        left = right = 0
 
        res = 0
        while right < len(s):
            r = s[right]
            chars[ord(r)] += 1
 
            while chars[ord(r)] > 1:
                l = s[left]
                chars[ord(l)] -= 1
                left += 1
 
            res = max(res, right - left + 1)
 
            right += 1
        return res    



def longestSubstrDistinctChars(s):
    if len(s) == 0:
        return 0
    n = len(s)
    st = set()
    leng = 1
    st.add(s[0])
    i = 1
    maxLen = 0
    while i < n:
        # check if consiqutive chars are distinct and non repeating
        if s[i] != s[i - 1] and s[i] not in st:
            st.add(s[i])
            leng += 1
            i += 1
            # back up the max length
            if leng > maxLen:
                maxLen = leng
        else:
            # move forward for repeating chars
            if leng == 1:
                i += 1
            else:
                # reset the substring and set the pivot for next sub string
                st.clear()
                i = i - leng + 1
                leng = 0
    return max(maxLen, leng)


if __name__ == "__main__":
    # Your code goes here
    s = "abcabcbb"
    print(longestSubstrDistinctChars(s))