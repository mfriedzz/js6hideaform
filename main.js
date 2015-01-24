
var socialform = {};
$(document).on('ready', function() {
  
  $(".form").submit(function (event) {
  	alert("Here is the event");

  	socialform.firstname = form.firstname;
  	socialform.lastname = form.lastname;
  	socialform.bio = form.bio;
  	socialform.favoritebooks = form.favoritebooks;
  	socialform.javascriptlibraries = form.javascriptlibraries;
  
  });

 
  	//console.log("here is socialform", socialform.firstname);
});