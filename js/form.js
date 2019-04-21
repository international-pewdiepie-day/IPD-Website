'use strict';

(function(){
    $(document).ready(() => {
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
    
    
})();

function submitForm(){
    let country = document.getElementById("countryDropdown");
    let cities = document.getElementById("citiesDropdown");
    $.ajax({
        method: "POST",
        url: "https://pewdiepieday.com/api/submitForm",
        data: {
            'email': $('input[name=irl-member-email]').val(),
            'socialContact': $('input[name=irl-member-social]').val(),
            'meetShowUp': $('input[name=irl-meet-up]:checked').val(),
            '27thApril': $('input[name=irl-27-april]').prop('checked'),
            '28thApril': $('input[name=irl-28-april]').prop('checked'),
            '29thApril': $('input[name=irl-29-april]').prop('checked'),
            'country': country.options[country.selectedIndex].text,
            'cities': cities.options[cities.selectedIndex].text
        }
    });
}