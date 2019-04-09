// Initialize Firebase
var config = {
  apiKey: "AIzaSyB32ySGs8nGg7-uV_heEpYeom3U_3TX5Ec",
  authDomain: "train-schedule-a075a.firebaseapp.com",
  databaseURL: "https://train-schedule-a075a.firebaseio.com",
  projectId: "train-schedule-a075a",
  storageBucket: "train-schedule-a075a.appspot.com",
  messagingSenderId: "341874314430"
};
firebase.initializeApp(config);

// save response to variable
var database = firebase.database();

// Set initial variables for input fields
var name = "";
var destination = "";
var frequency = 0;
// time = first time in
var time = "00:00";

setTimeout(function(){
  window.location.reload(true);
}, 60000);

// Submit button event listener
$("#addTrain").on("click", function (event) {

  // prevent refresh
  event.preventDefault();

  // retrieve and store user input in 
  // variables 
  name = $("#train-name-input").val().trim();
  destination = $("#destination-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  time = $("#time-input").val().trim();

  // and on firebase
  database.ref().push({
    name: name,
    destination: destination,
    frequency: frequency,
    time: time
  });

  $(".form-control").val("");
});

// set interval for one minute to update page
database.ref().on("child_added", function (childSnapshot) {
  // Calulate missing info, Next Arrival Time & minutes until arrival
  var firstTimeConverted = moment(childSnapshot.val().time, "HH:mm").subtract(1, "years");

  var currentTime = moment();
 
  var diffTime = currentTime.diff(moment(firstTimeConverted), "minutes");
 
  var tRemainder = diffTime % childSnapshot.val().frequency;

  var tMinutesTillTrain = childSnapshot.val().frequency - tRemainder;

  if (tMinutesTillTrain === 1) {
    tMinutesTillTrain = "Arriving";
  }
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  var nextTrainTime = moment(nextTrain).format("LT")
  // update html to display proper trains attach to table
  $("#myTable").after("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + nextTrainTime + "</td><td>" + tMinutesTillTrain + "</td></tr>");
  // Add in error handler
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});







































