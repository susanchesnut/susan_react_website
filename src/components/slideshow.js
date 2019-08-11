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
    this.onDotClick = this.onDotClick.bind(this);
  };

  onDotClick(event) {
    var source = event.target || event.srcElement;
    if (_.isNil(source)) return;
    var index = parseInt(source.classList[source.classList.length-1]);
    if (index === this.state.currentSlide) return;
    this.setState({
      currentSlide: index
    });
  }

  plusSlides() {
    var slides = document.getElementsByClassName("mySlides " + this.props.name);
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
    var slides = document.getElementsByClassName("mySlides " + this.props.name);
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
      return "active";
    }
    else { return ""; }
  }

  render() {
    const items = []
    const dots = []
    var imageInfo = this.props.slideShowModel ? this.props.slideShowModel : []
    for (var i=0; i < imageInfo.length; i++) {
      items.push(
        <div class={`mySlides ${this.props.name}`} style={this.determineSlideDisplay(i)}>
          <img src={require("../images/" + this.props.name + `/image${i}.jpg`)} width="500px" alt=""/>
          <div class="text">{imageInfo[i].blurb}</div>
        </div>
      )
      dots.push(
        <span class={`dot ${this.determineDotDisplay(i)} ${i}`} onClick={this.onDotClick}></span>
      )
    }
    return (
        <div class="slideshow-container">
          {items}
          <a class="prev" onClick={this.minusSlides}>&#10094;</a>
          <a class="next" onClick={this.plusSlides}>&#10095;</a>
          <br />

        <div class="dot-container">
            {dots}
        </div>
      </div>
    );
  }
}

export default Slideshow;