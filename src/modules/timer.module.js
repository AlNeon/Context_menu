import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor(type, text) {
    super (type = 'timer', text = "Таймер обратного отсчета")
    this.hourTime = 0;
    this.minuteTime = 0;
    this.secondTime = 0;
    this.limitTime = 0; 
  }

  trigger() {
    document.getElementById('time').innerHTML = `
    <div id="time">
      <div id="timerClick">
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

        if (time.total < 0) {
          clearInterval(timeInterval);
          document.getElementById('timerClick').remove();
          alert('Ваше время истекло! Надеемся вы все успели)');
        }
      }

      updateClock();
      const timeInterval = setInterval(updateClock, 1000);
    }

    this.hourTime = Number(prompt('Внесети часы'));
    this.minuteTime = Number(prompt('Внесети минуты'));
    this.secondTime = Number(prompt('Внесети секунды'));

    this.limitTime = new Date(Date.parse(new Date()) + `${this.hourTime}` * 60 * 60 * 1000 + `${this.minuteTime}` * 60 * 1000 + `${this.secondTime}` * 1000);
    console.log(this.limitTime);
    
    initialClock('timerClick', this.limitTime);

    
  }
 



}