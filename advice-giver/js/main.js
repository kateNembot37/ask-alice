
//If the user clicks "No"
document.querySelector(".no").addEventListener('click',noAdvice)

function noAdvice(){
  alert("You sure you don't want some free advice?")
}


//If the user clicks "Yes"

document.querySelector('button').addEventListener('click',getAdvice)

function getAdvice(){
 fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("h3").innerText=data.slip.advice
    })
}
