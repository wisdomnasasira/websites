// Initialize EmailJS with your Public Key
(function () {
    emailjs.init("SmjJAYHk380vs1NmK"); // Ensure this is your correct public key
})();

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Define EmailJS parameters
        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        // Send email using EmailJS with public key
        emailjs.send("service_9mergpl", "template_kiv5uda", templateParams, "SmjJAYHk380vs1NmK")
            .then(function (response) {
                alert(`Thank you, ${name}! Your message has been successfully sent.`);
                document.getElementById('contactForm').reset(); // Clear form fields
            })
            .catch(function (error) {
                alert("Oops! Something went wrong. Please check the console for details.");
                console.error("EmailJS Error:", error);
            });
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
