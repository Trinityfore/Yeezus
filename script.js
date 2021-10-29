//constants
const BASE_URL = 'https://api.kanye.rest/';

// state variables
let apiData;

//cached variables
const $main = $('main');
const $quote = $('#quote');


// event listners
$main.on('click', 'article', handleClick);

// functions
function getData() {
    // get api data and assign it to our apiData state variable
    $.ajax(BASE_URL, quote)
    .then(function(quote) {
        apiData = quote;
        render();
    }, function(error) {

    });
}
function handleClick(){
    $
}

function render() {
    const kanyeFace = apiData 
    
};