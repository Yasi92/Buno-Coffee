(() => {
    const form = document.getElementById("feedback");
    const fields = document.getElementById("feedback-fields");
    const button = document.getElementById("feedback-submit");
    const status = document.getElementById("feedback-status");
    const message = form.elements.namedItem("message");
    let sending = false;

    document.getElementById("crnt-year").textContent = new Date().getFullYear();
    document.getElementById("private").addEventListener("click", () => {
        form.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
        });
        message.focus({ preventScroll: true });
    });
    message.addEventListener("input", () => message.setCustomValidity(""));

    function showStatus(text) {
        status.hidden = false;
        status.textContent = text;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (sending) return;
        message.setCustomValidity(message.value.trim() ? "" : "Please enter your message.");
        if (!form.reportValidity()) return;

        const value = (name) => form.elements.namedItem(name).value.trim();
        // Preserve the existing EmailJS template's case-sensitive parameter names.
        const parameters = {
            emailToReply: value("emailToReply"),
            DateOfVisit: value("dateOfVisit"),
            name: value("name"),
            message: value("message")
        };
        sending = true;
        fields.disabled = true;
        form.setAttribute("aria-busy", "true");
        button.textContent = "Sendingâ€¦";
        showStatus("Sending your messageâ€¦");

        try {
            if (!window.emailjs) throw new Error("Email service unavailable");
            window.emailjs.init("8B-c3-MonwmpQvzeX");
            await window.emailjs.send("service_f8whq4n", "template_tw0fsta", parameters);
            form.reset();
            showStatus("Thank you! Your message has been sent to the Buno team.");
        } catch (error) {
            showStatus("We couldnâ€™t confirm that your message was sent. Your text is still here. Please try again or email bunocoffee.63@gmail.com.");
        } finally {
            sending = false;
            fields.disabled = false;
            form.removeAttribute("aria-busy");
            button.textContent = "Send message";
        }
    });
})();
