
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDlBP2VW7k2nslT7f51V6LoZH2bB-c3Y7k",
      authDomain: "akshajkwitter.firebaseapp.com",
      databaseURL: "https://akshajkwitter-default-rtdb.firebaseio.com",
      projectId: "akshajkwitter",
      storageBucket: "akshajkwitter.appspot.com",
      messagingSenderId: "692808469084",
      appId: "1:692808469084:web:66958cafa99d7c3bfb3499"
    };
  
  function addUser(){
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose: "Adding User"
        });
      }
getData();
