function storeAlbums() {
var albums = [
{id: '013', 
title: 'The Live Anthology', 
artist: 'Tom Petty & the Heartbreakers', 
price: 18.99, 
releaseDate: 'November 23, 2009', 
Quantity: 15, 
qtyOrdered: 1,
totalPrice: 18.99,
Tracklisting: ['Nightwatchman','Even The Losers','Here Comes My Girl','A Thing About You','I\'m In Love','I\'m A Man','Straight Into Darkness','Breakdown','Something In The Air','I Just Want To Make Love To You','Drivin\' Down To Georgia','Lost Without you', 'Refugee']},

{id: '017', 
title: 'Way Out Here', 
artist: 'Josh Thompson', 
price: 7.99, 
releaseDate: 'February 23, 2010', 
Quantity: 15, 
qtyOrdered: 1, 
totalPrice: 7.99,
Tracklisting: ['Beer On The Table','Blame It On Waylon','Sinner','Won\'t Be Lonely Long','Always Been Me','A Name In This Town','Way Out Here','You Ain\'t Seen Country Yet','Back Around','Back Around','I Won\'t Go Crazy']},

{id: '018', 
title: 'Tremolo', 
artist: 'The Pines', 
price: 14.99, 
releaseDate: 'August 11, 2009', 
Quantity: 15, 
qtyOrdered: 1, 
totalPrice: 14.99,
Tracklisting: ['Pray Tell','Heart & Bones','Shine On Moon','Lonesome Tremolo Blues','Meadows of Dawn','Skipper and His Wife','Spike Driver Blues','Behind the Time','Avenue of the Saints','Shiny Shoes']},

{id: '019', 
title: 'Live From Freedom Hall', 
artist: 'Lynyrd Skynyrd', 
price: 16.99, 
releaseDate: 'June 21, 2010', 
Quantity: 15, 
qtyOrdered: 1, 
totalPrice: 16.99,
Tracklisting: ['Travelin\'n Man','Workin\'','What\'s Your Name','That Smell','Simple Man','Down South Jukin\'','The Needle And The Spoon','The Ballad Of Curtis Loew','Gimme Back My Bullets','Tuesday\'s Gone']},

{id: '020', 
title: 'Achin & Shakin', 
artist: 'Laura Bell Bundy', 
price: 12.99, 
releaseDate: 'April 13, 2010', 
Quantity: 15, 
qtyOrdered: 1,
totalPrice: 12.99, 
Tracklisting: ['Drop On By','Curse The Bed','Cigarette','Please','Homecoming Queen','When It All Goes South','Giddy On Up','I\'m No Good','Rebound','Boyfriend?','If You Want My Love', 'Everybody']},

{id: '021', 
title: 'Here I Am', 
artist: 'Marvin Sapp', 
price: 14.99, 
releaseDate: 'March 16, 2010', 
Quantity: 15, 
qtyOrdered: 1, 
totalPrice: 14.99,
Tracklisting: ['I Came (Intro)','I Came','Keep Holding On','Fresh Wind','Comfort Zone','Walt','Wait','He Has His Hands On You','Don\'t Count Me Out','The Best In Me','Here I Am', 'Praise You Forever', 'More Than A Conqueror']},

{id: '022', 
title: 'Just James', 
artist: 'J. Moss', 
price: 15.99, 
releaseDate: 'August 25, 2009', 
Quantity: 15, 
qtyOrdered: 1, 
totalPrice: 15.99,
Tracklisting: ['I Gave It Up','So Into You','Restored','Anointing','Sweet Jesus','No More','God Happens','Holy One','Rebuild','Just James']}
]; // end of album object array
  return albums;
}

function initGlobal() {
	
		if(!sessionStorage.getItem('loggedIn')) {
			alert('You are not logged in. Redirecting you to login page now...');
			window.location.href = 'login.html';
		}else{
			displayTitle();
		}
}

//display album titles in an alert
function displayTitle() {
	var theAlbums = storeAlbums();
	for (var i = 0, count = theAlbums.length; i < count; i++) {
	 	alert('We currently have ' + theAlbums[i].title + ' by ' + theAlbums[i].artist);	
}}

// Assign an event listener to the window's load event for store.html
window.onload = initGlobal;