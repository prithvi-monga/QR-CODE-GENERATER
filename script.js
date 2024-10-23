document.getElementById('generate-btn').addEventListener('click', function() {
    const urlInput = document.getElementById('url-input').value;
    const qrOutput = document.getElementById('qr-output');

    qrOutput.innerHTML = ''; // Clear previous QR code

    if (urlInput) {
        // Generate QR code
        $(qrOutput).qrcode({
            text: urlInput,
            width: 200,
            height: 200
        });
    } else {
        qrOutput.innerHTML = '<p>Please enter a valid URL.</p>';
    }
});
