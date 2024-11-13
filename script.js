function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //pegar a tag image
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar.png.png")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/bg-perfil.jpg")
  }

  //substituir a imagem
}
