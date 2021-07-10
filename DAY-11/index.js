
var my_list =
    [{
        QUESTION: "When did Indian constitution came in effect?",
        OPTION1: "1950",
        OPTION2: "1930",
        OPTION3: "1972",
        OPTION4: "1949",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "Who is the current Minister of Foreign Affairs ?",
        OPTION1: "S. Jaishankar",
        OPTION2: "Rajnath Singh",
        OPTION3: "Nitin Gadkari",
        OPTION4: "Nirmala Sitharaman",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "NEP 2020 was launched on?",
        OPTION1: "July 2020",
        OPTION2: "April 2020",
        OPTION3: "January 2021",
        OPTION4: "November 2019",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "Which is highest civilian award in india?",
        OPTION1: "Arjun award",
        OPTION2: "Padma vibhushan",
        OPTION3: "Padma bhushan",
        OPTION4: "Bharat Ratna",
        answer: document.querySelector('.ans4')
    },
    {
        QUESTION: "Who was India's first female governor?",
        OPTION1: "Indira gandhi",
        OPTION2: "Sushma swaraj",
        OPTION3: "Sarojini Naidu",
        OPTION4: "Savitri bai phule",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "When is India army day celebrated?",
        OPTION1: "15 august",
        OPTION2: "15 january",
        OPTION3: "6 april",
        OPTION4: "14 october",
        answer: document.querySelector('.ans2')
    },
    {
        QUESTION: "Which is largest forest state in india?",
        OPTION1: "Jharkhand",
        OPTION2: "Madhya pradesh",
        OPTION3: "Rajasthan",
        OPTION4: "Tripura",
        answer: document.querySelector('.ans2')
    },
    {
        QUESTION: "India's largest dam is?",
        OPTION1: "Tehri Dam",
        OPTION2: "Bhakra Dam",
        OPTION3: "Lakhwar Dam",
        OPTION4: "Sardar Sarover dam",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "How many times india won world cup?",
        OPTION1: "3",
        OPTION2: "2",
        OPTION3: "4",
        OPTION4: "1",
        answer: document.querySelector('.ans2')
    },
    {
        QUESTION: "India's first supercomputer is?",
        OPTION1: "PARAM Siddhi-AI",
        OPTION2: "Param Shivay",
        OPTION3: "Shivay-II",
        OPTION4: " Mihir",
        answer: document.querySelector('.ans2')
    },
   
    ]

var btn = document.querySelectorAll('#select');
var correct = 0;
var wrong = 0;
var x = 0;
// console.log(correct,wrong,x);
for (let j = 0; j < 4; j++) {
    
    btn[j].addEventListener('click', (stop) => {
        if (btn[j].innerHTML == my_list[x].answer.innerHTML) {
            my_list[x].answer.innerHTML = 'CORRECT ANSWER';
            my_list[x].answer.style.color = 'green';
            correct += 1;
        }
        else {
            btn[j].innerHTML = 'WRONG ANSWER';
            btn[j].style.color = 'red';
            wrong -= 1;
        }
    });
}

var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var question = document.querySelector('.question');
var ans1 = document.querySelector('.ans1');
var ans2 = document.querySelector('.ans2');
var ans3 = document.querySelector('.ans3');
var ans4 = document.querySelector('.ans4');

next.addEventListener('click',()=>{
    if(x<10){
        x += 1;
    ans1.style.color = 'white';
    ans2.style.color = 'white';
    ans3.style.color = 'white';
    ans4.style.color = 'white';
    question.innerHTML = my_list[x].QUESTION;
    ans1.innerHTML = my_list[x].OPTION1;
    ans2.innerHTML = my_list[x].OPTION2;
    ans3.innerHTML = my_list[x].OPTION3;
    ans4.innerHTML = my_list[x].OPTION4;
    }
    else if(x==10 || x==9){
        question.innerHTML = `YOUR TOTAL SCORE ${correct + wrong} out of 10`;
        ans1.innerHTML = `Total Correct points = ${correct} `;
        ans2.innerHTML = `Total Wrong points = ${wrong} `;
        ans4.style.display='none';
        ans3.style.display='none';
        ans3.style.visibility='hidden';
        // quiz.style.width:50%;
        // document.getElementsByClassName("quiz").style.width="50%";
        // document.getElementsByClassName("question").style.backgroundColor="yellow";
        // question.style.backgroundColor="yellow";
    }
});

previous.addEventListener('click',()=>{
    if(x>0){
        
        x -= 1;
    question.innerHTML = my_list[x].QUESTION;
    ans1.innerHTML = my_list[x].OPTION1;
    ans2.innerHTML = my_list[x].OPTION2;
    ans3.innerHTML = my_list[x].OPTION3;
    ans4.innerHTML = my_list[x].OPTION4;
    ans3.style.backgroundColor = "black";
    ans4.style.backgroundColor = "black";
    ans3.style.color = "white";
    ans1.style.color = "white";
    ans2.style.color = "white";
    ans4.style.color = "white";
    }
    else if(x == 0){
        
        window.location = "http://127.0.0.1:5502/Quiz/front.html";
    }
});
