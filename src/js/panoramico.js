
export class Panoramico {
  viewer
  hotSpots = []



  getJson = async function (name) {
    let lotes = []
    await fetch(`./js/${name}.json`)
      .then(response => response.json())
      .then(data => lotes = data)
      .catch(error => console.log(error))

    return lotes
  }


  init = async function () {
    this.createViewer()


    //Iniciar Buttons
    document.querySelector('#panorama #details .cerrar')?.addEventListener('click', (e) => {
      this.cerrarDetails()
    })

    document.querySelector('#panorama #details .contactar')?.addEventListener('click', (e) => {
      this.irAContacto()
    })

    document.addEventListener('click', function(event) {
      let target = event.target
      // If the clicked element doesn't have the right selector, bail
      if (!target.matches('.hotspot-lote')) return
  
      // Don't follow the link
      event.preventDefault()
  
  
      let haveActive = target.classList.contains('active')
  
      let elementos = document.getElementsByClassName('hotspot-lote');
  
  
      Array.from(elementos).forEach(function (elemento) {
        elemento.classList.remove('active')
      })
  
      // Log the clicked element in the console
      target.classList.toggle('active')
  
    }, false);

  }


  cerrarDetails = async function () {
    console.log('cerrar details')
    document.querySelector('#panorama #details').classList.remove('active')
  }

  irAContacto = async function () {
    console.log('ir a contacto')
    window.location.href = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#contacto"
  }





  generateHotspot(points) {
    let response = []
    points.filter((point) => point.visible).forEach(point => {
      if (point.isLugar) {
        console.log({ point })
        response.push(this.generateLugarHostpost(point))
      } else { //generar Hostpo
        response.push(this.generateAHotspot(point))
      }

    })

    response.push(this.generateDisableMouseHotSpot())

    return response
  }

  createViewer = async () => {
    let _this = this
    let params = this.getViewerParams()

    //const lotes = await this.getJson('propiedades')
    //const lugares = await this.getJson('lugares')

    const lotes = []
    const lugares = []
    


    document.getElementById("panorama").style.height = params.height + "px"

    this.viewer = pannellum.viewer('panorama', {
      "autoLoad": true,
      "type": "equirectangular",
      "panorama": "/images/panorama_2.webp",
      "pitch": params.pitch,
      "yaw": params.yaw,
      "hfov": params.hfov,
      "hotSpots": this.generateHotspot([...lotes, ...lugares])
    })

    //Print cords
    this.viewer.on('mousedown', function (e) {
      let cords = _this.viewer.mouseEventToCoords(e)
      console.log(cords)
    })

  }

  getViewerParams() {
    let params = {
      /* pitch : -67.49588568441906,
      yaw : 115.70633233176454, */
      pitch: -9,
      yaw: 147,
      hfov: 200,
      height: window.innerHeight - 100,
    }

    if (window.innerWidth < window.innerHeight) {
      params.pitch = -69.53726010556991
      params.yaw = 46.76916574997824
    }

    if (window.innerWidth <= 768) {
      params.hfov = 80
    } else if (window.innerWidth <= 375) {
      params.pitch = -71.03763260297659
      params.yaw = 46.76916574997824
      params.hfov = 74
    }


    return params
  }



  generateDisableMouseHotSpot = () => {
    return {
      pitch: 0,
      yaw: 0,
      cssClass: 'disableMouseHotSpot active'
    }
  }

  generateDetailHotSpot() {
    return {
      pitch: 0,
      yaw: 0,
      cssClass: 'detailMouseHotSpot active'
    }
  }

  generateLugarHostpost(lugar) {
    return {
      "pitch": lugar.pitch,
      "yaw": lugar.yaw,
      "cssClass": "hotspot-lugar",
      "createTooltipArgs": lugar,
      "createTooltipFunc": (hotSpotDiv, lugar) => {
        let clearHeight = (Math.floor(lugar.nombre.length / 12) + 1) * 55
        hotSpotDiv.innerHTML = `<div>
      <span>${lugar.nombre}</span>
      <div class="line"></div>
      <div class="dot"></div>
      <div class="clear" style="height:${clearHeight}px;"></div>
</div>
      `
      }
    }
  }

  generateAHotspot(lote) {
    return {
      "pitch": lote.pitch,
      "yaw": lote.yaw,
      "cssClass": "hotspot-lote " + lote.estado.toLowerCase(),
      "createTooltipFunc": (hotSpotDiv, lote) => {

        hotSpotDiv.innerHTML = lote.numero


        let h3 = document.createElement('h3')
        h3.innerHTML = lote.estado

        /* let h5 = document.createElement('h5')
        h5.innerHTML = "Ver ficha" */


        let innerDiv = document.createElement('div')
        innerDiv.classList.add('hotspot-tooltip')
        innerDiv.appendChild(h3)
        //innerDiv.appendChild(h5)


        hotSpotDiv.appendChild(innerDiv)

        hotSpotDiv.addEventListener('click', (e) => { this.showDetails(lote) })

      },
      "createTooltipArgs": lote
    }
  }

  showDetails(lote) {
    console.log({ lote })

    let content = document.querySelector('#panorama #details .content')
    let innerDiv = document.createElement('div')

    let txt = `
  <h6>Lote ${lote.numero}</h6>

  Estado: ${lote.estado}<br>
  Superficie: ${parseInt(lote.mts).toLocaleString('es-CL')} m2<br>

  Tipo: ${lote.tipo}<br>
`

    if (parseInt(lote.uf)) {
      txt = txt + `Valor: ${parseInt(lote.uf).toLocaleString('es-CL')} UF<br>`
    }

    content.innerHTML = txt

    document.querySelector('#panorama #details').classList.add('active')

  }


}

