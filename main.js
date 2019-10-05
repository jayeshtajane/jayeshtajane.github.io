/*function userStatus() {
    if(navigator.onLine) {
        alert('online');
    }
    else {
        alert('offline');
    }
}
setInterval(function(){
	userStatus();
},5000);*/

document.addEventListener("offline", function(){ navigator.notification.alert("No connection found") }, false);
document.addEventListener("offline", function(){ alert("No connection found") }, false);

$(document).ready(function() {
	// navbar = $("#navbar");
	// $(".scroll-home").click(function(e) {
	// 	e.preventDefault();

	// 	$([document.documentElement, document.body]).animate({
	//         scrollTop: $("#home").offset().top
	//     }, 2000);
	// })


	$(".scroll-home").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	        window.location.hash = hash;
	      });
	    } 
  	});

  	$(".scroll-about").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	        window.location.hash = hash;
	      });
	    } 
  	});

  	$(".scroll-project").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	        window.location.hash = hash;
	      });
	    } 
  	});

  	$(".scroll-contact").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	        window.location.hash = hash;
	      });
	    } 
  	});
})