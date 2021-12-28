
function DigitalClock()
{
    var date=new Date();
    var month=date.getMonth();
    var[day,month,year] =[date.getDate(),date.getMonth()+1,date.getFullYear()];
    var[hours,minutes,seconds]=[date.getHours(),date.getMinutes(),date.getSeconds()];
    console.log(day+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds);  
}

setInterval(()=>{
    console.clear();
    DigitalClock();
 },1000);
