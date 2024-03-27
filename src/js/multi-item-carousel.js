export class MultiItemCarousel {
  intervals={}

  constructor() {
    
  }

  //TODO: enable swipe
  

  initMultiItemCarousel () {
    const carousels = document.getElementsByClassName('multi-item-carousel')
    for (var i = 0; i < carousels.length; i++) {
      this.initCarousel(carousels[i]);
    }
  }
  
  
  setCarouselInterval(carousel,intervalTime) {
    let _this = this
    const carouselId = carousel.dataset.carouselId
  
    if( this.intervals[carouselId] ) {
      clearInterval(this.intervals[carouselId])
    }
  
    let interval = setInterval(function() {
      if( !_this.changeItemsPosition('next',carousel) ){
        carousel.querySelector('.mic-indicator').click()
      }
    }, intervalTime);
  
    this.intervals[carouselId] = interval
  
  }
  
  
  initCarousel(carousel) {
    const _this = this
    carousel.dataset.carouselId = Date.now().toString()
    const mics = carousel.querySelectorAll('.mic-arrow')
    mics.forEach((mic) => {
      mic.onclick =( function(e) {   
        _this.changeItemsPosition( mic.dataset.step, carousel );
      })
    })
  
    let  intervalTime = carousel.dataset.interval
    
    
    const micIndicators = carousel.querySelectorAll('.mic-indicator')
    micIndicators.forEach((micIndicator)=>{
      micIndicator.onclick = (function(e) {
        
        if(intervalTime) {
          _this.setCarouselInterval(carousel,intervalTime)
        }
  
        let idx = micIndicator.dataset.idx
        const scrollWrapper = carousel.querySelector('.mic-scroll-wrapper')
        let width = scrollWrapper.clientWidth + this.getWidthAjust()
        console.log( {width,scrollWrapper, left:width*idx}  );
        carousel.querySelector('.mic-indicator.active').classList.remove('active')
        micIndicator.classList.add('active')
        
        scrollWrapper.scroll({
          left:width*idx ,
          behavior: 'smooth' 
        })
        carousel.dataset.currentPosition=idx
      })
    })
    
    if(intervalTime) {
      this.setCarouselInterval(carousel,intervalTime)
    }
  }
  
  getWidthAjust() {
    if( window.screen.width > 900 ) {
      return 0
    }
  
    if( window.screen.width > 600 ) {
      console.log(0)
      return 0
    }
  
    return 0;
  }


  
  changeItemsPosition( step, carousel ) {
  
    //reset el interval
    let  intervalTime = carousel.dataset.interval
    if(intervalTime) {
      this.setCarouselInterval(carousel,intervalTime)
    }
    
  
    const scrollWrapper = carousel.querySelector('.mic-scroll-wrapper')
    const pages = Array.from(carousel.querySelectorAll('.mic-indicator')).filter(s =>
      window.getComputedStyle(s).getPropertyValue('display') != 'none'
    ).length;
  
   
  
    let width = scrollWrapper.clientWidth + this.getWidthAjust()
    const currentPosition = carousel.dataset.currentPosition
    const nextPosition = currentPosition<pages-1?parseInt(currentPosition)+1:currentPosition
    const prevPosition = currentPosition>0?parseInt(currentPosition)-1:currentPosition
    
    
    if( step == 'next' ) {
  
      if( currentPosition == nextPosition ) {
        return false;
      }
      
      scrollWrapper.scroll( {
        left:width*nextPosition,
        behavior: 'smooth' 
      } )
      carousel.dataset.currentPosition = nextPosition
      
    } else {
      
      if( currentPosition == prevPosition ) {
        return false;
      }
  
      scrollWrapper.scroll( {
        left:width*prevPosition,
        behavior: 'smooth' 
      } )
      carousel.dataset.currentPosition = prevPosition
      
    }
    
    //cambiar active en indicator
    
    let idx = carousel.dataset.currentPosition
    if(idx < 9 && idx >= 0) {
      const indicator =  carousel.querySelector('.mic-indicator.active')
      indicator.classList.remove('active');
      
      const  indicatorsActive =  carousel.querySelectorAll('.mic-indicator')
      indicatorsActive.forEach((indicatorActive)=>{
        if(indicatorActive.dataset.idx==idx)
        indicatorActive.classList.add('active')
      })      
    }
  
    return true
    
  }
}