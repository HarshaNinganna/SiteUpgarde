document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Send the form data to the server for authentication
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Login successful!');
            // Redirect to another page if needed
        } else {
            alert('Login failed!');
        }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
});
