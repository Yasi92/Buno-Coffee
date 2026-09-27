const toggle = document.getElementById("private");
const form = document.getElementById("feedback");

function sendContactForm(contactForm) {
    console.log(contactForm)

    emailjs.send("service_f8whq4n", "template_tw0fsta", {
        "emailToReply" : contactForm.emailToReply.value,
        "DateOfVisit" : contactForm.DateOfVisit,
        "name": contactForm.name.value,
        "message": contactForm.message.value
})
.then(
    function (response) {
        console.log("SUCCESS", response);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // // Hide the alert after 1 minute
        setTimeout(function () {
            confirmationMessage.classList.add('d-none');
            confirmationMessageDiv.classList.add('d-none');
        }, 60000);

    }
    )


    // empty the inputs after submitting the form
    contactForm.name.value = "";
    contactForm.emailToReply.value = "";
    contactForm.DateOfVisit = "";
    contactForm.message.value = "";

    return false;


};
