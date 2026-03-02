// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Newsletter Handling
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  // Basic Email Validation
  if (validateEmail(email)) {
    // Simulate an API call
    const btn = form.querySelector("button");
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = "Processing...";

    setTimeout(() => {
      // Show Success Message
      form.style.display = "none";
      successMsg.style.display = "block";

      // Reset form (if you want it to reappear after some time)
      /* setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            successMsg.style.display = 'none';
            btn.disabled = false;
            btn.textContent = originalText;
          }, 5000); 
          */
    }, 1200);
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
