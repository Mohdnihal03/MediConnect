// script.js

function login() {
    // Get values from the login form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginAs = document.getElementById('loginAs').value;

    // Validate the inputs (you may want to add more validation)
    if (username && password && loginAs) {
        // Assuming you have a backend API for authentication
        // Send a request to the server to validate the login
        // Example using fetch API
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, loginAs }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            if (data.success) {
                // Redirect to the dashboard or another page
                alert('Login successful! Redirecting...');
                window.location.href = '/dashboard';
            } else {
                // Display an error message
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please fill in all fields.');
    }
}

function register() {
    // Get values from the registration form
    // You'll need to add additional logic for handling different registration types (patient, doctor, hospital)
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var specialization = document.getElementById('specialization').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var hospitalId = document.getElementById('hospitalId').value;

    // Validate the inputs (you may want to add more validation)
    if (firstName && lastName && contactNumber) {
        // Assuming you have a backend API for registration
        // Send a request to the server to register the user
        // Example using fetch API
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, specialization, contactNumber, hospitalId }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            if (data.success) {
                // Display a success message or redirect to login page
                alert('Registration successful! Please login.');
                window.location.href = '/login';
            } else {
                // Display an error message
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please fill in all required fields.');
    }
}
