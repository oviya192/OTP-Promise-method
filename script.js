function generateOTP() {
    return new Promise((resolve, reject) => {
       
        const otp = '192426';
        resolve(otp);
    });
}

function verifyOTP(userOTP, generatedOTP) {
    return new Promise((resolve, reject) => {
        if (userOTP === generatedOTP) {
            resolve('OTP is valid');
        } else {
            reject('Invalid OTP');
        }
    });
}

document.getElementById('verifyButton').addEventListener('click', () => {
    const userEnteredOTP = document.getElementById('otp').value;
    generateOTP()
        .then((generatedOTP) => verifyOTP(userEnteredOTP, generatedOTP))
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
});
