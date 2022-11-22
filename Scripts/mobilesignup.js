if (screen.width <= 890) {
    document.location = "signupS.html";
}





function requirea7a(X){
    if (X == 1) {
        var upbox = document.forms["dinomi"]["loveu"].value;
        if (upbox == "")
        {
           alert("Please Check If You Type Username or Password");
           return false;
        }
        else 
        {
           return true;
        }
    }
    else if (X == 2) {
      var upbox1 = document.forms["dinomi"]["loveu"].value;
      if (upbox1 == "")
      {
         alert("Please Check If You Type Username or Password");
         return false;
      }
      else 
      {
         return true;
      }
    }
    else if (X == 3) {
      var upbox2 = document.forms["dinomi"]["loveu"].value;
      if (upbox2 == "")
      {
         alert("Please Check If You Type Username or Password");
         return false;
      }
      else 
      {
          return true;
      }
    }
    else
    {
       var upbox3 = document.forms["form1"]["text1"].value;
       if (upbox3 == "")
       {
          alert("Please input a Value");
          return false;
       }
       else 
       {
          return true; 
       }
    }
  
  
}