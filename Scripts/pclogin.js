if (screen.width >= 890) {
    document.location = "login.html";
}
function requirea7a(X){
    if (X == 1) {
        var slogbox = document.forms["dinomi"]["loveu"].value;
        if (slogbox == "")
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
       var slogbox1 = document.forms["form1"]["text1"].value;
       if (slogbox1 == "")
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