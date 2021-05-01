var calendar = $("#calendar");
for (let i = 9; i< 18; ++i){
    var div = $("<div>").addClass("calendar-box");
    var input = $("<textarea>").addClass("input-div").attr("id",`input-${i}`);
    var time = `${i}:00:00`;
    var formattedTime = moment(time,"HH:mm:ss").format("hh:mm A")
    var timediv = $("<div>").addClass("time-div").text(formattedTime);
    var lockdiv = $("<div>").addClass("lock");
    var img = $("<img>").attr("src","path to image here");
    lockdiv.append(img);
    div.append(timediv);
    div.append(input);
    div.append(lockdiv);
    calendar.append(div);
}


// var isWeekend = day => {
//     //6 when its saturday, 0 - sunday
//     return day %7 ===6 || day % 7 === 0;
// }

// var getDayName = day => {
//     var date = new Date(Date.UTC(2018,0,day));

//     return new Intl.DateTimeFormat("en-US", { weekday: "short" }) format(date);

// }

