import React, {Component} from "react";

class Projects extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
      return(
          <div id="projects" class="projects-section bg-light">
                <div class="container">
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7" id="slideshow"></div>
                    <div class="col-xl-4 col-lg-7">
                    <div class="featured-text text-center text-lg-left">
                        <h4>Automated Plant Lights</h4>
                        <p class="text-black-50 mb-0">My plants/succulents don't like the cold so they have to be brought inside during the winter. But how will they get enough light? Sounded like an automation project to me! I bought some lights and borrowed a few wireless remote controlled power outlets. Using an open source project, I programmed a Raspberry Pi to send 2 specific signals that would turn on/off the outlet. Next, I set up a cron job to send that signal at the correct time of day. My plants have flourished last winter! I'm now using it in a similar way to start seedlings.</p>
                    </div>
                    </div>
                </div>
                </div>
          </div>
      );
  }
}

export default Projects;
