const textarea = document.querySelector("#history-text");
let clicked = false;
textarea.addEventListener("click", async () => {
    if (clicked === false){
        clicked = true;
        function sleep(ms = 0) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        for(let i = 0; clicked && i < textarea.scrollHeight; ++i){
            textarea.scrollTop += 1;
            await sleep(100);
        }
    } else {
        clicked = false;
    }
    
});