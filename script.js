//constants
const BASE_URL = 'https://api.kanye.rest/';

// state variables
let apiData;

//cached variables
const $quote = $('#quote');


// event listners
$('input').on('click', getData)

// functions
function getData() {
    // get api data and assign it to our apiData state variable
    $.ajax(BASE_URL)
    .then(
        (data) => {
            console.log(data, 'kanye');
            $quote.text(data.Quote);
        }, (error) => {
            console.log (error);
        })
    document.body.append($quote);
    $(quote)
    };

    
// };

// getData();