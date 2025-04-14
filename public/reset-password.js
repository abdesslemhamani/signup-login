const resetPasswordForm = document.getElementById("reset-password-form");
const resetMessage = document.getElementById("reset-message");

resetPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  resetMessage.textContent = "Sending reset link...";

  const response = await fetch("http://localhost:3000/users/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (data.success) {
    resetMessage.textContent = "Reset link sent to your email!";
  } else {
    resetMessage.textContent =   data.message;
  }
});
