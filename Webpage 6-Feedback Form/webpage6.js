alert("Welcome to the feedback page! Here, you can give us feedback so we can improve our website!")
//This is a message when the user accesses the feedback webpage, this wiull be displayed

function validateform(){  //This is a function that validates the feedback form
    
    var FullName = document.feedbackform.FullName.value;  //I have set the full name is equal to the full name name in the input 
    var email = document.feedbackform.email.value;   //I have set the email is equal to the email name in the input 
    var feedback = document.feedbackform.feedback.value;  //I have set the feedback to the feedback name in the input

    if (FullName==null || FullName==""){   //If the full name is equal to an invalid value or the full name is equal to an empty input
      alert("Enter your full name.");  //This alert will be shown to the user, saying to the user needs to enter their full name
      return false;  //This stops the website from submitting the feedback form
    }else if(email == ""){  //Moreover, if the email is equal to an empty input
      alert("Enter your email.");  // this alert will be shown, saying to the user to enter their email 
      return false;  //This stops the website from submitting the feedback form
      }else if(feedback == ""){ //Futhermore if the feedback is equal to an empty input
        alert("Enter your feedback") //An alert will be shown, saying to the user to enter their feedback
        return false; //This stops the website from submitting the feedback form
      }  }




      