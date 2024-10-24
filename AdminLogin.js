document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    const correctUserId = "sainikumar.in";
    const correctPassword = "6376188144";

    if (userId === correctUserId && password === correctPassword) {
        window.location.href = "./head.html"; // Redirect to head.html
    } else {
        document.getElementById('message').innerText = "Only for login Admin Sir";
    }
});
