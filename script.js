function showMessage() {
    const signalColor = document.getElementById('signalColor').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');
    let message = '';

    if (signalColor === 'red') {
        message = 'Must Stop';
        messageElement.style.color = 'red';
    } else if (signalColor === 'yellow') {
        message = 'Ready to move';
        messageElement.style.color = 'rgb(207, 207, 42)';
    } else if (signalColor === 'green') {
        message = 'Move now';
        messageElement.style.color = 'green';
    } else {
        message = 'Invalid color! Please enter Red, Yellow, or Green.';
        messageElement.style.color = ' rgb(107, 202, 107)';
    }

    messageElement.textContent = message;
}