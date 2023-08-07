// Get user's IP address using a public API
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').value = data.ip;
    });
// Load hCaptcha script
var script = document.createElement('script');
script.src = "https://hcaptcha.com/1/api.js?hl=en";
script.async = true;
document.head.appendChild(script);
