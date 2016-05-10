// Display cart items
		function displayCart() {
			'use strict';
				var finalCart = getCart();
				var finalTotal = 0;
				var message = '<fieldset class="cartForm"><legend>In Your Cart</legend><table><tr><th>Title</th><th>Artist</th><th>Quantity</th><th>Price</th><th>Total</th><th>Remove Item</th></tr>';
				// display each album and save each albums price to an array
				for(var i = 0, count = finalCart.length; i < count; i++){ // loop through cart
					var itemTitle = finalCart[i].title;
					var itemArtist = finalCart[i].artist;
					var itemQty = finalCart[i].qtyOrdered;
					var itemAmount = finalCart[i].price;
					itemAmount.toFixed(2);
					var itemId = finalCart[i].id;
					var price = itemAmount;
					var totalPrice = finalCart[i].totalPrice;
					totalPrice.toFixed(2); 
				    finalTotal += totalPrice;
					
					//	Calculate tax and grand total 
					var tax = finalTotal * .07;
					var grandTotal = finalTotal;
					grandTotal += tax;
				
					message += '<tr><td>' + itemTitle + '</td>';
					message += '<td>' + itemArtist + '</td>';
					message += '<td><input type="number" class="orderQty" style="width:50px;" id="' + itemId + '" name="quantity" value="' + itemQty + '" min="1" max="5"></td>'
					message += '<td>$' + itemAmount + '</td>';
					message += '<td>$' + totalPrice + '</td>';
					message += '<td style="text-align:center;"><a href="" id="trash"><img src="img/trash.png" class="remove" id="' + itemId + '"></a></td></tr>';
					
				} // end of for
					message += '<tr style="line-height: 200%;border-top: 2px solid #999;"><td colspan="4"><b>Total</b></td><td>' + '$<b>' + finalTotal.toFixed(2) + '</b></td><td></td></tr>';
					message += '<tr style="line-height: 200%;"><td colspan="4"><b>Tax(7%)</b></td><td>' + '$<b>' + tax.toFixed(2) + '</b></td><td></td></tr>';
					message += '<tr style="font-size:1.5em;"><td colspan="4"><b>Grand Total</b></td><td>' + '$<b>' + grandTotal.toFixed(2) + '</b></td><td></td></tr>';
					
					message += '</table></fieldset>';
					U.$('cartTextItems').innerHTML = message;
				
				
				initButtons();
				return false;
} // end of displayCart function


// Remove from Cart Function
		function removeItem(e) {
			'use strict';
			if (typeof e == 'undefined') var e = window.event;
			
				// Declare variables used in function
				var target = e.target || e.srcElement;
				// get cart 
				var removeItem = getCart();
				var id = target.id;
				
				
				// search database for item id match, save in a temp array and push to global cart array
				for(var i = 0; i < removeItem.length; i++){
					if(id == removeItem[i].id){
						var remove = removeItem.splice(i,1);
					} // end of if
				} // end of loop
				
				sessionStorage.setItem('usersCart', JSON.stringify(removeItem));
				// alert user of success
				alert('Item has been removed from your cart');
				
				displayCart();								
		} // end of remove cart function

// Update Quantity Cart Function		
		function updateQty(e) {
			'use strict';
			if (typeof e == 'undefined') var e = window.event;
			// Declare variables used in function
			  var target = e.target || e.srcElement;
			  var id = target.id;
			  var newQty = getCart();			
				
				for(var x = 0; x < newQty.length; x++){
					var newItemAmount = newQty[x].price;
					var changedQty = U.$(id).value;
					
					  if(id == newQty[x].id){
						var updateCurrentPrice = changedQty * newItemAmount; 
						newQty[x].totalPrice = updateCurrentPrice; 
						newQty[x].qtyOrdered = changedQty; 				
					  }
				}
				
				alert('Quantity has been updated');
				sessionStorage.setItem('usersCart', JSON.stringify(newQty));
				
			displayCart();					
		} // end of update function  */


	
	// QUANTITY BUTTON --> EVENT
		function qtyButton(){
			var orderQty = document.getElementsByClassName("orderQty");
			for(var i=0;i<orderQty.length;i++){	
				U.addEvent(orderQty[i], 'change', updateQty);
			}
		} // end of qty button event listener  */

		
		// REMOVE FROM CART BUTTON --> EVENT
		function removeButton(){
			'use strict';
			var remove = document.getElementsByClassName("remove");
			for(var i = 0, count = remove.length; i < count; i++) {
				U.addEvent(remove[i], 'click', removeItem);
			}
		} // end of add button event listener					

// Call event listener functions
		function initButtons(){
			qtyButton();
			removeButton();
		}
		
	function initCart() {
	
		if(!sessionStorage.getItem('loggedIn')) {
			alert('You are not logged in. Redirecting you to login page now...');
			window.location.href = 'login.html';
		}else{
			displayCart();
		}
}


// Assign an event listener to the window's load event:
window.onload = initCart();