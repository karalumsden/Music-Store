
// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	
	var address = U.$('address');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var credit = U.$('credit');

	// Flag variable:
	var error = false;

	// Validate the address:
	if (/^[\w \.\-']{2,50}$/i.test(address.value)) {
		removeErrorMessage('address');
	} else {
		addErrorMessage('address', 'Please enter your address.');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}
	
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
		addErrorMessage('zip', 'Please enter your zip code.');
		error = true;
	}
	
		
  		
	if(/\d{4}[ \-\.]?\d{4}[ \-\.]?\d{4}[ \-\.]?\d{4}/.test(credit.value)) {  
		removeErrorMessage('credit');
	} else {  
		addErrorMessage('credit', 'Please enter a valid US credit card number.');
		error = true;
	}  


    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.


// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('checkOutForm'), 'submit', validateForm);


	// Enbable tooltips on the phone number:
	// U.enableTooltips('phone');
    
};


