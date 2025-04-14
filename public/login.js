const loginForm = document.getElementById('login-form');
const message = document.getElementById('login-message');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const res = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      message.textContent = "Login successful!";
      message.style.color = "green";
      // redirect or save token etc.
    } else {
      message.textContent = data.message || "Login failed.";
      message.style.color = "red";
    }
  } catch (err) {
    message.textContent = "Error connecting to server.";
    message.style.color = "red";
  }
});
