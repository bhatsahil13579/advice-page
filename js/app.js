 const para = document.querySelector(".para")
 const hash = document.querySelector(".hash")
 const btn = document.querySelector(".btn")


 const requestAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice",{
  method : "GET"
 
    });
 const jsonAdviceData = await response.json();
 para.textContent = jsonAdviceData.slip.advice
 hash.textContent = jsonAdviceData.slip.id

}
 
requestAdvice();

btn.addEventListener("click" , () =>{
  requestAdvice();
})