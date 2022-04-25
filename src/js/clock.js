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
}
