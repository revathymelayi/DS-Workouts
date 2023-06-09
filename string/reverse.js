function reverse(str){
    str=str.split("")
    console.log(str)
    for(let i=0;i<str.length/2;i++){
        let temp=str[i]
        str[i]=str[str.length -1-i]
        str[str.length-1-i]=temp
    }

    return str.join('')

}

console.log(reverse('revathy'))

