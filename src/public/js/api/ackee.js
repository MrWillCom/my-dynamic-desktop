const updateAckeeAPI = async () => {
    var facts = {
        activeVisitors: '-',
        averageViews: '-',
        averageDuration: '-',
        viewsToday: '-',
        viewsMonth: '-',
        viewsYear: '-',
    }

    const render = () => {
        for (const key in facts) {
            document.querySelectorAll(`#ackee-api-${key}`).forEach((el) => {
                el.innerHTML = facts[key]
            })
        }
    }

    try {
        const response = await fetch('/api/ackee')

        if (response.ok === true) {
            const json = await response.json()
            facts = json.facts
        }

        render()
    } catch (err) {
        render()
        throw err
    }
}

document.querySelectorAll('#ackee-api-refresh').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.ackee-api').forEach((el) => {
            el.innerHTML = '-'
        })
        updateAckeeAPI()
    })
})
