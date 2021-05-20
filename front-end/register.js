function register(){
    let firstnameValue = document.getElementById("firstname").value
    let lastnameValue = document.getElementById("lastname").value
    let emailValue = document.getElementById("email").value
    let usernameValue = document.getElementById("username").value
    let passwordValue = document.getElementById("password").value
    
    let registerData = {
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        username: usernameValue,
        password: passwordValue
      
    }

    axios.post('http://localhost:3000/auth/register', registerData)
        .then((response) => {
            console.log(response);

            window.location.href = "./login.html"
        })

        
        
}

/*async function register() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
  
    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password
    };
    /**
     * Send request pattern
     */
  
    /*const res = await axios.post("http://localhost:3000/auth/login", user);
    const data = await res.data;
    if (data.status) {
      const userID = data.userID;
      localStorage.setItem("userID", userID);
      localStorage.setItem("logined", true);
      window.location.href = "./login.html";
    } else {
      alert("Please try again");
    }
  }*/