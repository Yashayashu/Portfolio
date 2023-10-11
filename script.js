let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});


let currentWordIndex=0;
let maxWordIndex=words.length -1;
words[currentWordIndex].style.opacity="1";


let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextword=currentWordIndex===maxWordIndex?words[0]:words[currentWordIndex+1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter-out";
        },i*80);
    });

        nextword.style.opacity="1";
        Array.from(nextword.children).forEach((letter,i)=>{
            letter.className="letter-behind";
            setTimeout(()=>{
                letter.className="letter in";
            },340+i*80);
        });

        currentWordIndex= currentWordIndex===maxWordIndex?0:currentWordIndex+1;



};

changeText();
setInterval(changeText,3000)