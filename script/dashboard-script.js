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

// Function to generate ID and show ID setup modal
function generateIDAndShowSetupModal() {
    // Generate ID
    generateID();

    // Show ID setup modal
    showIDSetupModal();
}

// Function to generate ID
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

// Function to show ID setup modal
function showIDSetupModal() {
    var idSetupModal = document.getElementById('id-setup-modal');
    idSetupModal.style.display = 'block';

    // Get form data
    var name = document.getElementById("patient-form").elements["name"].value;
    var address = document.getElementById("patient-form").elements["address"].value;
    var email = document.getElementById("patient-form").elements["email"].value;
    var contact = document.getElementById("patient-form").elements["contact"].value;

    // Display form data in the modal
    var idSetupDetails = document.getElementById('id-setup-details');
    idSetupDetails.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <!-- Add more details as needed -->
    `;
}

//hide the ID setup modal
function hideIDSetupModal() {
    var idSetupModal = document.getElementById('id-setup-modal');
    idSetupModal.style.display = 'none';
}

function generatePDF() {
    console.log("Generating PDF...");

    // // Create a new jsPDF instance
    // var doc = new jsPDF();

    // // Get form data
    // var name = document.getElementById("patient-form").elements["name"].value;
    // var address = document.getElementById("patient-form").elements["address"].value;
    // var email = document.getElementById("patient-form").elements["email"].value;
    // var contact = document.getElementById("patient-form").elements["contact"].value;

    // // Add content to the PDF
    // doc.text("Patient Information", 10, 10);
    // doc.text("Name: " + name, 10, 20);
    // doc.text("Address: " + address, 10, 30);
    // doc.text("Email: " + email, 10, 40);
    // doc.text("Contact: " + contact, 10, 50);

    // // Save the PDF
    // var url = doc.output('bloburl'); // Get the URL of the saved PDF

    // // Open the saved PDF in a new window
    // window.open(url, '_blank');
}

// Add event listener to "Generate ID" button
// document.getElementById("generate-id-btn").addEventListener("click", generatePDF);
