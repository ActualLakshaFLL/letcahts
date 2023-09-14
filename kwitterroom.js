//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyC6YW5ZU5hoQG0f8SR1mILYXfZIsELOFeM",
  authDomain: "kwitter-e9d8a.firebaseapp.com",
  databaseURL: "https://kwitter-e9d8a-default-rtdb.firebaseio.com",
  projectId: "kwitter-e9d8a",
  storageBucket: "kwitter-e9d8a.appspot.com",
  messagingSenderId: "571310001833",
  appId: "1:571310001833:web:c6a47271fdeb80b16363b8",
  measurementId: "G-32FMN90MGP"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitterpage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitterpage.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

//function send()
//{
  //msg = document.getElementById("msg").value;
  //firebase.database().ref(room_name).push({
        //name:user_name,
        //message:msg,
        //like:0
  //});
  //document.getElementById("msg").value = " ";
//}