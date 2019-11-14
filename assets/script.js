var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
var currentHour = new Date().getHours();//Current hour in military time


function newFunction() {
    $("#txt").click(function () {
        $(this).css("background-color", "red");
    });
}
newFunction();

function save() {
    $("#save").click(function () {
        localStorage.setItem(saveButton).click();
    });
}
save();

