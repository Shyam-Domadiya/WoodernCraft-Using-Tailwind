// login js
const emailInputs = document.getElementById("e1");
const passwordInput = document.getElementById("p1");
document.getElementById("loginBtn").addEventListener("click", (event) => {
    event.preventDefault();
    
    const email = emailInputs.value.trim();
    const password = passwordInput.value.trim();

    // condition check for email varificatiom
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // condition check for password varificatiom
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
        if((!emailRegex.test(email) && passwordRegex.test(password))){
            emailInputs.style.border = "2px solid red";
            passwordInput.style.border = "2px solid green";
        }

        else if((emailRegex.test(email) && !passwordRegex.test(password))){
            emailInputs.style.border = "2px solid green";
            passwordInput.style.border = "2px solid red";
        }

        else{
            emailInputs.style.border = "2px solid red";
            passwordInput.style.border = "2px solid red";
        }
    } 
    
    else {
        emailInputs.style.border = "2px solid green";
        passwordInput.style.border = "2px solid green";
       
        // add data to local storage
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        
        Swal.fire({
            title: "Welcome!",
            text: `${email.split("@")[0]}, Now You are in our Family!`,
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false 
            
        }).then((result) => {
            window.location.href = "index.html"; 
        });
        
        
    }

});



