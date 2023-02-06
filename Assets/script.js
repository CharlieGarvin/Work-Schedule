// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  var dayJsObject = dayjs();
  // console.log(dayJsObject.format("M/D/YYYY h:mm A"));

  var inpKey = document.getElementById("inpKey");
  var inpValue = document.getElementById("inpValue");
  var btnInsert = document.getElementById("btnInsert");
  var lsOutput = document.querySelectorAll("lsOutput");
  // var dateDisplay = document.getElementById("currentDay");

  $(function () {
    $(btnInsert).click(function(){
      var key = inpKey.textContent;
      var value = inpValue.value;

      console.log(key);
      console.log(value);

      if (key && value) {
        localStorage.setItem(key, value);
      }
    });

    for (let i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);

      lsOutput.innerHTML += `${key}: ${value}`;
    }
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
  
  
  // make statement if == present time bg-c is red otherwise other colors
  // probably will need to use event delegation in the statement
  if (  $(".present").css('background-color', 'red')){
  } else if( $(".futre").css('background-color', 'green')) {
  } else ( $(".past").css('background-color', 'grey')) ;
  
  
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  
    // TODO: Add code to display the current date in the header of the page.
    document.getElementById('currentDay').innerHTML = dayJsObject.format('M/D/YYYY');
  });
}

)