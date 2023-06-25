// fetch all hands via class
const secondsHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

// create date function
function setDate() {
    const now = new Date();                                          // Get the current time
    
  // Check if it's AM or PM
  const timeOfDayElement = document.querySelector('.time-of-day');
  if (now.getHours() >= 12) {
    timeOfDayElement.innerHTML = 'PM';
  } else {
    timeOfDayElement.innerHTML = 'AM';
  }

    // __________________________
    // SECONDS
    const seconds = now.getSeconds();                                // Get the seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90;              // set conditions
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;    // set style transformation


    // __________________________
    // MIN
    const mins = now.getMinutes();                                   // Get the mins
    const minsDegrees = ((mins / 60) * 360) + 90;                    // set conditions
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;          // set style transformation


    // __________________________
    // HOUR
    const hours = now.getHours();                                    // Get the hours
    const hoursDegrees = ((hours / 12) * 360) + 90;                  // set conditions
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;        // set style transformation


      // Check if hands are at 90 degrees and remove transition
      if (seconds === 0) {
        secondsHand.style.transition = 'none';
    } else {
        secondsHand.style.transition = '';
    }

    if (mins === 0) {
        minsHand.style.transition = 'none';
    } else {
        minsHand.style.transition = '';
    }

    if (hours === 0) {
        hoursHand.style.transition = 'none';
    } else {
        hoursHand.style.transition = '';
    }
}

setDate();                                                            // Call the function once to set the hands and time of day initially
setInterval(setDate, 1000);                                           // Set interval
