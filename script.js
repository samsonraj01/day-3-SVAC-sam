// Change background color on button click
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("colorBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        });
    }

    // Form validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }
            alert(`Thanks ${name}! Your message has been sent 🚀`);
            form.reset();
        });
    }
});
