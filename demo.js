function check_Prime(a) {
    if(a<2){
        return false;
    }else if(a===2){
        return true;
    } else {
        let flag=true
        for (let i=2; i<=Math.sqrt(a); i++){
            if(a%i===0){
                flag=false;
                break;
            }else {
                flag=true;
            }
        }
        if(flag){
            return true;
        }else {
            return false;
        }
    }
}

function check() {
    let arr = [];
    let count = 0;
        for (let i = 1; i <= 1000; i++) {
            if (check_Prime(i)) {
                arr.push(i);
                count++;
            }
            if(count>=14){
                break;
        }
    }
    console.log(arr)
}
check();