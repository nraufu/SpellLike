const url = 'https://api.datamuse.com/words?';
const queryParams = 'sp=';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

//AJAX function
const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try {
        const response = await fetch(endpoint, {
            cache: 'no-cache'
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }

}
//function for displaying returned results
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
}

submit.addEventListener('click', displaySuggestions);