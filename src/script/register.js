import axios from "../api/axios.js"

const $authForm = document.querySelector("#auth-form")
const $formContent = document.querySelector(".auth-content")
const $togglePassword = document.querySelector("#toggle-passowrd")
const $passwordInput = document.querySelector("#auth-password")
const $nameInput = document.querySelector("#auth-name")
const $emailInput = document.querySelector("#auth-email")


$togglePassword.addEventListener("click", () => {
    const type = $passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    $passwordInput.setAttribute('type', type);
});


 function User(n, e, p) {
        this.name = n,
        this.email = e,
        this.password = p
    }


const createNewUser = async (e) => {
    e.preventDefault();

const passowrdValue = $passwordInput.value;
const emailValue = $emailInput.value;
const nameValue = $nameInput.value;

const formValues = new User(nameValue, emailValue, passowrdValue)
    

    
    try{
        const response = await axios.post("/user/register", formValues);
        const data = response.data;
        console.log(data);
            $formContent.innerHTML = "We are redirecting you, please wait..."
            setTimeout(() => {
                location.replace(location.origin + "/index.html");
            }, 3000);
        
    }
    catch(error){
        console.log(error)
    }
    
}

$authForm.addEventListener("submit", createNewUser);



