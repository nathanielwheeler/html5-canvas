const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

c.fillRect(100, 100, 100, 100)
c.fillRect(300, 300, 100, 100)

// Line
c.beginPath() // This does not reference any entity declared before it.
c.moveTo(200, 200) // This starts the line (x, y)
c.lineTo(300, 300) // This defines the end point location
c.stroke() // Executes the path defined.