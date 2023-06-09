function replace(str){
    str=str.split("")
    console.log(str)
    for(let i =0;i<str.length;i++){
        if(str[i]==='r'){
            str[i]='%'
        }
    }
    return str.join("")
}


console.log(replace("crossroads"))