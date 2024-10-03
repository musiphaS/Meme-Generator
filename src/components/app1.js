import { auth } from './firebase/config'; // Adjust the path accordingly
import { createUserWithEmailAndPassword } from 'firebase/auth';


const email = document.getElementById("email");
const password = document.getElementById("password");
const signUpBtn = document.getElementById("signup-btn");

const signUpButtonPressed = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log(userCredential);
    } catch (error) {
        console.log(error.code);
    }
    
};

signUpBtn.addEventListener("click", signUpButtonPressed);