import {isWeekend} from "/.date-helper.js";

var calendar = document.querySelector("#calendar");

for (let day = 1; day < 31; day ++) {
    var date = new Date(Date.UTC{2018,0,day});

    var options = { weekday: "short"};

    var dayName = new Intl.DateTimeFormat("en-US", options).format(date);
    var weekend = isWeekend(day)

    caneldar.insertAdjacentHTML("beforeend", '<div class ="day ${weekend ? "weekend" ": ""}>${day{</div>);}}})
}
