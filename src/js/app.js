import {Menu} from "./menu"
import {MultiItemCarousel} from "./multi-item-carousel"
import { Panoramico } from "./panoramico"


const menu = new Menu()
menu.init()
const multiItemCarousel = new MultiItemCarousel()
multiItemCarousel.initMultiItemCarousel()
const panoramico = new Panoramico()

document.addEventListener("DOMContentLoaded", function(event) {
  panoramico.init()
});
