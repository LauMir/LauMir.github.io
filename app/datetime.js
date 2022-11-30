import { showmessage } from './showmessage.js'



const schedule= document.querySelector('#schedule-form');
schedule.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const date= schedule['date-form'].value;
    const time= schedule['time-form'].value;

    console.log(date, time)
    showmessage("Cita registrada"+date+time)


})