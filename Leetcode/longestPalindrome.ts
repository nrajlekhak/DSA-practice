function longestPalindrome(s: string): string {
    let n = s.length;
    let longest = s.substring(0,1);

    for(let i =0; i < s.length; i++){
        let temp = expand(s,i,i)

        if(temp.length > longest.length){
            longest = temp
        }

        temp = expand(s,i,i+1)
         if(temp.length > longest.length){
            longest = temp
        }

    }

    return longest

};


function expand(s:string, start:number, end:number){
while(start >= 0 && end <= s.length-1 && s[start] === s[end]){
    start--;
    end++;
}
return s.substring(start+1,end);
}


console.log(longestPalindrome('bbbb'));