// function dropmenu() {
//     var menu = document.getElementById("menu");
//     var menuIcon = document.getElementById("menu-icon");

//     if (menu.style.display === 'none' || menu.style.display === '') {
//       menu.style.display = 'block';
//       menuIcon.innerHTML = '&#10006;'; // Unicode character for a cross (✖)
//     } else {
//       menu.style.display = 'none';
//       menuIcon.innerHTML = '&#9776;'; // Unicode character for a hamburger (☰)
//     }
//   }

const otp_input = document.querySelector("#otp");
const email = document.querySelector("#email");
let otp = Math.floor(Math.random() * 10000);
function sendOTP() {
   
    
    console.log(otp);
    alert(otp);
    let emailBody = `<h2>Your OTP is</h2> ${otp}`;

}

// const login = document.querySelector("#login");
const login= () => {
    if(otp_input.value == otp) {
        window.location.href = "/feestructure.html";
        
    }
    else{
        alert("Invalid OTP");
    }
};