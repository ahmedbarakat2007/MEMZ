if (screen.width <= 890) {
    document.location = "loginS.html";
}





function requirea7a(X){
    if (X == 1) {
        var logbox = document.forms["dinomi"]["loveu"].value;
        if (logbox == "")
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
       var logbox1 = document.forms["form1"]["text1"].value;
       if (logbox1 == "")
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