var currentDay = document.querySelector("#currentDay");
currentDay.innerText = moment().format('LL');

var calendar = $("#calendar");
for (let i = 9; i< 18; ++i){
    var div = $("<div>").addClass("calendar-box");
    var input = $("<textarea>").addClass("input-div").attr("id",`input-${i}`);
    var time = `${i}:00:00`;
    var formattedTime = moment(time,"HH:mm:ss").format("hh:mm A")
    var timediv = $("<div>").addClass("time-div").text(formattedTime);
    var button = $("<button>").addClass("save-btn").text("Save");
    var lockdiv = $("<div>").addClass("lock");
    //var img = $("<img>").attr("src","lockimg2.jpeg");
    //lockdiv.append(img);
    lockdiv.append(button);
    div.append(timediv);
    div.append(input);
    div.append(lockdiv);
    calendar.append(div);

    // //if(current time < 9am && >7am){
    //     query select text area .style("background-color:gray")
    //      momment <8 && >7.
    //  else if(moment<9am && )
    //   if current time <9am all blocks 
    // }
    
}

var userInput = localStorage.getItem('userInput');

if (userInput) {
    input.textContent = userInput
}

// // userInput.addEventListener('input', letter => {
// //     text.textContent = letter.target.value
// // })

function save() {
    localStorage.setItem('userInput', input.textContent);
};

for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", save);
}
// function save(){
//     var userInput = input.value;

//     if (userInput) {
//         localStorage.setItem('workinput', input.textContent);
//         input.innertext += `${userInput}`;
//     }
// };

//button.addEventListener("click", save);