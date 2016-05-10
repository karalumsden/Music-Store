// search.js

function saveSearch() {
    'use strict';
// Get reference to the search name:
	var searchName = document.getElementById('search').value;
	localStorage.setItem('name', searchName);
} // End of saveSearch() function.

// Function called when the window has been loaded.
function init() {
    'use strict';
    
    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('searchForm');
        searchForm.onsubmit = saveSearch;
    }

} // End of init() function.
document.getElementById("searchBtn").addEventListener("click", init);