
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
        QUESTION: "Name russian vaccine used in India?",
        OPTION1: "Covaxin",
        OPTION2: "Covishield",
        OPTION3: "Phyzer",
        OPTION4: "Sputnik",
        answer: document.querySelector('.ans4')
    },
    {
        QUESTION: "Which country won 2020 Euro league?",
        OPTION1: "France",
        OPTION2: "Italy",
        OPTION3: "Portugal",
        OPTION4: "Germany",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "Messi has won how many ballon'd'or titles?",
        OPTION1: "5",
        OPTION2: "7",
        OPTION3: "6",
        OPTION4: "4",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "What is the largest country in the world?",
        OPTION1: "Chicago",
        OPTION2: "China",
        OPTION3: "Russia",
        OPTION4: "New York",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "Which planet is closest to the sun?",
        OPTION1: "Mercury",
        OPTION2: "Venus",
        OPTION3: "Earth",
        OPTION4: "Mars",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "Who came second in the FIFA Women's World Cup in 2019?",
        OPTION1: "USA",
        OPTION2: "Netherlands",
        OPTION3: "Sweden",
        OPTION4: "England",
        answer: document.querySelector('.ans2')
    },
    {
        QUESTION: "Who came second in the FIFA Women's World Cup in 2019?",
        OPTION1: "USA",
        OPTION2: "Netherlands",
        OPTION3: "Sweden",
        OPTION4: "England",
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
        // ans3.style.backgroundColor = "white";
        // ans3.style.backgroundColor = "2px solid white";
        // ans4.style.backgroundColor = "white";
        // ans4.style.backgroundColor = "2px solid white";
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