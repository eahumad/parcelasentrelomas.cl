export class Slider {
  sliderWraps = null

  initSlider() {
    this.sliderWraps = document.querySelectorAll('.slider-wrap')

    // Iterate over each slider-wrap element
    this.sliderWraps.forEach(function (sliderWrap) {
      var sliderInner = sliderWrap.querySelector('.slider-inner')
      var slides = sliderInner.querySelectorAll('.slide')
      var previousNav = sliderWrap.querySelector('.previous')
      var nextNav = sliderWrap.querySelector('.next')
      var currentSlide = 0

      // Function to show the current slide
      function showSlide(index) {
        // Remove the "active" class from all slides
        slides.forEach(function (slide) {
          slide.classList.remove('active')
        })

        // Add the "active" class to the current slide
        slides[index].classList.add('active')
      }

      // Function to navigate to the previous slide
      function goToPreviousSlide() {
        currentSlide--
        if (currentSlide < 0) {
          currentSlide = slides.length - 1
        }
        showSlide(currentSlide)
      }

      // Function to navigate to the next slide
      function goToNextSlide() {
        currentSlide++
        if (currentSlide >= slides.length) {
          currentSlide = 0
        }
        showSlide(currentSlide)
      }

      // Show the initial slide
      showSlide(currentSlide)

      setInterval(() => {
        goToNextSlide()
      }, 5000);

      // Attach event listeners to navigation buttons
      /* previousNav.addEventListener('click', goToPreviousSlide)
      nextNav.addEventListener('click', goToNextSlide) */


    })
  }


}