/*---Login---*/
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const response = await fetch('http://localhost:3900/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('Login successful!');
            // Redirect to another page or perform any other actions
        } else {
            document.getElementById('errorMessage').textContent = data.error;
        }
    });
}
/*---*/

/*---Signup---*/
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        try {
            const response = await fetch('http://localhost:3900/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            if (response.ok) {
                document.getElementById('signupMessage').textContent = "Signup successful! You can now log in.";
                document.getElementById('signupMessage').style.color = 'green';
                // Optionally, clear form fields
                document.getElementById('signupForm').reset();
            } else {
                document.getElementById('signupMessage').textContent = data.error;
                document.getElementById('signupMessage').style.color = 'red';
            }
        } catch (err) {
            document.getElementById('signupMessage').textContent = "An error occurred.";
            document.getElementById('signupMessage').style.color = 'red';
        }
    });
}
/*---*/