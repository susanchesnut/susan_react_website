import React, {Component} from "react";
import Navigation from "./navigation";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import {projectsModelConfig} from "./projectsModel";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            automaticLightData: projectsModelConfig.automaticLights,
            agileData: projectsModelConfig.agile,
            parachuteData: projectsModelConfig.parachute
        };
    };

  render() {
      return(
        <div className="mainContainer">
            <Navigation />
            <header class="masthead" id="masthead">
                <div class="container d-flex h-100 align-items-center">
                    <div class="mx-auto text-center">
                        <h1 class="mx-auto my-0 ">susan</h1>
                    </div>
                </div>
            </header>
            <section className="aboutMe">
                <AboutMe/>
            </section>
            <section className="projects" id="projects">
                <Projects projectModel={this.state.automaticLightData}/>
                <Projects projectModel={this.state.agileData} swapOrientation={true}/>
                <Projects projectModel={this.state.parachuteData}/>
            </section>
            <section className="contact">
                <Contact/>
            </section>
            <footer class="bg-black small text-center text-white">
                <div class="container">
                Copyright &copy; Susan Chesnut 2020
                </div>
            </footer>
        </div>
      );
  }
}

export default MainContainer;
