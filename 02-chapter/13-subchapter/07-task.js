let n = 10;

for(let i = 2; i <= n; i++) {
    let isPrime = true;
    for(let k = 2; k < i; k++){
        if(i % k === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(i)
    }
}