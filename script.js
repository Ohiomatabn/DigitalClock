function digitalTime(){
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDay();
  let hours = now.getHours().toString().padStart(2, 0); 
  let minutes = now.getMinutes().toString().padStart(2, 0);
  let seconds = now.getSeconds().toString().padStart(1, 0);

  day === 0 ? day = 'Sunday' : '';
  day === 1 ? day = 'Monday' : '';
  day === 2 ? day = 'Tuesday' : '';
  day === 3 ? day = 'Wednessday' : '';
  day === 4 ? day = 'Thursday' : '';
  day === 5 ? day = 'Friday' : '';
  day === 6 ? day = 'Saturday' : '';

  month === 0 ? month = 'January' : '';
  month === 1 ? month = 'Feburary' : '';
  month === 2 ? month = 'March' : '';
  month === 3 ? month = 'April' : '';
  month === 4 ? month = 'May' : '';
  month === 5 ? month = 'June' : '';
  month === 6 ? month = 'Junly' : '';
  month === 7 ? month = 'August' : '';
  month === 8 ? month = 'September' : '';
  month === 9 ? month = 'October' : '';
  month === 10 ? month = 'November' : '';
  month === 11 ? month = 'December' : '';

  hours < 10 ? hours = `0${hours}` : hours = hours;
  minutes < 10 ? minutes =  `0${minutes}` : minutes = minutes;
  seconds < 10 ? seconds =  `0${seconds}` : seconds = seconds;

  document.querySelector('.js-date').innerHTML = `${day} ${month} ${year}`;
  document.querySelector('.js-time').innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(() =>{
  digitalTime();
}, 1000);