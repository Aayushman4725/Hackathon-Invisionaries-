const otp_input = document.querySelector("#otp");
const email = document.querySelector("#email");
let otp = Math.floor(Math.random() * 10000);
function sendOTP() {
   
    
    console.log(otp);
    let emailBody = `<h2>Your OTP is</h2> ${otp}`;

}

const login = document.querySelector("#login");
login.addEventListener('click', () => {
    if(otp_input.value == otp) {
        window.location.href = "payment.html";
    }
    else{
        alert("Invalid OTP");
    }
});