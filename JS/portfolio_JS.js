//Smooth scrolling to all links with this Jquery

$(document).ready(function() {
    $("a").on('click', function(event) {
        //This will make sure the this.Link has a value
        if (this.Link !== "") {
            event.preventDefault();

            //store link
            var Link = this.Link;

            //Using the jQuery's animate function for smooth scrolling
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function(){
                window.location.Link = Link;
            });
        }
    });
});

//open and close function forms
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
}