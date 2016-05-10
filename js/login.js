// login.js
// Function called when the form is submitted.
// Function validates the form data and returns a Boolean value.


function validateForm() {
    'use strict';
    
    // Get references to the form elements:
    var email = document.getElementById('email').value;
	var password = document.getElementById('pwd').value;

    // Validate!
    if ( (email == "admin@titanmusicstore.com") && (password == "LogMeIn") || (email == "kara.lumsden@gmail.com") && (password == "k@r@") ) {
		sessionStorage.setItem('loggedIn', 'Yes');	
		return true;
    }else{
		alert("Access denied. Valid username and password is required.");
		return false;
    }
    
} // End of validateForm() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';
    
    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }

} // End of init() function.
// Assign an event listener to the window's load event:
window.onload = init;