
//menu_button

export class Menu {

  menus = document.querySelectorAll('.menu-button')
  modalNav = document.getElementById('modal-nav')
  modalNavLi = document.querySelectorAll('#modal-nav li');


  init() {
    let _this = this
    this.menus.forEach(function (menu) {
      menu.addEventListener('click', () => { _this.toggleMenu(menu) }, false)
    })

    this.modalNavLi.forEach(function (li) {
      li.addEventListener('click', () => {
        let current = document.querySelector('#modal-nav .active')
        current?.classList.remove('active')
        li.classList.add('active')
        if (window.innerWidth < 1000) {
          _this.toggleMenu(_this.menus[0])
        }
      })
    })
  }


  disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    }
  }

  enableScroll() {
    window.onscroll = function () { }
  }

  toggleMenu = function (menu) {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active')
      this.modalNav.classList.remove('active')
      this.enableScroll()
    } else {
      menu.classList.add('active')
      this.modalNav.classList.add('active')
      this.disableScroll()
    }
  }


  firstToUpper(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length)
  }

}

