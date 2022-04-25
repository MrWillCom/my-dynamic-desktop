window.addEventListener('mousemove', (ev) => {
    document.body.style.setProperty('--mouse-x', ev.clientX)
    document.body.style.setProperty('--mouse-y', ev.clientY)
})
