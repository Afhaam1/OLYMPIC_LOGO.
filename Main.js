canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "Black"
ctx.lineWidth = 1
ctx.rect(160,70,500,250)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = 5
ctx.arc(310,150,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = 5
ctx.arc(475,190,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.lineWidth = 5
ctx.arc(364,190,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.arc(420,150,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.arc(530,150,40,0,2*Math.PI)
ctx.stroke()