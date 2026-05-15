// =========================
// EMAILJS INIT
// =========================

emailjs.init("Aq0fQYX1X69tWziS2");

// =========================
// FORM
// =========================

const form =
document.getElementById("contact-form");

const successMessage =
document.getElementById("success-message");

// =========================
// SUBMIT
// =========================

form.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const submitBtn =
        document.querySelector(".submit-btn");

        // LOADING

        submitBtn.innerHTML =
        "Sending...";

        submitBtn.disabled = true;

        // SEND EMAIL

        emailjs.sendForm(

            "service_7nm5h6m",
            "template_79qfjfc",
            this

        )

        .then(() => {

            successMessage.innerHTML =
            "✅ Message sent successfully!";

            successMessage.style.color =
            "#60a5fa";

            form.reset();

            submitBtn.innerHTML =
            "Send Message";

            submitBtn.disabled = false;

        })

        .catch((error) => {

            console.log(error);

            successMessage.innerHTML =
            "❌ Failed to send message.";

            successMessage.style.color =
            "#ef4444";

            submitBtn.innerHTML =
            "Send Message";

            submitBtn.disabled = false;

        });

    }
);