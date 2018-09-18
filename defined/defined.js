function printQues(data,i){
    q=`
    <div class="col s12 m6 offset-m3 offset-l3" >
        <div class="card" class="" id="q${i}">
            <div class="card-content">
                <span class="card-title"><b>Question ${i+1}</b></span>
                <div class="black-text">
                    ${data.question}
                    <p style="margin-top: 20px;">
                        ${(function(data){
                            a='';
                            data.options.map(function(option,j){
                                a+=`<label><input class="with-gap" value="${j}" type="radio" name="a${i}"/>
                                <span class="black-text">${option}</span></label><br>`
                            })
                            return a;
                        })(data)}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `
    $('.quesArea').html($('.quesArea').html()+q)
}

while(ques.length>noOfQuestions) ques.splice(Math.floor((Math.random() * ques.length)), 1);
ques.map(function(q,i){
    printQues(q,i)
})

function submit(){
    window.count=0
    for(var i=0; i<ques.length; i++){
        if(ques[i].answer==$(`input[name=a${i}]:checked`).val()){
            count++;
            $(`#q${i}`).removeClass('red accent-2')
            $(`#q${i}`).addClass('green accent-3')
        }
        else{
            $(`#q${i}`).addClass('red accent-2')
            $(`#q${i}`).removeClass('green accent-3')
        }
    }
    remark=count>ques.length/2?"Good job!":"Well tried!"
    swal(remark, "You got "+count+ " out of "+ques.length+" correct", "success");
}