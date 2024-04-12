import { Menu } from "./menu"
import { MultiItemCarousel } from "./multi-item-carousel"
import { Panoramico } from "./panoramico"
import { Slider } from "./slider"
import { ComoLlegar } from "./como_llegar"

const menu = new Menu()
menu.init()
const multiItemCarousel = new MultiItemCarousel()
const panoramico = new Panoramico()
const slider = new Slider()
const comoLlegar = new ComoLlegar()

function getAnchor() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('#')

  return (urlParts.length > 1) ? urlParts[1] : null
}

const loadPannellum = () => {
  const script = document.createElement('script')
  script.onload = () => { console.log('script loaded!') }
  script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
  document.head.append(script)
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Entre Lomas")
  setTimeout(function () {
    slider.initSlider()
    multiItemCarousel.initMultiItemCarousel()
    comoLlegar.initMap()
    loadPannellum()
    setTimeout(function () {
      panoramico.init()
      let anchor = getAnchor()
      if( anchor ) {
        window.location.replace('#'+anchor)
      }
    }, 500)

  }, 500)

})
