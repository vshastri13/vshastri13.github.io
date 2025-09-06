emailjs.init("vJoEJMGTfm2M8xDto");
function SendMail() {
    // Attempt to retrieve each element and log it
    var fullNameElement = document.getElementById("fullName");
    var emailElement = document.getElementById("email_id");
    var subjectElement = document.getElementById("subject");
    var messageElement = document.getElementById("message");

    console.log("fullNameElement:", fullNameElement);
    console.log("emailElement:", emailElement);
    console.log("subjectElement:", subjectElement);
    console.log("messageElement:", messageElement);

    // Check if any element is null
    if (!fullNameElement) {
        console.error("Element with ID 'fullName' not found.");
    }
    if (!emailElement) {
        console.error("Element with ID 'email_id' not found.");
    }
    if (!subjectElement) {
        console.error("Element with ID 'subject' not found.");
    }
    if (!messageElement) {
        console.error("Element with ID 'message' not found.");
    }

    // Only proceed if all elements are found
    if (fullNameElement && emailElement && subjectElement && messageElement) {
        var params = {
            from_name: fullNameElement.value,
            email_id: emailElement.value,
            subject: subjectElement.value,
            message: messageElement.value,
        };

        emailjs.send("service_q81kj9p", "template_9hfewqr", params)
        .then(function(response) {
            alert("Success! " + response.status);
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error);
        });
    } else {
        console.error("One or more elements are missing or have incorrect IDs.");
    }
}
