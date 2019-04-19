const currentDate = new Date().getDate(); 

$(document).ready(() => {
    for(i=0; i<(29 - currentDate); i++){
        $('#available-date').append("<input type='checkbox' class='ml-3'>" + (i+currentDate))
    }
    updateCountryDropdown();
});

function updateCountryDropdown(){
    countryList.forEach((country) => {
        $('#countryDropdown').append("<option data-country='" + country + "'>" + country + "</option>");
    });
    updateCitiesDropdown();
}

function updateCitiesDropdown(){
    let e = document.getElementById("countryDropdown");
    $.ajax({
        method: "GET",
        url: "https://pewdiepieday.com/api/getCities?country="+e.options[e.selectedIndex].text
    }).done((value) => {
        console.log(value);
    });
}