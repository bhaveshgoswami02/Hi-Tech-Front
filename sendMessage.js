var firebaseConfig = {
    apiKey: "AIzaSyBfi_sKcZ6ewaEgfb2YQEYsxWoqzErY0EU",
    authDomain: "hi-tech-223.firebaseapp.com",
    databaseURL: "https://hi-tech-223.firebaseio.com",
    projectId: "hi-tech-223",
    storageBucket: "hi-tech-223.appspot.com",
    messagingSenderId: "401994959902",
    appId: "1:401994959902:web:c99d240058ff0e5546f20f",
    measurementId: "G-NC2SMMN4DC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
document.getElementById("form").addEventListener("submit",(e)=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    e.preventDefault();
    console.log(name,email,subject,message)
    send(name,email,subject,message)
    form.reset()
})


function send(name,email,subject,message){
    let data2 = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    }
    console.log(data2)
    firebase.firestore().collection("contact-form").add(data2).then(res=>{
        swal("Message Sent!", "Thank you for contacting, we will contact you!", "success");
    })
    // $(document).ready(function(){
    //       $.post("https://us-central1-splixcube-f60b7.cloudfunctions.net/sendMail",data2,
    //       function(data,status){
    //           console.log("Message Sent",status,data)
    //           swal("Message Sent!", "Thank you for contacting, we will contact you!", "success");
    //       });
    // });
    
}