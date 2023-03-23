let delayInSeconds = 3;
//making a funcution to generate a random number after delay of 3 second

function generateRandomDelay(){
    let timeInSeconds = delayInSeconds;
    const countDownInterval = setInterval(() =>{
        console.log(`Generating random number in ${timeInSeconds} seconds...`)
        timeInSeconds--;
        //when time becomes 0.
        if (timeInSeconds === 0) {
            clearInterval(countDownInterval);
            const randomNumber = Math.floor(Math.random()*100);
            console.log(`Random number generated : ${randomNumber}`)
        }
    },1000);
}

generateRandomDelay();