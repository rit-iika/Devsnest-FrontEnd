
var btn=document.querySelector('button');
 btn.addEventListener('click',async ()=>{
    fetch('https://api.quotable.io/random')
    
    .then(res=>res.json())
    .then(data=>console.log(data.content));
    // return data;
    // console.log(data.content);
    // console.log(data);


})

var btn2=document.getElementById("second");
btn2.addEventListener('click',async ()=>{
fetch('https://meme-api.herokuapp.com/gimme')
.then(res=>res.json())
.then(data=>console.log(data.url));
})