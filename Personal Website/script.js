document.querySelector('#contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    try {
        const response = await fetch('http://localhost:3000/submit-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });

        const result = await response.json();
        if (result.success) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong.');
    }
});
