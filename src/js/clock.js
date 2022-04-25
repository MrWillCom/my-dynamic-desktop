const updateClocks = () => {
    document.querySelectorAll('#clock').forEach((el) => {
        const current = new Date()
        el.innerHTML = el.getAttribute('format')
            .replace('%h', '<span class="hour">' + current.getHours() + '</span>')
            .replace('%m', '<span class="minute">' + current.getMinutes() + '</span>')
    })
}
