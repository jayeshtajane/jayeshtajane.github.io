var ipInfo;

var myform = $("form#contact-form");
myform.submit(function(event){
	event.preventDefault(); 
    console.log("OK");

	var params = myform.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(params.email)) {
        $("#email-alert").attr('hidden', true);
    }
    else {
        $("#cemail").focus();
        $("#email-alert").attr('hidden', false);
        return false;
    }

    if(params.name.trim().length >= 2) {
        $("#name-alert").attr('hidden', true);
    }
    else {
        $("#cname").focus();
        $("#name-alert").attr('hidden', false);
        return false;
    }

    if(params.message.length > 5) {
        $("#msg-alert").attr('hidden', true);
    }
    else {
        $("#cmessage").focus();
        $("#msg-alert").attr('hidden', false);
        return false;
    }

    // Change to your service ID, or keep using the default service

    params.message += "|||||||||||||||||||||||||";
    params.message += ipInfo;
  
    var service_id = "default_service";

    var template_id = "contact_email";
    let btn = myform.find("button");
    btn.html(`
        <div class="spinner-border spinner-border-sm text-dark" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        Sending...
    `);

    btn.attr('disabled', true);
    emailjs.send(service_id, template_id, params)
  	.then(function(){ 
        //alert("Sent!");
        $("#small-model").modal();
        btn.text("Send Message");
        btn.attr('disabled', false);
    }, function(err) {
        //alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        $("#email-msg").text('Message sending failed!');
        $("#small-model").modal();
        btn.text("Send Message");
        //myform.find("button").text("Send");
    });

    return false;
});


var accessform = $("form#access-form");
accessform.submit(function(event){
    event.preventDefault(); 

    var params = accessform.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    $.getJSON('https://ipapi.co/json/', function(data) {
        ipInfo = JSON.stringify(data, null, 2);

        params.message = ipInfo;

        var service_id = "default_service";
        var template_id = "access_portfolio";

        emailjs.send(service_id, template_id, params)
        .then(function(){ 
            console.log("OK M");    
        }, function(err) {
            console.log("NOT OK M");
        });
    });
})