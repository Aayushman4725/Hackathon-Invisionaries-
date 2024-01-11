

let email=document.querySelector("#email");
const login=document.querySelector("#login");
const otp_input=document.querySelector("#otp");

let otp="";

for(let i=0; i<6; i++){
    otp+=Math.floor(Math.random()*10);
}


function sendOTP(){
    
    
  

console.log(otp);
// let emailBody=`<h2>Your OTP is</h2> ${otp}`;

// Email.send({
//     SecureToken : " f35d097a-787d-4b89-8c62-3f55f7f74889",
//     To : email.value,
//     From : "aayushman.211608@ncit.edu.np",
//     Subject : "Email OTP for billing system",
//     Body : emailBody,
// })

// .then(
//   message => {
//     if(message=== "OK"){
//         alert("OTP sent to your email"+email.value);

        
       
//         login.addEventListener('click',()=>{
//             if(otp_input.value==otp)
//             {
//                 window.location.href="payment.html";
//             }

//             else{
//                 alert("Invalid OTP");
//             }
//         });
//     }
//   }
// );
// }
}

const loginbtn=()=>{
    if(otp_input.value==otp)
    {
        window.location.href="payment.html";
    }

    else{
        alert("Invalid OTP");
    }
};
