// searchResults.js
var myAlbums = storeAlbums();
var name = localStorage.getItem('name');


function initGlobal() {
	
		if(!sessionStorage.getItem('loggedIn')) {
			alert('You are not logged in. Redirecting you to login page now...');
			window.location.href = 'login.html';
		} else {
			searchData();
		}
}


function searchData() {
    'use strict';
    
		
	// check localStorage search name against database
	var found = false;
	for (var i = 0; i < myAlbums.length; i++) {
                if (name == myAlbums[i].artist && myAlbums[i].Quantity > 0) {
					found = true;
                    var newResult = document.createElement("li");
                    var node = document.createTextNode("Title: " + myAlbums[i].title + " by " + myAlbums[i].artist);
                    newResult.appendChild(node);
                    var element = U.$("searchResults");
                    element.appendChild(newResult);
    			} 
	}// End of For Loop
	if (!found) {
                	var newResult = document.createElement("h3");
               		var node = document.createTextNode("Sorry no results found");
                	newResult.appendChild(node);
                	var element = U.$("div1");
                	element.appendChild(newResult);
				} 
}// End of searchData Function

// Assign an event listener to the window's load event:
window.onload = initGlobal;

