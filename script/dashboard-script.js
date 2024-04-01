// Function to show the form modal
function showFormModal() {
    var formModal = document.getElementById('form-modal');
    formModal.style.display = 'block';
}

// Function to hide the form modal
function hideFormModal() {
    var formModal = document.getElementById('form-modal');
    formModal.style.display = 'none';
}

// Function to display patient details in the dialog box
function showDetails(patientName, patientID) {
    var dialogBox = document.getElementById("dialog-box");
    var patientNameElement = document.getElementById("modal-patient-name");
    var patientIDElement = document.getElementById("modal-patient-id");

    patientNameElement.textContent = "Patient Name: " + patientName;
    patientIDElement.textContent = "Patient ID: " + patientID;

    dialogBox.style.display = "block";
}

// Function to hide the dialog box
function hideDetails() {
    var dialogBox = document.getElementById("dialog-box");
    dialogBox.style.display = "none";
}

function generateID() {
    var name = document.getElementById("patient-form").elements["name"].value;
    var address = document.getElementById("patient-form").elements["address"].value;
    var email = document.getElementById("patient-form").elements["email"].value;
    var contact = document.getElementById("patient-form").elements["contact"].value;
    
    // Log values
    console.log("Patient Name: " + name);
    console.log("Address: " + address);
    console.log("Email: " + email);
    console.log("Contact Number: " + contact);
}
