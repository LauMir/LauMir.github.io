import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js" //--- uno de estos 3 me hace daño
import { auth } from './app/firebase.js'
import { logincheck } from './app/logincheck.js'
import './app/firebase.js'
import './app/signup.js'
import './app/logout.js'
import './app/signin.js'
import './app/datetime.js'
//import './bootstrap.js'

onAuthStateChanged(auth, async(user)=>{
    console.log('user:'+user)
    logincheck(user)

    if(user){
        logincheck(user)
    }
    else{
        //logincheck(user)

    }

})

/*function Validation() 
{
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var birthday = document.getElementById("Birthday").value;
    var age = document.getElementById("Age").value;
    var cellphone = document.getElementById("Cellphone").value;
    var password = document.getElementById("Password").value;

    //var emailReg=/^([w-.]+@([w-]+.)+[w-]{2,4})?$/i;
    var emailReg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (name === '' || email === '' || age === '' || cellphone === '' || password === '') 
    {
        alert("Error - Debe llenar todos los campos");
        return false;
    }
    else 
    {
        if (!(email).match(emailReg)) 
        {
            alert("Error - Debe registrar un email valido");
            return false;
        }
        else 
        {
            return false;

        }

    }
}

function RegisterUser() 
{
    var name = document.getElementById("name-form").value;
    var email = document.getElementById("email-form").value;
    var birthday = document.getElementById("birthday-form").value;
    var age = document.getElementById("age-form").value;
    var cellphone = document.getElementById("cellphone-form").value;
    var password = document.getElementById("password-form").value;

    if (Validation()) {
        document.getElementById("RegisterForm").submit();
        confirm("¿Desea continuar? Datos registrados " + "n Nombre: " + nombre);
    }


    console.log("Se va por aca?");

}
*/

