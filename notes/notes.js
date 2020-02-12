// This is a pretty good responsive render that doesn't wonk up the shapes

function render() {
	context.canvas.width = document.documentElement.clientWidth
	context.canvas.height = document.documentElement.clientHeight

	context.fillStyle = "#000000"
	context.fillRect(0,0, context.canvas.width, context.canvas.height)
}
render()

window.addEventListener("resize", render)


// Unfortunately, using this css really zooms into the canvas and pixelates shapes within.
// canvas {
// 	height: 100vh;
// 	width: 100vw;
// }