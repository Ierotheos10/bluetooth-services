bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
basic.showString("ble-up")
bluetooth.startAccelerometerService()
bluetooth.startMagnetometerService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
basic.forever(function () {
	
})
