const updateClocks = () => {
    document.querySelectorAll('#clock-hour').forEach((el) => {
        const current = new Date()
        if (el.innerHTML != current.getHours()) {
            el.innerHTML = current.getHours()
        }
    })

    document.querySelectorAll('#clock-minute').forEach((el) => {
        const current = new Date()
        const minute = current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes().toString()
        if (el.innerHTML != minute) {
            el.innerHTML = minute
        }
    })

    document.querySelectorAll('#clock-second').forEach((el) => {
        const current = new Date()
        const second = current.getSeconds() < 10 ? '0' + current.getSeconds() : current.getSeconds().toString()
        if (el.innerHTML != second) {
            el.innerHTML = second
        }
    })
}
