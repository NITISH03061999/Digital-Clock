setInterval (function time(){
    let d = new Date();
    // console.log(d);
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if(hour > 12)
    {
        document.getElementById("hour").innerHTML=hour;
        document.getElementById("ampm").innerHTML="PM";
    }
    if(hour<12){
        hour="0"+ hour;
    }
    if(min<10){
        min="0"+ min;
    }
    if(sec<10){
        sec="0"+ sec;
    }
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    }, 1000);