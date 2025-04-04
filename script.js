//your JS code here. If required.
document.getElementById("contactForm").addEventListener("submit", function(event) {
            let valid = true;
            
            const name = document.getElementById("name").value.trim();
            if (name === "") {
                document.getElementById("nameError").textContent = "Full Name is required.";
                valid = false;
            } else {
                document.getElementById("nameError").textContent = "";
            }
            
            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Enter a valid email address.";
                valid = false;
            } else {
                document.getElementById("emailError").textContent = "";
            }
            
            const phone = document.getElementById("phone").value.trim();
            if (phone !== "" && !/^[0-9]{10}$/.test(phone)) {
                document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
                valid = false;
            } else {
                document.getElementById("phoneError").textContent = "";
            }
            
            const message = document.getElementById("message").value.trim();
            if (message.length < 100) {
                document.getElementById("messageError").textContent = "Message must be at least 100 characters.";
                valid = false;
            } else {
                document.getElementById("messageError").textContent = "";
            }
            
            if (!valid) {
                event.preventDefault();
            }
        });