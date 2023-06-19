
function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    const dayOfWeek = daysOfWeek[dayIndex];
    return dayOfWeek;
  }
  
  
  console.log(getDayOfWeek('2023-06-18'));  
  
  //Date Object b

  function getCurrentDayOfWeek() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = currentDate.getDay();
    const dayOfWeek = daysOfWeek[dayIndex];
    return dayOfWeek;
  }
  
  
  console.log(getCurrentDayOfWeek());  
  