var style = document.createElement ( 'style' )
var p = document.body.appendChild (
document.createElement (`p`)
)

p.innerText = `Picture`

p.onclick = function (event){
    document.querySelector ("img").style.visibility = "visible"
}

var img = document.createElement (`img`)
document.body.appendChild (img)
img.src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

img.style.transition = "all .5s"
img.style.visibility = "hidden"
img.style.width = "100px"
img.onclick = function (event) {
this.style.width = "100px"
this.style.visibility = "hidden"
}
img.onmouseover = function (event) {
    document.querySelector ("img").style.width = "200px"
    }
img.onmouseout = function (event) {
    document.querySelector ("img").style.width = "100px"
    }