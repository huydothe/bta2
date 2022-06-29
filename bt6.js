let str = ['-','-','V','0','i','e','-','-','-'];
for(let i=0; i<str.length; i++){
    if(str[i]=== '-') {
        str.splice(i,1, '_')
    }
}document.write(str);