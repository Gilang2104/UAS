// Function to handle transaction
function handleTransaction() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const date = document.getElementById('date').value;
    
    if (name && email && hotel && date) {
        alert(`Thank you, ${name}! Your booking at ${hotel} on ${date} has been confirmed.`);
    } else {
        alert('Please fill in all fields.');
    }
}
