// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUclR7k-RqBOk5a3mUzv2Xf_gquw5lXJs",
    authDomain: "kwitter-1-ee87c.firebaseapp.com",
    databaseURL: "https://kwitter-1-ee87c-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-ee87c",
    storageBucket: "kwitter-1-ee87c.appspot.com",
    messagingSenderId: "325044352487",
    appId: "1:325044352487:web:ebb342134eaa7dedf3b942"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

// function addUser()
// {
//     user_name = document.getElementById("user_name").value;
//     firebase.database().ref("/").child(user_name).update({
//         purpose : "adding user"
//     });
    
//     localStorage.setItem("user_name", user_name);

//     window.location = "chat_room.html";
    
// }

function send() {
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("message").value = "";
}

function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}



