//renders response before it is modified
const renderRawResponse = (res) =>{
    //taking first ten words from res
    let trimmedResponse = res.slice(0, 10);
    //manipulates responsiveField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
}

//function for rendering results in clear
const renderResponse = (res) => {
    if(!res){
        console.log(res.status);
    }
    //in case res comes back as a blank array
    if (!res.length) {
        responseField.innerHTML = `<p>Try again!</p><p>There were no suggestions found!</p>`;
        return
    }
    //creating an array to contain the HTML strings
    let wordLists = [];
    // looping through the response and maxxing out at 10
    for (let i = 0; i < Math.min(res.length, 10) ; i++) {
        //creating a list of words
        wordLists.push(`<li>${res[i].word}</li>`);
    }

    //joining returned string into one word
    wordLists = wordLists.join("");
    //manipulates responsivefield to render the modified response
    responseField.innerHTML = `<p>Words that are spelt the same are : </p> <ol>${wordLists}</ol>`
    return
}