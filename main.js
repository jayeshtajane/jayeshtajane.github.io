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