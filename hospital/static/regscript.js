function toggleFormFields() {
    var registerAs = document.getElementById('registerAs').value;

    // Hide all fields
    document.getElementById('patientFields').style.display = 'none';
    document.getElementById('doctorFields').style.display = 'none';
    document.getElementById('hospitalFields').style.display = 'none';

    // Show fields based on selection
    if (registerAs === 'patient') {
        document.getElementById('patientFields').style.display = 'block';
    } else if (registerAs === 'doctor') {
        document.getElementById('doctorFields').style.display = 'block';
    } else if (registerAs === 'hospital') {
        document.getElementById('hospitalFields').style.display = 'block';
    }
}

function submitRegistration() {
    // Implement the registration logic here
    var registerAs = document.getElementById('registerAs').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var contactNumber = document.getElementById('contactNumber').value;

    if (registerAs === 'patient') {
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var address = document.getElementById('address').value;

        // Implement logic to handle patient registration
        console.log('Registering as patient:', firstName, lastName, contactNumber, dateOfBirth, gender, address);
    } else if (registerAs === 'doctor') {
        var specialization = document.getElementById('specialization').value;
        var hospitalId = document.getElementById('hospitalId').value;

        // Implement logic to handle doctor registration
        console.log('Registering as doctor:', firstName, lastName, contactNumber, specialization, hospitalId);
    } else if (registerAs === 'hospital') {
        var hospitalName = document.getElementById('hospitalName').value;
        var location = document.getElementById('location').value;

        //
    }
}