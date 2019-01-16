// YOUR CODE HERE
// Event listener for form submission
$("sendEmail").click(function() {
  var firstName = $("firstName").val();

  $(".modal-body").html(
    "Thank you, " + firstName + ".Your mesage has been sent!"
  );

  $(".form-control").val("");
});

// Save the first name as a variable

// Set HTML of .modal-body

// Clear all fields in form
