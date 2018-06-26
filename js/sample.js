"use strict";
// {index : { name : [{ color : time, ...}] }}
let shiftObj = {
    // Data Passed
    "1" : {
        "Sachin": {
            "time":"08:00-11:00",
            "task_name":"Task 1",
            "project_name":"Relevnt",
            "entries":
            [
                {"1" : "08:10-09:00"},
                {"7" : "11:00-12:00"},
                {"9" : "01:00-01:15"},
            ]
       }

    },
    "2" : {
        "karthi": {
            "time":"09:00-10:00",
            "task_name":"Task 2",
            "project_name":"vagabond",
            "entries": 
            [
                {"3" : "09:00-11:00"},
                {"2" : "12:00-15:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "3" : {
        "Umar": {
        "time":"09:30-10:00",
            "task_name":"Task 3",
            "project_name":"Bajasen",
            "entries": 
            [
                {"1" : "10:00-12:00"},
                {"5" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "4" : {
        "Mansur": {
            "time":"11:00-12:00",
            "task_name":"Task 4",
            "project_name":"AAA",
            "entries": 
            [
                {"6" : "10:00-12:00"},
                {"2" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "5" : {
        "John": {
            "time":"10:00-10:10",
            "task_name":"Task 5",
            "project_name":"B&C financials",
            "entries": 
            [
                {"1" : "10:00-12:00"},
                {"7" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "6" : {
        "Naveen": {
            "time":"11:00-11:10",
            "task_name":"Task 6",
            "project_name":"DB Design",
            "entries": 
            [
                {"8" : "10:00-12:00"},
                {"2" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "7" : {
        "Ashwin": {
            "time":"08:10-09:10",
            "task_name":"Task 7",
            "project_name":"SGG",
            "entries": 
            [
                {"1" : "09:42-12:00"},
                {"2" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "8" : {
        "William":  {
            "time":"10:00-12:30",
            "task_name":"Task 8",
            "project_name":"Resonate",
            "entries": 
            [
                {"2" : "10:30-11:00"},
                {"1" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
    "9" : {
        "Jon snow": {
            "time":"12:00-12:10",
            "task_name":"undefined",
            "project_name":"undefined",
            "entries": 
            [
                {"4" : "08:00-11:00"},
                {"6" : "13:00-14:00"},
                {"9" : "17:00-20:00"},
            ]
        }
    },
};
let obj = {
    // Beginning Time
    startTime: "08:00",
    // Ending Time
    endTime: "20:00",
    // Time to divide(minute)
    divTime: "1",
    // Time Table
    shift: shiftObj,
    // Other options
    option: {
        // workTime include time not displaying
        workTime: true,
        bgcolor: ["#00FFFF"],
        // {index :  name, : index: name,,..}
        // selectBox index and shift index should be same
        // Give randome if shift index was not in selectBox index
    }
};
// Call Time Table
var instance = new TimeTable(obj);
//console.time("time"); // eslint-disable-line
instance.init("#test");
//console.timeEnd("time");// eslint-disable-line

// Only works if selectBox option exist
//$(document).on("click", "#addRow",()=>{instance.addRow();});

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function getActualDate() {
    var d = new Date();
    var day = addZero(d.getDate());
    var month = addZero(d.getMonth()+1);
    var year = addZero(d.getFullYear());
    return day + ". " + month + ". " + year;
}
function getActualHour() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return h + ":" + m + ":" + s;
}
$(document).ready(function(){
   $("#time").html(getActualHour());
    $("#date").html(getActualDate());
    //  $("table").click(function(){
    //     $(".timeTableToolTip").append(function(n){
    //         var project_name = 'vagabond',
    //             name = 'sachin';
    //             return "I can display " + name;
    //     });
    // });
});



$(document).ready(function(){
    $(document).mousemove(function(event){
        $("#timeBar").off("");
    });
});
