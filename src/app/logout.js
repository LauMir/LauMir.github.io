import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showmessage } from './showmessage.js'

const logoutValue= document.querySelector('#loggedout')
logoutValue.addEventListener('click', async (user)=>{
    await signOut(auth)
    console.log("User LogOut")

    /*if(user){

    } else {

    }*/

})