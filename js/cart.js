
function getCart() {
	if(!checkCart()){
		var usersCart = [];
		return usersCart;
	} else {
		var usersCart = JSON.parse(sessionStorage.getItem('usersCart'));
		return usersCart;
	}
}

function checkCart() {
	if(sessionStorage.getItem("usersCart")){
		return true;
		} else {
		return false;
	}
}

function getCallerByIdDigitsOnly(id){
	var id = id.replace(/\D/g,''); 
	return id; 
}


	// Add to Cart Function
		function addToCart(e) {
			'use strict';
			if (typeof e == 'undefined') var e = window.event;
			
				// Declare variables used in function
				var target = e.target || e.srcElement;
				// get cart 
				var usersCart = getCart();
				var addStore = storeAlbums();
				var id = target.id;
				
				// search database for item id match, save in a temp array and push to global cart array
				for(var i = 0; i < addStore.length; i++){
					if(id === addStore[i].id){
						var inCart = addStore[i];
						inCart.qtyOrdered = 1;
						
						for(var uc=0; uc<usersCart.length; uc++){
							if(id == usersCart[uc].id){
							var inCart = usersCart[uc];
								var currentQty = parseInt(usersCart[uc].qtyOrdered);
								// now add
								usersCart.splice(uc,1);
								inCart.qtyOrdered = currentQty + 1;
							
							}
						}
					} // end of if
				} // end of loop
				usersCart.push(inCart); // push in to array here
				// store cart
				sessionStorage.setItem('usersCart', JSON.stringify(usersCart));
				
				// alert user of success
				alert('Item has been added to your cart');
				
				// call update counter function
				updateCounter();
				
				event.preventDefault();					
		
} // end addToCart function


		function updateCounter() {
			  // call userCart
			  // get cart 
			  var countItems = getCart();
			  var updateCartLink = U.$('inCartNow');
			  updateCartLink.innerHTML = "&nbsp;now in your cart " + countItems.length + " items&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			  }
			  
		
		
		// ADD TO CART BUTTON --> EVENT
		function addButton(){
			'use strict';
			var btns = document.getElementsByClassName("addBtn");
			for(var i = 0, count = btns.length; i < count; i++) {
				U.addEvent(btns[i], 'click', addToCart);
			}
		} // end of add button event listener
	
		
		// CHECKOUT BUTTON --> EVENT
		function checkButton(){
			'use strict';
			if (checkButton){
			window.location.href = "checkout.html";
			}
		}
  					

// Call event listener functions
		function initButtons(){
			U.addEvent(U.$('checkButton'), 'click', checkButton);
			addButton();
			updateCounter();
		}
		
		function initGlobal() {
	
		if(!sessionStorage.getItem('loggedIn')) {
			alert('You are not logged in. Redirecting you to login page now...');
			window.location.href = 'login.html';
		} else {
			initButtons();
		}
}


// Assign an event listener to the window's load event for buttons:
window.onload = initButtons;