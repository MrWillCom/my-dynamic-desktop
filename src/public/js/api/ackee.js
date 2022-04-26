const updateAckeeAPI = async () => {
    var viewsToday

    const response = await fetch('/api/ackee')

    if (response.ok === false) {
        viewsToday = 'failed'
    }
    else {
        const json = await response.json()
        viewsToday = json.facts.viewsToday
    }

    document.querySelectorAll('#ackee-api-viewsToday').forEach((el) => {
        el.innerHTML = viewsToday
    })
}

document.querySelectorAll('#ackee-api-refresh-viewsToday').forEach((el) => {
    el.addEventListener('click', updateAckeeAPI)
})
