import React, {Component} from "react";
import Navigation from "./navigation";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";

class MainContainer extends Component {

  render() {
      return(
        <div className="mainContainer">
            <Navigation />
            <header class="masthead" id="masthead">
                <div class="container d-flex h-100 align-items-center">
                    <div class="mx-auto text-center">
                        <h1 class="mx-auto my-0 text-uppercase">DEVELOPER.</h1>
                    </div>
                </div>
            </header>
            <section className="aboutMe">
                <AboutMe/>
            </section>
            <section className="projects">
                <Projects/>
            </section>
            <section className="contact">
                <Contact/>
            </section>
            <footer class="bg-black small text-center text-white-50">
                <div class="container">
                Copyright &copy; Susan Chesnut 2019
                </div>
            </footer>
        </div>
      );
  }
}

export default MainContainer;
