$(document).ready(() => {
    dateTimeFiller();
})

const daysLeft = 22 - new Date().getDate(); 
const currentDate = new Date().getDate();

function dateTimeFiller(){
    if($('.date-time-div > .row').length < daysLeft){
        let count = $('.date-time-div > .row').length;
        $('.date-time-div').append(
            "<div class='row'>"
                + "<div class='col'>"
                    + "<label class='red-pewds-font'>Date:</label>"
                    + "<input type='date' value='2019-04-" + (currentDate + count) + "' min='2019-04-" + currentDate + "' max='2019-04-22'>"
                + "</div>"
                + "<div class='col'>"
                    + "<label class='red-pewds-font'>Start Time:</label>"
                    + "<input type='time' value='06:00'>"
                + "</div>"
                + "<div class='col'>"
                    + "<label class='red-pewds-font'>End Time:</label>"
                    + "<input type='time' value='22:00'>"
                + "</div>"
            + "</div>"
        )
    }
}

function dateTimeRemover(){
    if($('.date-time-div > .row').length > 1){
        $('.date-time-div > .row:last-child').remove();
    }
}