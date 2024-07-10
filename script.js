
function img_enlarge(data) {
  const element_container = document.getElementById("display-container")
  const element_imgcontainer = document.getElementById("img-container")
  const element_img = document.createElement("img")
  const element_cross = document.createElement("img")


  document.body.style.overflow = "hidden"

  element_container.style.display = "flex"
  element_imgcontainer.style.display = "flex"
  element_img.style = "max-width: 80wh; max-height: 85vh"
  element_cross.style = "width: 30px; height: 30px; margin-left: 20px"
  element_img.src = data.src
  element_cross.src = "../assets/icon_cross.png"

  element_cross.onclick = "img_resize()"

  element_cross.addEventListener('mouseover', () => {
    element_cross.style.cursor = 'pointer';
  });

  element_cross.addEventListener("click", () => {
    img_resize()
  })

  element_container.addEventListener("click", () => {
    img_resize()
  })

  document.getElementById("img-container").appendChild(element_img)
  document.getElementById("img-container").appendChild(element_cross)

}

function img_resize() {
  const element_container = document.getElementById("display-container")
  const element_imgcontainer = document.getElementById("img-container")

  document.body.style.overflow = "auto"

  while (element_imgcontainer.firstChild) {
    element_imgcontainer.removeChild(element_imgcontainer.firstChild);
  }

  element_container.style.display = "none"
  element_imgcontainer.style.display = "none"
} 