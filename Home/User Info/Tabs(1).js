// New Document for TrackOrder Tabs Hide Content///

$(document).ready(function(){
	// When page loads...:
	$("div.trackorder .ready").hide(); // Hide all content
  
	/* Check for hashtag in url */
	if (window.location.hash.length>0) {
		console.log(window.location.hash);
		/*find the menu item with this hashtag*/
		$( ".tracktab li a" ).each(function() {
			if ( $( this ).attr("href") == window.location.hash )
				$( this ).parent().addClass("current").show(); // Activate page in menu
		});
		$(window.location.hash).fadeIn(); // Fade in the active page content
	}
	else { /* no hashtag: */
	  $(".tracktab li:first").addClass("current").show(); // Activate first page
	  $("div.trackorder .ready:first").show(); // Show first page content
	}

	// On Click Event (within list-element!)
	$(".tracktab li").click(function() {
		$(".tracktab li").removeClass("current"); // Remove any active class
		$(this).addClass("current"); // Add "current" class to selected page
		
		$("div.trackorder .ready").hide(); // Hide all content

    // Find the href attribute value to identify the active page:
		var activePage = $(this).find("a").attr("href"); 
		$(activePage).fadeIn(); // Fade in the active page
	}); // end click method
	
}); // end $(document).ready method