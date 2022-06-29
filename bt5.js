let string2=prompt('Enter a string');
if(string1.length > string2.length || string1.length < string2.length) {
    alert('2 chuỗi không bằng nhau');
}else if(string1.length === string2.length){
    for(let i=0; i<string1.length;i++) {
        if (string1[i] === string2[i]) {
            alert('2 chuỗi giống nhau');
            break;
        } else {
            alert('2 chuỗi không giống nhau');
            break;
        }
    }
}