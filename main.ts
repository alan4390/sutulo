let contador = 0
basic.forever(function () {
    if (input.lightLevel() < 70) {
        if (contador < 2) {
            basic.showIcon(IconNames.Duck)
            basic.pause(2000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            contador += 1
            basic.showNumber(contador)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    } else {
        basic.showIcon(IconNames.No)
        contador = 0
    }
})
