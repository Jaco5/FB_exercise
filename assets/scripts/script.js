// Initialize Firebase 
var config = {
    apiKey: "AIzaSyCcvsoog82Y-hAyVHSn8zq7xfXxIkdCzqs",
    authDomain: "fb-exercise.firebaseapp.com",
    databaseURL: "https://fb-exercise.firebaseio.com",
    projectId: "fb-exercise",
    storageBucket: "fb-exercise.appspot.com",
    messagingSenderId: "399842946176"
  };
  

firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function (childSnap) {
    
    $("#table-data").append("<tr><td>" + childSnap.val().name + "</td><td>" + childSnap.val().destination + "</td><td>" +
        childSnap.val().initialDepartur + "</td><td>" + childSnap.val().totalMonths + "</td><td>" + childSnap.val().frequency + "</td><td>" + childSnap.val().totalBilled + "</td></tr>");

});

$(document).ready(function () {
    $("#add-itinerary").on("click", function () {

        event.preventDefault();

        var name = $("#engine-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var initialDeparture = moment($("#departure-input").val().trim(),"hh:mm:ss");
        var initialDepartur = initialDeparture;
        var frequency = $("#freq-input").val().trim();
        // var difference = moment().diff(moment(initialDeparture), "minutes")
        // console.log(difference);
        // var modulus = difference % frequency;
        // console.log(modulus);
        // var timeTill = frequency - modulus;
        // console.log(timeTill);
        // var nextTime = moment() + modulus;

        database.ref().push({
            name: name,
            destination: destination,
            initialDeparture: initialDepartur,
            frequency: frequency,
            // timeTill: timeTill,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,

        });
    });
});
