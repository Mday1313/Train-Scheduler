
    
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
    var time = "";
  
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
      console.log(name);
      console.log(destination);
      console.log(frequency);
      console.log(time);
          
          // and on firebase
          database.ref().set({
              name: name,
              destination: destination,
              frequency: frequency,
              time: time
          });
  
      $(".form-control").val("");
      });
  
  
  // create listener to watch for Firebase changes and for loading initial setup 
  database.ref().on("value", function(snapshot) {
      // console log snapshot.val() to be sure proper info is collected
      
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().frequency);
  
      // change html to display proper trains
  
  
  
    });
  // function to access current time 
      // update next arrival time every minute
      // update Minutes away every minute
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
















