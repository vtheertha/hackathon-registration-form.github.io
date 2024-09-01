function toggleTeamFields(show) {
    document.getElementById('teamFields').style.display = show ? 'block' : 'none';
    const teamInputs = document.querySelectorAll('#teamFields input, #teamFields textarea, #teamFields select');
    teamInputs.forEach(input => input.required = show);
}

document.getElementById('participation').addEventListener('change', function() {
    const participationValue = this.value;
    toggleTeamFields(participationValue === 'team');
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Check if the form is valid before showing the success message
    if (this.checkValidity()) {
        // Show success message as an alert
        alert("Registration Successful!");
        
        // Optionally, you can also display the success message on the page
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset the form fields after successful submission
        this.reset();
        
        // Hide the team fields section after resetting the form
        toggleTeamFields(false);
    } else {
        // If the form is invalid, trigger the native validation UI
        alert("Please fill out all required fields correctly before submitting.");
    }
});






