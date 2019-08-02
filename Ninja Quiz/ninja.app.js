const correctAns = ['B','A','A','B','B'];
const ninjaForm = document.querySelector('#my-form');
const scoreCard = document.querySelector('span') 
//console.log(ninjaForm.question1.value);

ninjaForm.addEventListener('submit', e => {
    e.preventDefault();
    const userAns = [
        ninjaForm.question1.value, ninjaForm.question2.value,
        ninjaForm.question3.value, ninjaForm.question4.value,
        ninjaForm.question5.value
       ]
    let score = 0;
    userAns.forEach((answer, i)=>{
        if(answer === correctAns[i]){
            score += 20 ;  
        }
    })
    window.scrollTo(0,0);
    let output = 0;
    const timer = setInterval(()=>{
        scoreCard.textContent = `${output}%`; 
        if (score === output){
            clearInterval(timer);
        }else{
            output++;
        } 
       },10)  
       
   
    

})