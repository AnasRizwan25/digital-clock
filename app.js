const days = ['SUN','MON','TUE','WED','THUS','FR','SAT'];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let hour = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

let month = document.getElementById('month');
let date = document.getElementById('date');
let year = document.getElementById('year');

let hourId = document.getElementById('hourId');
let minId = document.getElementById('minId');
let secId = document.getElementById('secId');

//This function for formatting
function hours(time,hourId,minId,secId){
  let count = 12;
  if(time.getHours() > 12 && time.getHours() < 24){
    hour.innerText = time.getHours() - count;
  } else if(time.getHours() === 0){
    hour.innerText = count;
  }

  if((time.getHours() > 12 && time.getHours() < 22) || 
  (time.getHours() > 0 && time.getHours() < 10)){
    hourId.innerText = '0';
  }
   else{
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
function Time(hour,min,sec,days,months,date,year){

  let time = new Date();
  let iteration = time.getDay();
  let iMonth = time.getMonth();


  document.getElementById('days').innerText = days[iteration];
  hour.innerText = time.getHours();
  min.innerText = time.getMinutes();
  sec.innerText = time.getSeconds();

  month.innerText = months[iMonth];
  date.innerText = `${time.getDate()},`;
  year.innerText = time.getFullYear();

  hours(time,hourId,minId,secId);
  clock(time);
}


setInterval(() =>{
  Time(hour,min,sec,days,months,date,year);
},1000);

Time(hour,min,sec,days,months,date,year);
