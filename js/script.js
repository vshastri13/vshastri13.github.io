// typing animation
var typed = new Typed(".typing",{
    strings:["","Data Analyst","BI Analyst","Data Scientist"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
emailjs.init("vJoEJMGTfm2M8xDto");
function SendMail(){
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_q81kj9p", "template_9hfewqr", params).then(function(res){
        alert("Success!"+ res.status);
    // }, function(error) {
    //     alert("Failed to send email. Please try again.");
    //     console.error("EmailJS Error:", error);
});
}
