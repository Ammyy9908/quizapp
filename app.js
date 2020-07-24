fetch('https://opentdb.com/api.php?amount=20&category=18').
then(response => response.json())
.then(data => {
    let questions = data["results"];
    let form = document.querySelector('form');
    let result = document.querySelector('.result');
    const correctAnswers = [];
    questions.forEach((question,index)=>{
        
        correctAnswers.push(question["correct_answer"]);
        form.innerHTML+=` <div class="my-5">
    <p class="lead font-weight-normal">${index+1}.${question["question"]} ?</p>
            <div class="form-check my-2 text-white-50">
                    <input type="radio" name="q${index+1}" value="${question['incorrect_answers'][Math.floor(Math.random()*(0,3))]}">
                    <label class="label form-check-label">${question["incorrect_answers"][Math.floor(Math.random()*(0,3))]}</label>
            </div>
            <div class="form-check my-2 text-white-50">
                    <input type="radio" name="q${index+1}" value="${question['incorrect_answers'][Math.floor(Math.random()*(0,3))]}">
                    <label class="label form-check-label">${question["incorrect_answers"][Math.floor(Math.random()*(0,3))]}</label>
            </div>
            <div class="form-check my-2 text-white-50">
            <input type="radio" name="q${index+1}" value="${question['correct_answer']}">
            <label class="label form-check-label">${question["correct_answer"]}</label>
    </div>
            <div class="form-check my-2 text-white-50">
                    <input type="radio" name="q${index+1}" value="${question['incorrect_answers'][Math.floor(Math.random()*(0,3))]}">
                    <label class="label form-check-label">${question["incorrect_answers"][Math.floor(Math.random()*(0,3))]}</label>
            </div>
           
</div>`;});
    form.innerHTML+=`<div class="text-center">
            <input type="submit" class="btn btn-light" value="submit">
</div>`;
// add a submit event on form
//check Answers
form.addEventListener('submit',e=>{
e.preventDefault();
let score = 0;
const usersQuestion = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value,form.q11.value,form.q12.value,form.q13.value,form.q14.value,form.q15.value,form.q16.value,form.q17.value,form.q18.value,form.q19.value,form.q20.value,];
usersQuestion.forEach((answer,index)=>{
    if(answer===correctAnswers[index])
    {
        score+=1;
    }

});
window.scrollTo(0,0);
result.classList.remove('d-none');
document.querySelector('.quiz').classList.add('d-none');


let resultscore= 0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent = resultscore+'/20='+String(Number(resultscore/20*100));
    if(resultscore===score)
    {
        clearInterval(timer);
    }
    else{
        resultscore+=1;
    }

},10);
});  
})
.catch(e=>{
    console.log(e);
})