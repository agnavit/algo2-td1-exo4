input.onButtonPressed(Button.A, function () {
    if (deplacement != 0) {
        led.unplot(deplacement, nb)
        deplacement += -1
        led.plot(deplacement, nb)
    } else {
        led.unplot(deplacement, nb)
        deplacement = 4
        nb += -1
        if (nb == -1) {
            nb = 4
        }
        led.plot(deplacement, nb)
    }
})
input.onButtonPressed(Button.B, function () {
    if (deplacement < 4) {
        led.unplot(deplacement, nb)
        deplacement += 1
        led.plot(deplacement, nb)
    } else {
        led.unplot(deplacement, nb)
        deplacement = 0
        nb += 1
        if (nb == 5) {
            nb = 0
        }
        led.plot(deplacement, nb)
    }
})
let deplacement = 0
let nb = 0
nb = 2
deplacement = 2
led.plot(deplacement, nb)
