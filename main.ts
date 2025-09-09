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



basic.forever(function () {
    stembot.setPinMode(SBMode.Input)

    // Read Line Sensor (Right side)
    basic.showString("" + (stembot.readLine(SBIRSensor.Right)))

    // Read Light Sensor (Right side)
    // basic.showString("" + (stembot.lightSensor(SBLdr.Right)))

    // Read Sonar Distance (Inches)
    basic.showString("" + (stembot.ping(SBPingUnit.Inches)))

    // Digital Read from Sv6
    basic.showString("" + (stembot.digitalRead(SBPin.Sv6)))

    // Digital Write to Sv5 (turn OFF)
    stembot.digitalWrite(SBPin.Sv5, false)
})
