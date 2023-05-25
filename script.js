let quoteText = document.querySelector(".quoteebody");
let authorText = document.querySelector(".authorname");
let announceQuote = document.querySelector(".items .fa-play");
let copyQuote = document.querySelector(".items .fa-clipboard");
let newQuote = document.querySelector(".quotebutton");

function generateNewQuote(){
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorText.innerText = result.author;
        newQuote = "new Quote";
    });
}

announceQuote.addEventListener("click" , ()=>{
    let announceText = new SpeechSynthesisUtterance(`Quote of the day is.... ${quoteText.innerText} said by ${authorText.innerText}`);
    speechSynthesis.speak(announceText);
})

copyQuote.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
})

newQuote.addEventListener('click', generateNewQuote)