// basic.forever(function () {
//     stembot.setup()
//     stembot.setPinMode(SBMode.Input)
//     basic.showString("" + (stembot.readLine(SBIRSensor.Right)))
//     basic.showString("" + (stembot.lightSensor(SBLdr.Right)))
//     basic.showString("" + (stembot.ping(SBPingUnit.Inches)))
//     stembot.moveIt(SBMove.Forward)
//     basic.showString("" + (stembot.digitalRead(SBPin.Sv6)))
//     stembot.digitalWrite(SBPin.Sv5, false)
// })


// Simple test program
basic.forever(function () {
    stembot.setup();
    
    // Test line sensors
    basic.showString("L:" + stembot.readLine(SBIRSensor.Left));
    basic.pause(1000);
    basic.showString("R:" + stembot.readLine(SBIRSensor.Right));
    basic.pause(1000);
    
    // Test ultrasonic sensor
    basic.showString("D:" + stembot.ping(SBPingUnit.Centimeters));
    basic.pause(1000);
    
    // Test motor movements
    stembot.moveIt(SBMove.Forward);
    basic.pause(1000);
    stembot.moveIt(SBMove.Stop);
    basic.pause(1000);
})