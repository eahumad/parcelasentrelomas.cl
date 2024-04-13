export function checkVisible(elm, threshold, mode) {
  threshold = threshold || 0
  mode = mode || 'visible'

  var rect = elm.getBoundingClientRect()
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  var above = rect.bottom - threshold < 0
  var below = rect.top - viewHeight + threshold >= 0

  return mode === 'above' ? above : (mode === 'below' ? below : !above && !below)
}



export function detectSwipe(elm) {
  var initialX = null

  elm.addEventListener('touchstart', function (event) {
    initialX = event.touches[0].clientX
  })

  elm.addEventListener('touchmove', function (event) {
    if (!initialX) {
      return
    }

    var currentX = event.touches[0].clientX
    var diffX = currentX - initialX

    if (Math.abs(diffX) > 50) { // Consideramos un desplazamiento de al menos 50px para ser un swipe
      event.preventDefault() // Evita el desplazamiento predeterminado del navegador

      let direction = 'next'
      if (diffX > 0) {
        direction = 'prev'
      } 

      var swipeEvent = new CustomEvent('swipe', {
        detail: {
          direction: direction
        }
      })

      elm.dispatchEvent(swipeEvent);


      initialX = null
    }
  })
}



export function doBounce(elm, scrollwrapperclass) {
  const scrollWrapper = elm.querySelector(scrollwrapperclass)
  const width = scrollWrapper.clientWidth

  scrollWrapper.scroll( {
    left: width / 3,
    behavior: 'smooth' 
  } )
  setTimeout(() => {
    scrollWrapper.scroll( {
      left: 0,
      behavior: 'smooth' 
    } )  
  }, 300);
  
}

export function showSwipeHandIcon(elm) {
  // Crear elemento de imagen
  var swipeHand = document.createElement('img');
  swipeHand.src = '/images/iconos/hand_white.webp';
  swipeHand.className = 'swipe-hand';
  
  // Mostrar imagen sobre el elemento dado
  elm.appendChild(swipeHand);
  
  // Eliminar la imagen después de la animación
  setTimeout(function() {
    elm.removeChild(swipeHand);
  }, 1600);
}

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}