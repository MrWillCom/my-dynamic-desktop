updateClocks()
updateAckeeAPI()

var intervals = {
    clock: setInterval(updateClocks, 1000),
    ackeeAPI: setInterval(updateAckeeAPI, 1000 * 60 * 10)
}
