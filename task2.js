// creat this informatoin
let distance =900

if (distance>1 &&distance<=100){
    console.log(`pay 5 USD`)
}
else if (distance>100 && distance<=500){
    console.log(`pay 10 USD`)
}
else if (distance>500 && distance<=1000){
    console.log(` pay 20 USD`)
}
else if(distance>1000){
    console.log(`pay 40 USD`)
}
else{
    console.log(`the distance is  invalid`)
}