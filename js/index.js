'use strict';
// TODO: put more stuff into config, if we are gonna use config
(function(){
    const config = $.getJSON("./js/config.json", (json) => {

        console.log(json);
    });

    $(document).ready(() => {
        getSubCount();
        setInterval(getSubCount, 30000)
        // countdown();
    });
    
    function getSubCount(){
        var requestURL = "https://bastet.socialblade.com/youtube/lookup?query=UC-lHJZR3Gqxm24_Vd_AJ5Yw";
        $.ajax({
            method: "GET",
            url: requestURL
        }).done((value) => {
            $('.subcountLeft').html(100000000 - value);
        });
    }

    function countdown(){
        // TO-DO: April 28 Countdown
        // #de003d
        setTimeout(countdown, 1000);
    }
})();
