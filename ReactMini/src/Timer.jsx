import React from 'react'
import './TimerStyle.css'

const Timer = () => {
    let [seconds,minutes,hours] = [0,0,0];
    let display= document.getElementById("PlayTimer");
    let timer=null;
    function Watch(){
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60)
            {
                minutes=0;
                hours=hours+1;
            }
        }
        let h= hours<10? "0" + hours: hours;
        let m= minutes<10? "0" + minutes: minutes;
        let s= seconds<10? "0" + seconds: seconds;

        display.innerHTML=h  + " : " + m  + " : " + s ;
    }
    function WatchStart()
    {
        if(timer!=null)
        {
            clearInterval(timer);
        }
        setInterval(Watch,100);

    }
    function PauseWatch(){  
        clearInterval(timer);
    }

    function ResetWatch()
    {
        if(timer!=null)

        clearInterval(timer);
        [seconds,minutes,hours]= [0,0,0];
        display.innerHTML= "__: __:__";
    }
  return (
    <div> 
         <h1 >Set a Timer Until Your Order Arrives</h1>
         <h1 id='PlayTimer'>
            00: 00: 00
         </h1>
         <div className='buttons'>
            <button id='pause' onClick={PauseWatch}>pause</button>
            <button id='play' onClick={WatchStart}>Play</button>
            <button id='Reset' onClick={ResetWatch}>Reset</button>
         </div>
    </div>

  )
}

export default Timer