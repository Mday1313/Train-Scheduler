
    
// Initialize moment.js



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



  var database = firebase.database(); 



  // Set initial variables for input fields
  
  var name = "";
    var destination = "";
    var frequency = 0;
// time = first time in
    var time = "00:00";  

  
  // Submit button event listener
  $("#addTrain").on("click", function(event) {
  
    
      // prevent refresh
      event.preventDefault();
  
      // retrieve and store user input in 
      // variables 
      name = $("#train-name-input").val().trim();
      destination = $("#destination-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      time = $("#time-input").val().trim();
      // console.log(name);
      // console.log(destination);
      // console.log(frequency);
      // console.log(time);
          
          // and on firebase
          database.ref().push({
              name: name,
              destination: destination,
              frequency: frequency,
              time: time
          });
  
      $(".form-control").val("");
      });
  
  
  // create listener to watch for Firebase changes and for loading initial setup 
//  collect time from server
  
   // set interval for one minute to update page
 
  database.ref().on("child_added", function(childSnapshot) {
      // console log snapshot.val() to be sure proper info is collected
      
      console.log(childSnapshot.val());
       console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().frequency);
      console.log(childSnapshot.val().time);
// Calulate missing info
    // Next Arrival
    var firstTimeConverted = moment(childSnapshot.val().time, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

   var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
   console.log("DIFFERENCE IN TIME: " + diffTime);

   var tRemainder = diffTime % childSnapshot.val().frequency;
   console.log(tRemainder);

   var tMinutesTillTrain = childSnapshot.val().frequency - tRemainder;

   if (tMinutesTillTrain === 1) {
     tMinutesTillTrain = "Arriving";
   }
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    var nextTrainTime = moment(nextTrain).format("LT")
  //   // Minutes away
  
      // update html to display proper trains
      $("#myTable").after("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + nextTrainTime + "</td><td>" + tMinutesTillTrain + "</td></tr>");

    
      // 
      // Add in error handler
    }, function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
  
    });

    
 
  // function to access current time 
      // update next arrival time every minute
      // update Minutes away every minute
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
















