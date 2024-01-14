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
const emailInput = document.querySelector("#email");
let otp = Math.floor(Math.random() * 10000);

function sendOTP() {
    const email = emailInput.value.trim();

    function isEmailValid(email) {
        // Regular expression for the specified email format
        const emailPattern = /^[a-zA-Z]+\.\d+@ncit\.edu\.np$/;
        return emailPattern.test(email);
    }

    if (!isEmailValid(email)) {
        alert('Please enter a valid email in the format name.roll@ncit.edu.np');
        return;
    }
    

    console.log(otp);
    // alert(otp);
    otp_input.value=otp;
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