// Firebase configuration
var config = {
    apiKey: "AIzaSyB9aX2_bbCLVuOCstchSGpLGkohSdqPadA",
    authDomain: "sine-s-portfolio.firebaseapp.com",
    databaseURL: "https://sine-s-portfolio.firebaseio.com",
    projectId: "sine-s-portfolio",
    storageBucket: "sine-s-portfolio.appspot.com",
    messagingSenderId: "224641990186",
    appId: "1:224641990186:web:4a330ffce32a900458cd53",
    measurementId: "G-DD5NM9LQKY"
  };
// Initialize Firebase
      firebase.initializeApp(config);

//Reference messages collection
    var messagesRef = firebase.database().ref("messages")


// Listen for form submit 
    document.getElementById('contact-form').addEventListener('submit', submitForm);


// submit form 
    function submitForm(e){
        e.preventDefault();
        

//Get values

     var name = getInputVal('name');
     var email = getInputVal('email');
     var message = getInputVal('message');

// Save message 	
     saveMessage(name, email, message)


// Clear form
document.getElementById('contact-form').reset();

}



//Function to get form values
    function getInputVal(id){
        return document.getElementById(id).value;

}



// Save message to firebase
    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message:message

        });
     }