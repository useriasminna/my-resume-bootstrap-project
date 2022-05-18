function sendMail(contactForm) {

    var templateParams = {
        "project_request": contactForm.projectsummary.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value
    };

    emailjs.send("service_qcob107", "template_ncmjefe", templateParams)
        .then(
            function(response) {
                console.log("SUCCESS", response)
            },
            function(error) {
                console.log("FAILED", error)
            }
        );
    return false;
}