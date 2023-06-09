function recursivePalindrom(word){
    return iSpalindrom(word,0,word.length-1)
}
function iSpalindrom(word,beginpos,endpos){
   if(beginpos>=endpos){
    return true
   }

   if(word.charAt(beginpos) !=word.charAt(endpos)){
    return false
   }else{
    return iSpalindrom(word,beginpos+1,endpos-1)
   }

}


console.log(recursivePalindrom('malayalam'))

console.log(recursivePalindrom('revathy'))
console.log(recursivePalindrom('litle'))
console.log(recursivePalindrom('litil'))