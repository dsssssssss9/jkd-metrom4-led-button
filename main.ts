input.buttonD12.onEvent(ButtonEvent.Down, function () {
    pins.D8.digitalWrite(false)
})
input.buttonD12.onEvent(ButtonEvent.Up, function () {
    pins.D8.digitalWrite(true)
})
pixel.setColor(0x007fff)
pins.D8.digitalWrite(false)
pins.D12.setPull(PinPullMode.PullDown)
forever(function () {
	
})
