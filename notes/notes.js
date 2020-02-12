// This is _one_ way to make the canvas responsive.  However, it is much more efficient to simply use `vh` and `vw` to style the canvas.

function render() {
	context.canvas.width = document.documentElement.clientWidth
	context.canvas.height = document.documentElement.clientHeight

	context.fillStyle = "#000000"
	context.fillRect(0,0, context.canvas.width, context.canvas.height)
}
render()

window.addEventListener("resize", render)