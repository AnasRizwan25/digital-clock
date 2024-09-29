let days = ['SUN','MON','TUE','WED','THUS','FR','SAT'];

let hour = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

let hourId = document.getElementById('hourId');
let minId = document.getElementById('minId');
let secId = document.getElementById('secId');

//This function for formatting
function hours(time,hourId,minId,secId){
  let count = 12;
  if(time.getHours() > 12){
    hour.innerText = time.getHours() - count;
    count++;
  }

  if((time.getHours() > 12 && time.getHours() < 22) || 
  (time.getHours() >=1 && time.getHours() < 10)){
    hourId.innerText = '0';
  } else{
    hourId.innerText = '';
  }
  if(time.getMinutes() >= 0 && time.getMinutes() < 10){
    minId.innerText = '0';
  } else{
    minId.innerText = '';
  }
  if(time.getSeconds() >= 0 && time.getSeconds() < 10){
    secId.innerText = '0';
  } else{
   secId.innerText = '';
  }

}

//This function for AM or PM
function clock(time){
  if(time.getHours() > 12 && time.getHours() < 24){
    document.getElementById('event').innerText = 'PM';
  } else{
    document.getElementById('event').innerText = 'AM';
  }
}

//This function for Showing time
function Time(hour,min,sec,days){

  let time = new Date();
  let iteration = time.getDay();

  document.getElementById('days').innerText = days[iteration];
  hour.innerText = time.getHours();
  min.innerText = time.getMinutes();
  sec.innerText = time.getSeconds();

  hours(time,hourId,minId,secId);
  clock(time);
}

setInterval(() =>{
  Time(hour,min,sec,days);
},1000);