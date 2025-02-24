// get data from local storage
const email = localStorage.getItem("email")
const password = localStorage.getItem("password")

// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('max-h-0');
    mobileMenu.classList.toggle('max-h-[300px]');
    mobileMenu.classList.toggle('py-4');
});

// Email subscription
const subBtn = document.getElementById("subBtn");
const emailInput = document.getElementById("emailInput");

subBtn.addEventListener("click", () => {
    // condition check for email varificatiom
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length !== 0) {
        if (emailRegex.test(email)) {
            emailInput.style.border = "2px solid green";
            subscribe(email);
        } else {
            emailInput.style.border = "2px solid red";
        }
    } else {
        emailInput.style.border = "2px solid red";
    }
});

function subscribe(email) {
    const name = email.split("@")[0];
    Swal.fire({
        title: `Good job!`,
        text: `${name}, Now You are in our Family!`,
        icon: "success",
        confirmButtonText: "OK"
    });
}


function redirect() {
    window.location.href = "#home";
}

// signup & sign out button
let signup = document.getElementById("signupDiv");
let logout = document.getElementById("logoutDiv");
function chg() {
    window.location.href = "login.html"
}

if(email.length > 0 && password.length > 0){
    signup.classList.add("hidden")
    logout.classList.remove("hidden")
    
}


function logoutBtn(){
    
    Swal.fire({
        title: `goodbye`,
        text: `${email.split("@")[0]}, see you soon!`,
        imageUrl: "img/image.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "OK"
    });
    setTimeout(()=>{
        signup.classList.remove("hidden");
    logout.classList.add("hidden");
    },1000)
}