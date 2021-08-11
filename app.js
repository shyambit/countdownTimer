const daysEl     = document.getElementById("days");
const hoursEl    = document.getElementById("hours");
const minsEl     = document.getElementById("mins");
const secondsEl  =document.getElementById("seconds");


const newYear="1 jan 2022";
function countdowm()
{

    const newYearDate=new Date(newYear);
    const curretDate=new Date();

    const totalseconds=(newYearDate-curretDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600) %24;
    const mins=Math.floor(totalseconds/60) %60;
    const seconds=Math.floor(totalseconds) %60;
    
    
    //console.log(days,hours,mins,seconds);

     daysEl.innerHTML=days;
     hoursEl.innerHTML=formatTime(hours);
     minsEl.innerHTML=formatTime(mins);
     secondsEl.innerHTML=formatTime(seconds);
}formatTime
function formatTime(time)
{
    return time<10 ? `0${time}` : time; 
}
countdowm()

setInterval(countdowm,1000)