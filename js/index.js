$(document).ready(()=>{
    requestURL = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=" + youtubeAPI.key;
    $.ajax({
        method: "GET",
        url: requestURL
    }).done((value) => {
        $('.subcountLeft').html(100000000 - value.items[0].statistics.subscriberCount);
    });
});