
const checkLoginForm = () => {
    let user = $("#signin-username").val();
    let pass = $("#signin-password").val();
 
    console.log(user,pass)
 
    if (user === 'user' && pass === 'pass') {
       // logged in
       console.log('success');
       sessionStorage.userId = 3;
       $("#signin-form")[0].reset();
    } 
    else if(user === 'user' && pass !== 'pass'){
       // not logged in
       console.log('failure Incorrect password');
       sessionStorage.removeItem('userId');
       document.getElementById('output').innerHTML ="Sorry, password is incorrect! Please enter again.";
       document.getElementById('output').style.background ="#fff";
    } 
    else if(user !== 'user' && pass === 'pass'){
      // not logged in
      console.log('failure Incorrect username');
      sessionStorage.removeItem('userId');
      document.getElementById('output').innerHTML ="Sorry, username is incorrect! Please enter again.";
      document.getElementById('output').style.background ="#fff";
   }  
   else if(user !== 'user' && pass !== 'pass'){
      // not logged in
      console.log('failure Incorrect username');
      sessionStorage.removeItem('userId');
      document.getElementById('output').innerHTML ="Sorry, username and password are incorrect! Please enter again.";
      document.getElementById('output').style.background ="#fff";
   } 
 
    checkUserId();
 }
 
 const checkUserId = () => {
    let p = ["#signin-page","#signup-page",""];
 
    if (sessionStorage.userId === undefined) {
       // not logged in
       if(!p.some(o => o === window.location.hash))
          $.mobile.navigate("#signin-page");
    } else {
       // logged in
       if(p.some(o => o === window.location.hash))
          $.mobile.navigate("#explore-page");
          
    }
 }