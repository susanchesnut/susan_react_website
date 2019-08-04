import React, {Component} from "react";

class Slideshow extends Component {
  // constructor(props) {
  //   super(props);
  // }

  plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  render() {
    return (
      <div>
        <div class="slideshow-container">
          <div class="mySlides">
            <div class="numbertext">1 / 6</div>
            <img
              src="img/automatedLights/closetAutoLightsFull.jpg"
              style="width:100%"
            />
            <div class="text">First winter setup</div>
          </div>
          <div class="mySlides">
            <div class="numbertext">2 / 6</div>
            <img
              src="img/automatedLights/closetAutoLightsCloseup.jpg"
              style="width:100%"
            />
            <div class="text">Close up</div>
          </div>
          <div class="mySlides">
            <div class="numbertext">3 / 6</div>
            <img
              src="img/automatedLights/bathtubAutoLightsFull.jpg"
              style="width:100%"
            />
            <div class="text">2nd year setup</div>
          </div>
          <div class="mySlides">
            <div class="numbertext">4 / 6</div>
            <img src="img/automatedLights/bloomingCactus.jpg" style="width:100%" />
            <div class="text">First time blooming in 4 year!</div>
          </div>
          <div class="mySlides">
            <div class="numbertext">5 / 6</div>
            <img src="img/automatedLights/seedlingStation.jpg" style="width:100%" />
            <div class="text">Seedling station</div>
          </div>
          <div class="mySlides">
            <div class="numbertext">6 / 6</div>
            <img src="img/automatedLights/raspberryPi.jpg" style="width:100%" />
            <div class="text">Pi setup</div>
          </div>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
          <br />
        </div>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
            <span class="dot" onclick="currentSlide(6)"></span>
        </div>
      </div>
    );
  }
}

export default Slideshow;


// var slideIndex = 1;
// showSlides(slideIndex);

