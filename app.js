let container = document.querySelector('main')
const radius = 120

container.style['-webkit-clip-path'] = 'circle(0px at 0px 0px)'
container.style['clip-path'] = 'circle(0px at 0px 0px)'


document.addEventListener('mousemove', function (event) {
    let x = event.clientX
    let y = event.clientY

    let circle = `circle(${radius}px at ${x}px ${y}px)`
    container.style['-webkit-clip-path'] = circle
    container.style['clip-path'] = circle
  })