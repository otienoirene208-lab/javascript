let password ='1234';
let attempts =3 ;
while (attempts > 0){
    let userpassword= prompt('enter your password:');
if (userpassword=== correctpassword ){
    console.log('access granted !');
    break;
}else{
    attempts--;
    console.log('wrong password!');
    if(attempts >0){
        console.log('attempts remaining:'+ attempts);
    }else{
        console.log("Account locked.No attempt remaining.");
    }
}
}