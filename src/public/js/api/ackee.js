const updateAckeeAPI = async () => {
    var viewsToday

    const render = () => {
        document.querySelectorAll('#ackee-api-viewsToday').forEach((el) => {
            el.innerHTML = viewsToday
        })
    }

    try {
        const response = await fetch('/api/ackee')

        if (response.ok === false) {
            viewsToday = '-'
        }
        else {
            const json = await response.json()
            viewsToday = json.facts.viewsToday
        }
        render(

        )
    } catch (err) {
        viewsToday = '-'
        render()
        throw err
    }


}

document.querySelectorAll('#ackee-api-refresh-viewsToday').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelectorAll('#ackee-api-viewsToday').forEach((el) => {
            el.innerHTML = '-'
        })
        updateAckeeAPI()
    })
})
