let email=document.querySelector("#email");
let login=document.querySelector("#login");


let otp="";
function sendOTP(){

for(let i=0; i<6; i++){
    otp+=Math.floor(Math.random()*10);
}

console.log(otp);
// let emailBody=<h2>Your OTP is</h2> {otp};

// Email.send({
//     SecureToken : " f35d097a-787d-4b89-8c62-3f55f7f74889",
//     To : email.value,
//     From : "aayushman.211608@ncit.edu.np",
//     Subject : "Email OTP for billing system",
//     Body : emailBody,
// })

then(
  message => {
    if(message=== "OK"){
        alert("OTP sent to your email"+email.value);

        const otp_input=document.querySelector("#otp");
       
        login.addEventListener('click',()=>{
            if(otp_input.value==otp)
            {
                window.location.href="payment.html";
            }

            else{
                alert("Invalid OTP");
            }
        });
    }
  }
);
}
const otp_input=document.querySelector("#otp");
       
// login.addEventListener('click',()=>{
//     if(otp_input.value==otp)
//     {
//         window.location.href="payment.html";
//     }

//     else{
//         alert("Invalid OTP");
//     }
// });