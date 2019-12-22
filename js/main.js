const url = 'https://api.datamuse.com/words?';
const queryParams = 'sp=';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

//AJAX function
const suggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            //returning results
            renderResponse(xhr.response);
        }
    }
    xhr.open('GET', endpoint);
    xhr.send();
}

//function for displaying returned results
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.lastChild);
    }
    suggestions();
}

submit.addEventListener('click', displaySuggestions);