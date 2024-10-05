
function countWords(sentence) {
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++)
         {
        let char = sentence[i];

        if (char !== ' ' && !inWord) {
            wordCount++;  
            inWord = true; 
        } 

        else if (char === ' ') {
            inWord = false;
        }
    }

    return wordCount;
}


let inputSentence = "  I  have a   book  ";
let output = countWords(inputSentence);
console.log(output); 
