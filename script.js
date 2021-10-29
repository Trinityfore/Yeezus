//constants
const BASE_URL = 'https://api.kanye.rest/';

// state variables
let apiData;

//cached variables
const $quote = $('#quote');


// event listners
//$main.on('click', handleClick);

// functions
function getData() {
    // get api data and assign it to our apiData state variable
    $.ajax(BASE_URL)
    .then(
        (data) => {
            $quote.text(data.Quote);
        }, (error) => {
            console.log (error);
        }
        )}
function handleClick(){
    
}

// function render() {
//     const kanyeFace = apiData 
    
// };