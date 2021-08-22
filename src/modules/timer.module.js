import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor(type, text) {
    super (type, text)
  }

  trigger() {
    document.getElementById('time').innerHTML = `
    <div id="time">
      <div id="timer">
        <div class="timer-count">
          <span class="hours timer-time"></span>
          <span class="timer-text" >Часы</span>
        </div>
        <div class="timer-count">
          <span class="minutes timer-time"></span>
          <span class="timer-text" ">Минуты</span>
        </div>
        <div class="timer-count">
          <span class="seconds timer-time" ></span>
          <span class="timer-text">Секунды</span>
        </div>
      </div>
    </div>`;

    function getTimeRemaining(finishTime) {
      let time = Date.parse(finishTime) - Date.parse(new Date());
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / 1000 / 60 / 60) %60);  
      
      return {
        'total': time,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours            
      };
    }

    function initialClock(id, finishTime) {
      const clock = document.getElementById(id);
      const secondsSpan = clock.querySelector('.seconds');
      const minutesSpan = clock.querySelector('.minutes');
      const hoursSpan = clock.querySelector('.hours');
      
      

      function updateClock() {
        let time = getTimeRemaining(finishTime);

        secondsSpan.innerHTML = ('0' + time.seconds).slice(-2)
        minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
        hoursSpan.innerHTML = ('0' + time.hours).slice(-2);

        if (time.total <= 0) {
          clearInterval(timeInterval);
          document.getElementById('timer').remove();
        }
      }

      updateClock();
      const timeInterval = setInterval(updateClock, 1000);
    }

    const hourTime = Number(prompt('Внесети часы'));
    const minuteTime = Number(prompt('Внесети минуты'));
    const secondTime = Number(prompt('Внесети секунды'));

    const limitTime = new Date(Date.parse(new Date()) + `${hourTime}` * 60 * 60 * 1000 + `${minuteTime}` * 60 * 1000 + `${secondTime}` * 1000);
    
    initialClock('timer', limitTime);

    
  }
 



}