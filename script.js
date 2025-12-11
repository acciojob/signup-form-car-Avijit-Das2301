document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const cars = document.getElementById('cars').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const tel = document.getElementById('tel').value;
    const password = document.getElementById('password').value;
    const tos = document.getElementById('tos').checked;
    
    if (name && email && gender && cars && age && dob && password && tos) {
        alert('Form submitted successfully!');
    }
});