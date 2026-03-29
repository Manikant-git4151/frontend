function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

let number = 7;

if (isPrime(number)) {
    console.log(number + " is Prime");
} else {
    console.log(number + " is Not Prime");
}