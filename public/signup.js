const signupForm = document.getElementById('signup-form');
const message = document.getElementById('signup-message');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const res = await fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      message.textContent = "Signup successful! You can now login.";
      message.style.color = "green";
    } else {
      message.textContent = data.message || "Signup failed.";
      message.style.color = "red";
    }
  } catch (err) {
    message.textContent = "Error connecting to server.";
    message.style.color = "red";
  }
});
