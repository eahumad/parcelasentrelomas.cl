import {Menu} from "./menu"
import {MultiItemCarousel} from "./multi-item-carousel"
import { Panoramico } from "./panoramico"


const menu = new Menu()
menu.init()
const multiItemCarousel = new MultiItemCarousel()

const panoramico = new Panoramico()

const loadPannellum = () => {
  const script = document.createElement('script');
  script.onload = () => { console.log('script loaded!'); };
  script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
  document.head.append(script);
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Entre Lomas")
  setTimeout(function() {
    multiItemCarousel.initMultiItemCarousel()
    loadPannellum()
    setTimeout(function() {
      panoramico.init()
    },500)

  },500)
  
});
