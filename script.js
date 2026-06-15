// Explore Button
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function(){
    window.location.href = "#services";
});

// Booking Buttons
const bookingButtons = document.querySelectorAll(".book-btn");

bookingButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("Service Booked Successfully!");

    });

});

