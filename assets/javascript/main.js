
    
// Initialize moment.js


//      // Initialize Firebase
 var config = {
    apiKey: "AIzaSyACJnS8k6G19bohFmZLZ6AaN_N8aKZO4Ow",
    authDomain: "train-scheduler-4b6c6.firebaseapp.com",
    databaseURL: "https://train-scheduler-4b6c6.firebaseio.com",
    projectId: "train-scheduler-4b6c6",
    storageBucket: "train-scheduler-4b6c6.appspot.com",
    messagingSenderId: "259183228175"
  };
  firebase.initializeApp(config);
//   // Variable to reference the database 
//   var database = firebase.database();



// Set initial variables for input fields

  var name = "";
  var destination = "";
  var frequency = 0;
  

// Submit button event listener
$("#addTrain").on("click", function(event) {

    // prevent refresh
    event.preventDefault();

    // retrieve and store user input in 
    name = $("#train-name-input").val().trim();
    console.log(name);
        // variables 
            // 
        
        // and on firebase

    });
// create listener to watch for Firebase changes and for loading initial setup 

    // console log snapshot.val() to be sure proper info is collected

    // change html to display proper trains

    // Add in error handler



// function to access current time 
    // update next arrival time every minute
    // update Minutes away every minute


































