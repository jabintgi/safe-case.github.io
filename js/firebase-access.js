// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHEGF6y5KovJYZQjwdBsNWDwQyRui8d8Y",
    authDomain: "safe-case-123.firebaseapp.com",
    databaseURL: "https://safe-case-123.firebaseio.com",
    projectId: "safe-case-123",
    storageBucket: "safe-case-123.appspot.com",
    messagingSenderId: "976295599501"
  };
  firebase.initializeApp(config);
z
//connecting firebase database to root element
var db=firebase.database().ref();
function login()
{
var email=document.getElementById("email").value;
var pwd=document.getElementById("pwd").value;
    if(email != '' && pwd != '')
        {
            alert(email+","+pwd);
            db.child(email).set(pwd);
        }
}