import axios from "../api/axios.js";
import { saveToLocalStorage } from "../utils/index.js";


alert("Please log in before creating a new article!")

const $authForm = document.querySelector("#auth-form");
const $formContent = document.querySelector(".auth-content")

const $togglePassword = document.querySelector("#toggle-passowrd")
const $passwordInput = document.querySelector("#auth-password")
const $emailInput = document.querySelector("#auth-email")


$togglePassword.addEventListener("click", () => {
    const type = $passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    $passwordInput.setAttribute('type', type);
});


function User(e, p){
    this.email = e;
    this.password = p;
}

const loginUser = async (e) => {
    e.preventDefault();

const passowrdValue = $passwordInput.value;
const emailValue = $emailInput.value;

const formValues = new User(emailValue, passowrdValue)
    
    
    try{
        const response = await axios.post("/user/login", formValues);
        const data = response.data.data;
        console.log(data);
        if(data.token){
            saveToLocalStorage("token", data.token)
            saveToLocalStorage("Username" , data.user.name)
            saveToLocalStorage("Userrole" , data.user.role)
            $formContent.innerHTML = `<p class="message">We are redirecting you, please wait...</p>`
            setTimeout(() => {
                location.replace(location.origin + "/src/pages/new-blog.html");
            }, 1000);
        }
    }
    catch(error){
        console.log(error);
    }
    
}

$authForm.addEventListener("submit", loginUser);