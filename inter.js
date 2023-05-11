 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAu9QDy7EYA4q5XmVoSfy01OOkpDqiWkOQ",
    authDomain: "iot-n9.firebaseapp.com",
    databaseURL: "https://iot-n9-default-rtdb.firebaseio.com",
    projectId: "iot-n9",
    storageBucket: "iot-n9.appspot.com",
    messagingSenderId: "546934549148",
    appId: "1:546934549148:web:8e02592eced9248fe9db59"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  var database = firebase.database();

    //Den 01
    var btnOn = document.getElementById("btnOnId");
    var btnOff = document.getElementById("btnOffId");

    btnOn.onclick = function(){
      document.getElementById("den1").src = "ledon.png"
      database.ref("/IOT").update({
        "Led": 1
      });
    }
    btnOff.onclick = function(){
      document.getElementById("den1").src = "ledoff.png"
      database.ref("/IOT").update({
        "Led": 0
      });
    }
//----------------------
    //TV 01
    var btnOnTV = document.getElementById("btnOnId_TV");
    var btnOffTV = document.getElementById("btnOffId_TV");

    btnOnTV.onclick = function(){
      document.getElementById("TV1").src = "tv2.png"
      database.ref("/IOT").update({
        "TV1": 1
      });
    }
    btnOffTV.onclick = function(){
      document.getElementById("TV1").src = "tv1.png"
      database.ref("/IOT/").update({
        "TV1": 0
      });
    }
//----------------------
    //AIR 01
    var btnOnAIR = document.getElementById("btnOnId_AIR");
    var btnOffAIR = document.getElementById("btnOffId_AIR");

    btnOnAIR.onclick = function(){
      document.getElementById("AIR1").src = "air2.png"
      database.ref("/IOT").update({
        "Air": 1
      });
    }
    btnOffAIR.onclick = function(){
      document.getElementById("AIR1").src = "air1.png"
      database.ref("/IOT").update({
        "Air": 0
      });
    }
//----------------------
database.ref("/IOT/Temp").on("value", function(snapshot){
  var temp = snapshot.val();
  document.getElementById("nhietdo").innerHTML = temp;
});