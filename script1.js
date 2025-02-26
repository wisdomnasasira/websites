// Script for interactive features
document.addEventListener("DOMContentLoaded", () => {
    console.log("Services page loaded successfully!");

    // Example of adding an event to highlight a service item on hover
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});
