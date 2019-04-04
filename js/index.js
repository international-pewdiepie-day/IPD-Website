'use strict';
(function(){
    const config = $.getJSON("./config.json", (json) => {

        console.log(json);
    });

    $(document).ready(() => {
        getSubCount();
        // countdown();
    });
    
    function getSubCount(){
        requestURL = "https://bastet.socialblade.com/youtube/lookup?query=UC-lHJZR3Gqxm24_Vd_AJ5Yw";
        $.ajax({
            method: "GET",
            url: requestURL
        }).done((value) => {
            $('.subcountLeft').html(100000000 - value);
        });
        setTimeout(getSubCount, 30000);
    }

    function countdown(){
        // TO-DO: April 28 Countdown
        // #de003d
        setTimeout(countdown, 1000);
    }
})();