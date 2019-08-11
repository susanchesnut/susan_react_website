import React, {Component} from "react";
import Slideshow from "./slideshow";
import ReactHtmlParser from "react-html-parser";

class Projects extends Component {
    constructor(props) {
        super(props);
      };

  render() {
      const {projectModel, swapOrientation} = this.props;
      if (swapOrientation) {
        return ( 
            <div class="projects-section bg-light">
                <div class="container">
                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div class="col-xl-4 col-lg-7 description">
                                <div class="featured-text text-center text-lg-left">
                                    <h4>{projectModel ? projectModel.header : "header"}</h4>
                                    <p class="text-black-50 mb-0">{ReactHtmlParser(projectModel ? projectModel.description : "description")}</p>
                                </div>
                        </div>
                        <div class="col-xl-8 col-lg-7">
                            <Slideshow slideShowModel={projectModel ? projectModel.imageInformation : null} name={projectModel ? projectModel.name : "name"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
      else {
          return (
            <div class="projects-section bg-light">
                <div class="container">
                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div class="col-xl-8 col-lg-7">
                            <Slideshow slideShowModel={projectModel ? projectModel.imageInformation : null} name={projectModel ? projectModel.name : "name"}/>
                        </div>
                        <div class="col-xl-4 col-lg-7 description">
                            <div class="featured-text text-center text-lg-left">
                                <h4>{projectModel ? projectModel.header : "header"}</h4>
                                <p class="text-black-50 mb-0">{ReactHtmlParser(projectModel ? projectModel.description : "description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
      }
    }
}

export default Projects;
