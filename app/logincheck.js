
const LoggedInList= document.querySelectorAll('.logged-in')
const LoggedOutList= document.querySelectorAll('.logged-out')

console.log(LoggedInList)
console.log(LoggedOutList)

export const logincheck= user =>{
    if(user){
        LoggedOutList.forEach(link=>link.style.visibility='visible') //display=none
        LoggedInList.forEach(link=>link.style.visibility='visible')//inline-block

    } else{
        LoggedOutList.forEach(link=>link.style.visibility='hidden') //hiden
        LoggedInList.forEach(link=>link.style.visibility='visible')


    }
}