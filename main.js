/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for proper jshinting

var mraa = require("mraa");
var http = require("http");

var LOCK_API_IP = process.argv[2];
var USER_PASSWORD = "1234";

//http.get('http://' + LOCK_API_IP + ':5000/door/code/get/', function(res) {
//        console.log("Got response: " + res.statusCode);
//        res.setEncoding('utf8');
//        res.on('data', function(data) {
//            data = JSON.parse(data);
//            USER_PASSWORD = data["code"];
//        });
//        res.resume();
//    }).on('error', function(e) {
//        console.log("Got error: " + e.message);
//    });

var pinToInputMap = {
    pin0: 0,
    pin1: 1,
    pin2: 2,
    pin3: 3,
    pin4: 4,
    pin5: 5,
    pin6: 6,
    pin7: 7,
};

var pin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var pin1 = new mraa.Aio(1); //setup access analog input Analog pin #0 (A0)
var pin2 = new mraa.Aio(2); //setup access analog input Analog pin #0 (A0)
var pin3 = new mraa.Aio(3); //setup access analog input Analog pin #0 (A0)
var pin4 = new mraa.Gpio(2); //setup access analog input Analog pin #0 (A0)
var pin5 = new mraa.Gpio(3); //setup access analog input Analog pin #0 (A0)
var pin6 = new mraa.Gpio(4); //setup access analog input Analog pin #0 (A0)
var pin7 = new mraa.Gpio(6); //setup access analog input Analog pin #0 (A0)

var pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
var inputSequence = [];

setInterval(function(){
    for (var i = 0; i < pins.length; i++) {
        var value = pins[i].read();
        
        // if value > 60, add # to sequence
        if (i < 4 && value > 60) {
            addtoSequence(pinToInputMap["pin"+i]);
            testSequence();
            break;
        } else if (i >= 4 && value === 1) {
            addtoSequence(pinToInputMap["pin"+i]);
            testSequence();
            break;
        }
    }
    
    console.log(inputSequence);
}, 800);

function addtoSequence(input) {
    inputSequence.push(input);
    if (!USER_PASSWORD) {
        console.log("Please set your password!");
    } else if (inputSequence.length > USER_PASSWORD.length) {
        inputSequence.shift();
    }
}

function testSequence() {
    if (inputSequence.join("") === USER_PASSWORD) {
        
//        http.get('http://' + LOCK_API_IP + ':5000/door/open/', function(res) {
//            console.log("Got response: " + res.statusCode);
//            res.resume();
//        }).on('error', function(e) {
//            console.log("Got error: " + e.message);
//        });
        console.log("SUCCESS!!! OPEN SESAME!!!");
    }
}
