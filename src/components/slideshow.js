import React, {Component} from "react";
import _ from "lodash";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
    this.plusSlides = this.plusSlides.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
    this.determineSlideDisplay = this.determineSlideDisplay.bind(this);
    this.determineDotDisplay = this.determineDotDisplay.bind(this);
  };

  plusSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var numberOfSlides = slides.length - 1;
    if (this.state.currentSlide + 1 > numberOfSlides) {
      this.setState({
        currentSlide: 0
      });    
    }
    else {
      this.setState((state, props) => ({
        currentSlide: state.currentSlide + 1
      }));
    }
  }

  minusSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var numberOfSlides = slides.length - 1;
    if (this.state.currentSlide - 1 < 0) {
      this.setState({
        currentSlide: numberOfSlides
      });    
    }
    else {
      this.setState((state, props) => ({
        currentSlide: state.currentSlide - 1
      }));
    }  
  }

  determineSlideDisplay(n) {
    if (n === this.state.currentSlide) {
      return {display:"block"};
    }
    else { 
      return {display: "none"}; 
    }
  }

  determineDotDisplay(n) {
    if (n === this.state.currentSlide) {
      return ".active";
    }
    else { return ""; }
  }

  render() {
    return (
        <div class="slideshow-container">
          <div class="mySlides" style={this.determineSlideDisplay(0)}>
            <img src={require("../images/automatedLights/closetAutoLightsFull.jpg")} width="500px" alt=""/>
            <div class="text">First winter setup</div>
          </div>
          <div class="mySlides" style={this.determineSlideDisplay(1)}>
            <img src={require("../images/automatedLights/closetAutoLightsCloseup.jpg")} width="500px" alt=""/>
            <div class="text">Close up</div>
          </div>
          <div class="mySlides" style={this.determineSlideDisplay(2)}>
            <img src={require("../images/automatedLights/bathtubAutoLightsFull.jpg")} width="500px" alt=""/>
            <div class="text">2nd year setup</div>
          </div>
          <div class="mySlides" style={this.determineSlideDisplay(3)}>
            <img src={require("../images/automatedLights/bloomingCactus.jpg")} width="500px" alt=""/>
            <div class="text">First time blooming in 4 year!</div>
          </div>
          <div class="mySlides" style={this.determineSlideDisplay(4)}>
            <img src={require("../images/automatedLights/seedlingStation.jpg")} width="500px" alt=""/>
            <div class="text">Seedling station</div>
          </div>
          <div class="mySlides" style={this.determineSlideDisplay(5)}>
            <img src={require("../images/automatedLights/raspberryPi.jpg")} width="500px" alt=""/>
            <div class="text">Pi setup</div>
          </div>
          <a class="prev" onClick={this.minusSlides}>&#10094;</a>
          <a class="next" onClick={this.plusSlides}>&#10095;</a>
          <br />

        <div class="dot-container">
            <span class={`dot ${this.determineDotDisplay(0)}`} onClick={() => this.setState({currentSlide : 0})}></span>
            <span class={`dot ${this.determineDotDisplay(1)}`} onClick={() => this.setState({currentSlide : 1})}></span>
            <span class={`dot ${this.determineDotDisplay(2)}`} onClick={() => this.setState({currentSlide : 2})}></span>
            <span class={`dot ${this.determineDotDisplay(3)}`} onClick={() => this.setState({currentSlide : 3})}></span>
            <span class={`dot ${this.determineDotDisplay(4)}`} onClick={() => this.setState({currentSlide : 4})}></span>
            <span class={`dot ${this.determineDotDisplay(5)}`} onClick={() => this.setState({currentSlide : 5})}></span>
        </div>
      </div>
    );
  }
}

export default Slideshow;