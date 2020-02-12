const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

c.fillStyle = '#00ff00'
c.fillRect(100, 100, 100, 100)
c.fillRect(300, 300, 100, 100)

// Line
c.beginPath() // This does not reference any entity declared before it.
c.moveTo(200, 200) // This starts the line (x, y)
c.lineTo(300, 300) // This defines the end point location
// Add as many lineTos as needed here to continue a string of connected lines
c.strokeStyle = '#00ff00'
c.stroke() // Executes the path defined.

// Arc / Circle
c.beginPath() // NOTE this is the way you stop lines from connecting one after another.
c.arc(150, 350, 50, 0, Math.PI * 2)
c.stroke() // NOTE that this inherits the style of the previous stroke

for (let i = 0; i < 12; i++) {
	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	c.beginPath()
	c.arc(x, y, 25, 0, Math.PI * 2)
	c.strokeStyle = '#ff0000'
	c.stroke()
}