
var auth={
    Authenticate(){
        if(localStorage.token == "User Not Found" || localStorage.token === null || localStorage.token === "" || localStorage.getItem("token") === null){
          console.log("User not authenticated;");
          
          return false;
        }else{
          console.log("User is authenticated")
          return true;
        }
      },
     
}

export default auth