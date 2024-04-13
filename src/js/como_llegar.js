import mapstyle from './../json/mapstyle.json'

export class ComoLlegar {


  initMap() {
    const _this = this
    const myLatLng = { lat: -35.480029, lng: -71.194079 }

    const mapOptions = {
      center: myLatLng,
      zoom: 11,
      disableDefaultUI: true,
      styles: mapstyle,
      mapId: 'map_entre_lomas'
    }

    const map = new google.maps.Map(document.getElementById('map'), mapOptions)

    const pin = document.createElement("img");
    pin.src = 'images/pin.webp';
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: myLatLng,
      map: map,
      title: 'Entre Lomas',
      content: pin,
    })


    const customButtonDiv = document.createElement('div')
    customButtonDiv.className = 'custom-buttons'

    const zoomInButton = document.createElement('button')
    zoomInButton.innerHTML = '<i class="fa fa-plus"></i>'
    zoomInButton.className = 'zoom-button zoom-in'
    zoomInButton.addEventListener('click', function () {
      map.setZoom(map.getZoom() + 1)
    })
    customButtonDiv.appendChild(zoomInButton)

    const zoomOutButton = document.createElement('button')
    zoomOutButton.innerHTML = '<i class="fa fa-minus"></i>'
    zoomOutButton.className = 'zoom-button zoom-out'
    zoomOutButton.addEventListener('click', function () {
      map.setZoom(map.getZoom() - 1)
    })
    customButtonDiv.appendChild(zoomOutButton)

    const fullscreenButton = document.createElement('button')
    fullscreenButton.innerHTML = '<i class="fa-solid fa-expand"></i>'
    fullscreenButton.className = 'fullscreen-button'
    fullscreenButton.addEventListener('click', function () {

      console.log(map)

      if (_this.isFullscreen(map)) {
        _this.exitFullscreen(fullscreenButton)
      } else {
        _this.requestFullscreen(map, fullscreenButton)
      }
    })
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(fullscreenButton)

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(customButtonDiv)
  }


  isFullscreen(map) {
    let element = map.getDiv().firstChild
    return (
      (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement) == element
    )
  }

  requestFullscreen(map, fullscreenButton) {
    let element = map.getDiv().firstChild
    if (element.requestFullscreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-compress"></i>'
      element.requestFullscreen()
    } else if (element.webkitRequestFullScreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-compress"></i>'
      element.webkitRequestFullScreen()
    } else if (element.mozRequestFullScreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-compress"></i>'
      element.mozRequestFullScreen()
    } else if (element.msRequestFullScreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-compress"></i>'
      element.msRequestFullScreen()
    }
  }

  exitFullscreen(fullscreenButton) {

    if (document.exitFullscreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-expand"></i>'
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-expand"></i>'
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-expand"></i>'
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      fullscreenButton.innerHTML = '<i class="fa-solid fa-expand"></i>'
      document.msExitFullscreen()
    }
  }

}