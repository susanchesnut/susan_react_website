import React, { Component } from "react";
import _ from "lodash";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  };

  handleScroll() {
    let mainNav = document.getElementById("mainNav");
    if (!_.isNil(mainNav)) {
      if (window.pageYOffset > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container" id="navigation">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"/>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">
                        About
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#projects">
                        Projects
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact">
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
  };
}

export default Navigation;
