document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.createElement("div");
    confirmationMessage.className = "confirmation-message";
    confirmationMessage.style.display = "none";
    contactForm.appendChild(confirmationMessage);

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            confirmationMessage.innerHTML = "Message sent! We'll get back to you shortly.";
            confirmationMessage.style.display = "block";

            // You can add code here to submit the form data to a server using AJAX or any other method.
        } else {
            confirmationMessage.innerHTML = "Please fill in all the required fields.";
            confirmationMessage.style.display = "block";
        }
    });
});
