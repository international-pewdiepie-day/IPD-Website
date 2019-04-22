'use strict';

(function(){
    $(document).ready(() => {
        updateCountryDropdown();
    });
    
    function updateCountryDropdown(){
        countryList.forEach((country) => {
            $('#countryDropdown').append("<option data-country='" + country + "'>" + country + "</option>");
        });
    }
})();