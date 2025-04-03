// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// Contact Form Validation & Submission Alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }
    
    alert("Message sent successfully! We will get back to you soon.");
    this.reset();
});

// Logo Animation on Scroll
window.addEventListener("scroll", function () {
    let logo = document.querySelector(".logo");
    if (window.scrollY > 50) {
        logo.style.transform = "scale(0.8)";
        logo.style.transition = "0.3s ease-in-out";
    } else {
        logo.style.transform = "scale(1)";
    }
});
