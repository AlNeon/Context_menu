import {Module} from '../core/module';
import { TimerModule } from './timer.module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.count = 0;
    this.time = 0;
  }

  countClicks() {
      this.count += 1;
  }

  reset () {
    this.count = 0;
  }
  

  trigger () {  
    const onClick = this.countClicks.bind(this);
    const timer = new TimerModule();
    timer.trigger();
    this.time = Date.parse(timer.limitTime) - Date.parse(new Date());
    const startTime = this.time;

    document.addEventListener('click', onClick);
    document.addEventListener('dbclick', onClick);

    const timeForClicks = setInterval (() => {
      this.time -= 1000;
      if(this.time === 0) {
        document.removeEventListener('click', onClick);
        document.removeEventListener('dbclick', onClick);
        alert(`Количество кликов ${this.count} за ${startTime / 1000} сек.`);
        this.reset();
        return clearInterval(timeForClicks);
      } 
    }, 1000)
    
  }
  
}