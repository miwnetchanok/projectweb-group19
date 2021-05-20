/*function login(){
    let usernameValue = document.getElementById("uername").value
    let passwordValue = document.getElementById("password").value
    
    let loginData = {
        uername: usernameValue,
        password: passwordValue
    }

    axios.post('http://localhost:4000/login', loginData)
        .then(async (response) => {
            console.log(response);
            window.location = "https://news.sanook.com/lotto/check/02052564/#476830,298121"
            localStorage.setItem('username', response.data.user);
        })

        .catch((error) => {
            console.log(error.response)
        })
}*/

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = {
      username: username,
      password: password,
    };
    /**
     * Send request pattern
     */
  
    const res = await axios.post("http://localhost:3000/auth/login", user);
    const data = await res.data;
    if (data.status) {
      const userID = data.userID;
      localStorage.setItem("userID", userID);
      localStorage.setItem("logined", true);
      window.location.href = "./home.html";
    } else {
      alert("Please try again");
    }
  }