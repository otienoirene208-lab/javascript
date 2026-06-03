// use for loop
for (odd =1; odd<20;odd+=2){
    console.log(odd)
}

// arrange 10 to 1
for (let x=10;x >=1;x--){
    console.log(x)
}

// largest number in array
let numbers =[10,20,4,45,99,1]

let largest =numbers[0]

for (let i =1; i<=numbers.length; i++){
    if (numbers[i]> largest){
        largest =numbers[i]
    }
}
console .log(`The largest number is [${numbers}]is ${largest}`)
