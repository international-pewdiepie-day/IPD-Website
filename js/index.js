$(document).ready(()=>{
    getSubCount();
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