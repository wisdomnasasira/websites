// Script for interactive features & EmailJS form submission
document.addEventListener("DOMContentLoaded", () => {
    console.log("Services page loaded successfully!");

    // Highlight service items on hover
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Initialize EmailJS with the correct public key
    (function () {
        emailjs.init("SmjJAYHk380vs1NmK"); // Ensure this is your correct public key
    })();

    // Form submission handler
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            // Define EmailJS parameters
            const templateParams = {
                name: name,
                email: email,
                message: message
            };

            // Send email using EmailJS
            emailjs.send("service_yd0e5up", "template_kiv5uda", templateParams, "SmjJAYHk380vs1NmK")
                .then(response => {
                    console.log("EmailJS Success:", response);
                    alert(`Thank you, ${name}! Your message has been successfully sent.`);
                    document.getElementById("contactForm").reset(); // Clear form fields
                })
                .catch(error => {
                    console.error("EmailJS Error:", error);
                    alert(`Oops! Something went wrong. Error: ${error.text || error}`);
                });
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
