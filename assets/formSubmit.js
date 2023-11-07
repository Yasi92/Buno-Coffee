var confirmationMessage = document.getElementById("confirmation-message");
var confirmationMessageDiv = document.getElementById("confirmation-message-div");


function sendContactForm(contactForm) {

    emailjs.send("service_f8whq4n", "template_qga2n4j", {
            "full-name" : contactForm.fullName.value,
            "nationality" : contactForm.nationality.value,
            "language" : contactForm.language.value,
            "age" : contactForm.age.value,
            "email" : contactForm.email.value,
            "phone" : contactForm.phone.value,
            "location" : contactForm.location.value,
            "address" : contactForm.address.value,
            "work-permit" : contactForm.workPermit.value,
            "experience" : contactForm.experience.value,
            "work-schedule" : contactForm.workSchedule.value,
            "coffee-experience" : contactForm.coffeeExperience.value,
            "message" : contactForm.message.value,

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

                confirmationMessage.classList.remove('d-none');
                confirmationMessageDiv.classList.remove('d-none');

                // Hide the alert after 1 minute
                setTimeout(function () {
                    confirmationMessage.classList.add('d-none');
                    confirmationMessageDiv.classList.add('d-none');
                }, 60000);

            },
            function (error) {
                console.log("FAILED", error);
                alert('Oops! Something went wrong, please try later');
            }
    )


    // empty the inputs after submitting the form
    contactForm.fullName.value = "";
    contactForm.nationality.value = "";
    contactForm.language.value = "";
    contactForm.age.value = "";
    contactForm.email.value = "";
    contactForm.phone.value = "";
    contactForm.location.value = "";
    contactForm.address.value = "";
    contactForm.workPermit.value = "";
    contactForm.experience.value = "";
    contactForm.workSchedule.value = "";
    contactForm.coffeeExperience.value = "";
    contactForm.message.value = "";

    return false;


};


function showPage(pageId) {
    // Hide all form pages
    const pages = document.getElementsByClassName("form-page");
    for (const page of pages) {
        page.classList.remove("active");
    }

    // Show the selected page
    document.getElementById(pageId).classList.add("active");
}


setInterval(function(){
    var header = document.querySelector("header").offsetHeight;
    var footer = document.querySelector("footer").offsetHeight;
    document.getElementById("main-content").style.minHeight = "calc( 100vh - " + header + "px" + " - " + footer + "px" + " - 3rem )";

}, 500);
