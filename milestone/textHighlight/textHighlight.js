let str = document.getElementById('data');
const words = str.textContent.split(" ");
words.forEach((word)=>{
    if(word.length > 8 ){
        const span = document.createElement("span")
        span.textContent = word;
        span.style.backgroundColor = 'yellow';
        str.innerHTML = str.innerHTML.replace(word, span.outerHTML);
    }
});
