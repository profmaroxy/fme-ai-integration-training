document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
        return;
    }

    document.getElementById("successMsg").innerText =
        "Thank you, " + name + "! Your message has been received.";

    document.getElementById("contactForm").reset();
});
