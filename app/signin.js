import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showmessage } from './showmessage.js'

const signin = document.querySelector('#signin-form')
signin.addEventListener('sumbit', async (e)=>{
    e.preventDefault()

    const emailUser= signup['email-login-form'].value;
    const passwordUser= signup['password-login-form'].value;

    try{
        const credentials = await signInWithEmailAndPassword(auth, emailUser, passwordUser)
        console.log("Credenciales: "+credentials)
        const modal= boostrap.Modal.getInstance(document.querySelector('#signin-modal'));
        modal.hide()
        showmessage('¡Bienvenido!'+credentials.user.emailUser)




    }
    catch(error){
        //console.log(error)
        if(error.code==='auth/wrong-password'){
            showmessage('La contraseña es incorrecta', 'error')
            console.log('La contraseña es incorrecta')
        } else if(error.code==='auth/user-not-found'){
            showmessage('El usuario no cuenta con un registro', 'error')
            console.log('El usuario no cuenta con un registro')
        } else {
            showmessage('Ocurrio un problema', 'error')
            console.log('Ocurrio un problema')
        }


    }

    

})