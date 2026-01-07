emailjs.init("3rKOcR68kywmgdVHD");


const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const message = document.getElementById("message");

let generatedOTP = null;
let otpExpiry = null;

// generate opt logic 

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// OTP sender logic 

sendOtpBtn.addEventListener("click", function () {
  const email = document.getElementById("email").value;

  if (!email) {
    message.textContent = "Please enter email";
    return;
  }



  generatedOTP = generateOTP();
  otpExpiry = Date.now() + 2 * 60 * 1000; // 2 minutes

  emailjs.send(
    "service_iypo4ob",
    "template_4ptf0d6",
    {
      to_email: email,
      otp: generatedOTP
    }
  ).then(() => {
    message.textContent = "OTP sent successfully";
  }).catch(() => {
    message.textContent = "Failed to send OTP";
  });

  email = ""
});


// verify otp logic

verifyOtpBtn.addEventListener("click", function () {
  const userOTP = document.getElementById("otpInput").value;

  if (!generatedOTP) {
    message.textContent = "Please request OTP first";
    return;
  }

  if (Date.now() > otpExpiry) {
    message.textContent = "OTP expired";
    return;
  }

  if (userOTP === generatedOTP) {
    message.textContent = "OTP verified successfully";
    generatedOTP = null;
  } else {
    message.textContent = "Invalid OTP";
  }
});
