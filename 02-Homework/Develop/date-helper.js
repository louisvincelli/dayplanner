var isWeekend = day => {
    //6 when its saturday, 0 - sunday
    return day %7 ===6 || day % 7 === 0;
}

var getDayName = day => {
    var date = new Date(Date.UTC(2018,0,day));

    return new Intl.DateTimeFormat("en-US", { weekday: "short" }) format(date);

}

export {isWeekend}