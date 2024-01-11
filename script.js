
  function dropmenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-icon");

    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
      menuIcon.innerHTML = '&#10006;'; // Unicode character for a cross (✖)
    } else {
      menu.style.display = 'none';
      menuIcon.innerHTML = '&#9776;'; // Unicode character for a hamburger (☰)
    }
  }

  function login(){
  }
  // script.js
  
  function isEmailValid(email) {
    // Regular expression for the specified email format
    const emailPattern = /^[a-zA-Z]+\.\d+@ncit\.edu\.np$/;
    return emailPattern.test(email);
  }
  
  function login() {
    // Get the email and OTP values from the input fields
    const emailInput = document.getElementById('email');
    const otpInput = document.getElementById('otp');
    
    // Get the values entered by the user
    const email = emailInput.value.trim();
    const otp = otpInput.value.trim();
    
    // Validate email format
    if (!isEmailValid(email)) {
      alert('Please enter a valid email in the format name.roll@ncit.edu.np');
      return;
    }
    else
    window.location.href='payment.html';

  }
