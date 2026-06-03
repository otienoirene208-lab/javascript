// create a js function that takes one parameter which is an integer and checks whether it's an odd or even digit
function checkno(number) {
   if (number % 2 !=0) {
    console .log(`${number}is an odd number`)
}else{
    console.log(`${number} is an even number`)
}
}

checkno(1)

// create a js function that takes one parameter which is an interger and check whether it's  a prime number or not 
// A prime number is a number that is  divisible by one and itseif
function prime(number) {
    if (number<1){
        console.log(`${number}is not prime number`)
        return
    }
    else if(number ==2){
        console.log(`${number}is a prime number`)
        return
    }else{
        for (let i = 2; i <= Math.sqrt(number);i++){
            if (number % i ===0){
                console.log(`${number}is not a prime number`)
                return
            }
        }
    }
    console.log(`${number}is a prime number`)
    }
    prime(10)