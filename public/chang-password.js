document.getElementById("change-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const urlParams = new URLSearchParams(window.location.search);
    
    const email = urlParams.get("email");
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (!email) {
        document.getElementById("change-message").textContent = "Email is missing in the URL.";
        return;
      }

    try {
      const response = await fetch("http://localhost:3000/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword, confirmPassword}),
      });
  
      const result = await response.json();
      const messageDiv = document.getElementById("change-message");
  
      if (response.ok) {
        messageDiv.style.color = "green";
        messageDiv.textContent = result.message;
      } else {
        messageDiv.style.color = "red";
        messageDiv.textContent = result.message;
      }
    } catch (err) {
      document.getElementById("change-message").textContent = "Server error.";
    }
  });
  