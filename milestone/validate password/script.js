const form = document.getElementById('login-form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@') || password.length < 8) 
    {
        // display error message
        const message = document.getElementById('message');
        message.textContent = 'Invalid email or password!';
        message.style.color = 'red';
    } 
    else 
    {
        // display success message
        const message = document.getElementById('message');
        message.textContent = 'Valid email and password!';
        message.style.color = 'green';
    }
} );
