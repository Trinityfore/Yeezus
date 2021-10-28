//constants
const BASE_URL = 'https://api.kanye.rest/';

// state variables
let apiData;

//cached variables
//const $main = $('main');

// event listners
//$main.on('click', 'article', handleClick);

// functions
function getData() {
    // get api data and assign it to our apiData state variable
    $.ajax(BASE_URL)
    .then(function(data) {
        apiData = data;
        render();
    }, function(error) {

    });
}

function render() {
    const kanyeFace = apiData 
    
};