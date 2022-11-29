import { createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showmessage } from './showmessage.js'

const signup = document.querySelector('#register-form')
signup.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const email= signup['email-form'].value;
    const password= signup['password-form'].value;

    //const name= signup['name-form'].value;
    //const email= signup['email-form'].value;
    /*const birthday= signup['birthday-form'].value;
    const age= signup['age-form'].value;
    //const sex= signup['sex-form'].value;
    const cellphone= signup['cellphone-form'].value;*/
    //const password= signup['password-form'].value;

    //console.log(name, email, birthday, age, cellphone, password)
    console.log(email, password)


    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password) 
        console.log(userCredentials)

        const SignupModal= document.querySelector('#signup-modal')
        const modal= boostrap.Modal.getInstance(SignupModal)
        modal.hide()


        showmessage("Bienvenido "+userCredentials.user.email)
        alert("Bienvenido "+userCredentials.user.email)


    }
    catch(error){
        console.log(error.message)
        console.log(error.code)


        if(error.code==='auth/email-already-in-use'){
            showmessage("El correo"+userCredentials.user.email+"ya cuenta con un registro ", "error")
            //alert("El correo ya cuenta con un registro")
            console.log("El correo ya cuenta con un registro")
        
        }  
        else if(error.code==='auth/invalid-email'){
            showmessage("Debe ingresar un correo valido", "error")
            //alert("Ingresa un correo valido")
            console.log("Ingresa un correo valido")
            } else if(error.code==='auth/weak-password'){
            showmessage("La contraseña debe tener por lo menos 6 caracteres", "error")
            //alert("La contraseña debe tener por lo menos 6 caracteres")
            console.log("La contraseña debe tener por lo menos 6 caracteres")
            } else if(error.code){
            showmessage("Algo salio mal, intente más tarde", "error")
            //alert("Algo salio mal, intente más tarde")
            console.log("Algo salio mal, intente más tarde")
            } 
    

        

        



    }


    

})