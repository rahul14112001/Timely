const endDate="17 feb 2024 12:00 am";
document.getElementById("end-date").innerText=endDate;
const input=document.querySelectorAll("input");
const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0)return;
    input[0].value=Math.floor(diff/3600/24);  /// days
    input[1].value=Math.floor((diff/3600)%24); /// hours
    input[2].value=Math.floor((diff/60)%60);///minutes
    input[3].value=Math.floor((diff)%60);///seconds
    

}

setInterval(  /// use to call a function at time interval
    ()=>{
        clock()  /// this function will after every t interval
    },1000 //// here t=1000ms i.e. 1sec
)