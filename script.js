
let hrs=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");


let alarmHRInput=document.getElementById("alarmHr");
let alarmMINInput=document.getElementById("alarmMin"); 
let alarmSECInput=document.getElementById("alarmSec");
let setAlarmButton = document.getElementById("setAlarm");

let alarmHr, alarmMin, alarmSec;

setAlarmButton.addEventListener("click",()=>{
    alarmHr=parseInt(alarmHRInput.value)||0;
    alarmMin=parseInt(alarmMINInput.value)||0;
    alarmSec=parseInt(alarmSECInput.value)||0;

    alert("alaram set")

});

function playAlarm() {
    let audio = new Audio("newsound.mp3");
    audio.play()
         .then(() => console.log("Alarm sound played successfully"))
         .catch(error => console.error("Error playing alarm sound:", error));
}

setInterval(()=>{
    let currentTime= new Date();
    let currentHr = currentTime.getHours();
    let currentMin = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();

    console.log(currentTime.getHours());
    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();;
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

    if (alarmHr === currentHr && alarmMin === currentMin && alarmSec === currentSec) {
        playAlarm();
        // You can add any action you want to happen when the alarm goes off here
    }
    
},1000);

