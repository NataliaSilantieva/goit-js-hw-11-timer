

 class CountdownTimer{
   constructor({targetDate, selector}) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.start();
   }
 
   pad(value) {
    return String(value).padStart(2, '0');
}


  start () {
    const targetTime = this.targetDate.getTime(); 
    
      setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = targetTime - currentTime;
        const time = this.getTimeComponents(deltaTime);
        this.updateClockface(time);
      

    }, 1000);
  };

  updateClockface({ days, hours, mins, secs }) {
const day = document.querySelector('span[data-value="days"]');
const hour = document.querySelector('span[data-value="hours"]');
const min = document.querySelector('span[data-value="mins"]');
const sec = document.querySelector('span[data-value="secs"]');

    day.textContent = `${days}`;
    hour.textContent = `${hours}`;
    min.textContent = `${mins}`;
    sec.textContent = `${secs}`;
  };

   

getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
  } 


}
  const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });