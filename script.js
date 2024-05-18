let generatedOTP = '';

function generateOTP() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (username === '' || email === '') {
        alert('Please enter both username and email.');
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
    document.getElementById('otpSection').classList.remove('hidden');
    document.getElementById('otpFeedback').textContent = `OTP sent to your email: ${generatedOTP}`; // For demo purposes, display OTP
}

function verifyOTP() {
    const otpInput = document.getElementById('otpInput').value.trim();

    if (otpInput === generatedOTP) {
        document.getElementById('signupForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('usernameDisplay').textContent = document.getElementById('username').value.trim();
    } else {
        document.getElementById('otpFeedback').textContent = 'Invalid OTP. Please try again.';
    }
}

function clearOTP() {
    document.getElementById('otpInput').value = '';
    document.getElementById('otpFeedback').textContent = '';
}

// Generate an OTP when the page loads (for demo purposes)
window.onload = () => {
    document.getElementById('otpSection').classList.add('hidden');
    document.getElementById('successMessage').classList.add('hidden');
};
