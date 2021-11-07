let fire = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    fire = pins.digitalReadPin(DigitalPin.P1)
    if (fire == 0) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.showNumber(fire)
})
